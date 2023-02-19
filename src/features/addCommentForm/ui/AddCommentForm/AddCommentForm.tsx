import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFromError, getAddCommentFromText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormAction, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props

  const { t, i18n } = useTranslation('comment')
  const text = useSelector(getAddCommentFromText)
  const error = useSelector(getAddCommentFromError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormAction.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.AddCommentForm, {}, [className])}>
              <Input
              className={cls.input}
              placeholder={t('Write a comment')}
              value={text}
              onChange={onCommentTextChange}
          />
              <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onSendHandler}
          >
                  {t('Send')}
              </Button>
          </div>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
