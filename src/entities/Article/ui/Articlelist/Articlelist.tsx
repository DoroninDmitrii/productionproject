import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Articlelist.module.scss'

interface ArticlelistProps {
  className?: string
}

export const Articlelist = memo((props: ArticlelistProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.Articlelist, {}, [className])}>

      </div>
  )
})

export default Articlelist
