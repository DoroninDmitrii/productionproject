/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Article is edited according to ID = ') + id
                : t('Create a new article')}
        </Page>
    );
});

export default ArticleEditPage;
