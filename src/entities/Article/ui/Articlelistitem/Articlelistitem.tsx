import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Articlelistitem.module.scss'

interface ArticlelistitemProps {
  className?: string
}

export const Articlelistitem = memo((props: ArticlelistitemProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.Articlelistitem, {}, [className])}>

      </div>
  )
})

export default Articlelistitem
