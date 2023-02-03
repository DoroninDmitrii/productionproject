import { classNames } from 'shared/lib/classNames/classNames'
import { memo, ReactNode } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  children: ReactNode
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props

  return (
      <pre className={classNames(cls.Code, {}, [className])}>
          <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
              <CopyIcon className={cls.copyIcon}/>
          </Button>

          <code >
              {children}
          </code>
      </pre>
  )
})
