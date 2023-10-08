import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import cls from './AdditionalInfoCotainer.module.scss'

export const AdditionalInfoCotainer = memo(() => {
    const { t, i18n } = useTranslation();

    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article]);

    if (!article) {
        return null;
    }

    return (
        <Card padding='24' border='round' className={cls.card}>
            <ArticleAdditionalInfo 
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
                onEdit={onEditArticle}
            />
        </Card>
    )
})
