/* eslint-disable i18next/no-literal-string */
import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticlebyId } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text as TextDeprecated, TextAlign, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/ articleDetails';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { renderArticleBlock } from './renderBlock';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <HStack justify={'center'} max className={cls.avatarWrapper}>
                <AvatarDeprecated size={200} src={article?.img} className={cls.avatar} />
            </HStack>

            <VStack gap='4' max data-testid={'ArticleDetails.Info'}>
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <HStack gap='8' className={cls.articleInfo}>
                    <IconDeprecated className={cls.icon} Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>

                <HStack gap='8' className={cls.articleInfo}>
                    <IconDeprecated className={cls.icon} Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <Text title={article?.title} size='l' bold />
            <Text title={article?.subtitle} />
            <AppImage 
                fallback={<SkeletonRedesigned width={'100%'} height={420} border='16px' />} 
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({ name: 'isAppRedesigned', on: () => SkeletonRedesigned, off: () => SkeletonDeprecated })
    return (
        <VStack gap='16' max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border={'50%'}
            />
            <Skeleton 
                className={cls.title} 
                width={300} 
                height={32} 
            />
            <Skeleton 
                className={cls.skeleton} 
                width={600} height={24} 
            />
            <Skeleton 
                className={cls.skeleton} 
                width='100%' 
                height={200} 
            />
            <Skeleton 
                className={cls.skeleton} 
                width='100%' 
                height={200} 
            />
        </VStack>
    )
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t, i18n } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlebyId(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Mistake is happened')}
            />
        );
    } else {
        content = (
            <ToggleFeatures 
                feature='isAppRedesigned' 
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap='8'
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

export default ArticleDetails;
