import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
          <Code text={block.code}/>
      </div>
  )
})

export default ArticleCodeBlockComponent
