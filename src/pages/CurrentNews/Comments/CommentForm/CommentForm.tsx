import React, { FC, memo } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/Button/Button'
import { CommentType } from 'store/types'

export type CommentFormType = Pick<CommentType, 'author' | 'text'>

type CommentFormPropsType = {
  postComment: (comment: CommentFormType) => void
}

export const CommentForm: FC<CommentFormPropsType> = memo(({ postComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormType>()

  const onSubmit: SubmitHandler<CommentFormType> = data => {
    postComment(data)
  }

  return (
    <div>
      Ваш комментарий:
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input defaultValue="boss" {...register('author')} placeholder="автор" />
        </div>
        {errors.text && <span>This field is required</span>}
        <div>
          <input
            {...register('text', { required: true })}
            defaultValue="какой хороший сайт"
            placeholder="комментарий"
            maxLength={300}
          />
        </div>
        {errors.text && <span>This field is required</span>}
        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
})
