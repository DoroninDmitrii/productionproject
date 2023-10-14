import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/redesigned/Code';
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t, i18n } = useTranslation();

        return (
            <div className={classNames(cls.width, {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    },
);

export default ArticleCodeBlockComponent;
