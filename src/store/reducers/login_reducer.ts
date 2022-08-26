import { createSlice } from '@reduxjs/toolkit'

import { TOKEN } from 'constants/constants'
import { postLoginTC, registrationUserTC } from 'store/thunks/login_thunks'
import { LoginInitialStateType } from 'store/types/login_initial_state_type'

const initialState: LoginInitialStateType = {
  isLogin: false,
  token: '',
  isRegistrationSuccess: false,
  isChangePasswordSuccess: false,
}

const mainSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoginAC: (state, action) => {
      state.isLogin = action.payload
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(postLoginTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.token = action.payload
        localStorage.setItem(TOKEN, JSON.stringify(action.payload))
      }
    })

    addCase(registrationUserTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.isRegistrationSuccess = action.payload
      }
    })
  },
})

export const { setIsLoginAC } = mainSlice.actions

export const loginReducer = mainSlice.reducer
