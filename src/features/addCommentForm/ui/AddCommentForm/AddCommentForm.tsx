import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFromError, getAddCommentFromText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormAction } from '../../model/slices/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

interface AddCommentFormProps {
  className?: string
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className } = props

  const { t, i18n } = useTranslation('comment')
  const text = useSelector(getAddCommentFromText)
  const error = useSelector(getAddCommentFromError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormAction.setText(value))
  }, [dispatch])

  return (
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
          <Input
              placeholder={t('Write a comment')}
              value={text}
              onChange={onCommentTextChange}
          />
          <Button
              theme={ButtonTheme.OUTLINE}
          >
              {t('Send')}
          </Button>
      </div>
  )
})
