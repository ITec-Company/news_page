import {
  setNextPageAC,
  setPreviousPageAC,
  singlePaginationReducer,
  SinglePaginationReducerType,
} from 'store/single_pagination_reducer'

const ONE: number = 1

const paginationInitialState: SinglePaginationReducerType = {
  currentPage: 1,
}

describe('single_pagination_reducer', () => {
  test('set next page', () => {
    const action = setNextPageAC()

    const endState = singlePaginationReducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(paginationInitialState.currentPage + ONE)
  })

  test('set previous page', () => {
    const action = setPreviousPageAC()

    const endState = singlePaginationReducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(paginationInitialState.currentPage - ONE)
  })
})
