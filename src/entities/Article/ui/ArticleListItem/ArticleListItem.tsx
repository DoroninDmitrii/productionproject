import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/const/articlesConst';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {

    return (
        <ToggleFeatures 
            feature='isAppRedesigned' 
            on={<ArticleListItemRedesigned {...props} />} 
            off={<ArticleListItemDeprecated {...props} />}
        />
    )

});

export default ArticleListItem;
