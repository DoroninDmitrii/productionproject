import { memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticlebyId } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ArticleDetailsProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticlebyId('1'))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {t('ArticleImageBlockComponent')}
          </div>
      </DynamicModuleLoader>
  )
})

export default ArticleDetails
