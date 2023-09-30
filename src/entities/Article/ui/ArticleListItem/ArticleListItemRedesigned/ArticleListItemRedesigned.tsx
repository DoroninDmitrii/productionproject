import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleListItemProps } from '../ArticleListItem'
import { Text } from '@/shared/ui/redesigned/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { ArticleView, ArticleBlockType } from '../../../model/const/articlesConst'
import { ArticleTextBlock } from '../../../model/types/article'
import { getRouteArticleDetails } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'

import cls from './ArticleListItemRedesigned.module.scss'
import { HStack } from '@/shared/ui/redesigned/Stack'

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const {article, view, className, target} = props;

    const { t, i18n } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap='8'>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width='100%' height={250} />}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                            <Button variant={'outline'}>{t('Read more...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid={'ArticleListItem'}
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
})
