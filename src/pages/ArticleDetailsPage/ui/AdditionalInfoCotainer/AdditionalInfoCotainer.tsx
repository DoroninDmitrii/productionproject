import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import cls from './AdditionalInfoCotainer.module.scss'

export const AdditionalInfoCotainer = memo(() => {
    const { t, i18n } = useTranslation();

    const article = useSelector(getArticleDetailsData);

    if (!article) {
        return null;
    }

    return (
        <Card padding='24' border='round' className={cls.card}>
            <ArticleAdditionalInfo 
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    )
})
