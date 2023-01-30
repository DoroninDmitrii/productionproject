import { memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticlebyId } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/ articleDetails'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t, i18n } = useTranslation('article-details')
  const dispatch = useAppDispatch()

  // const isLoading = useSelector(getArticleDetailsIsLoading)
  const isLoading = true
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticlebyId(id))
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
        <div>
            <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </div>
    )
  } else if (error) {
    content = (
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Mistake is happened')}
        />
    )
  } else {
    content = (
        <div>Article Details</div>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {/* {t('ArticleImageBlockComponent')} */}
              {content}
          </div>
      </DynamicModuleLoader>
  )
})

export default ArticleDetails
