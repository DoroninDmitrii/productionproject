import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { memo, ReactNode } from 'react'
import { Button } from '../Button/Button'

interface CodeProps {
  className?: string
  children: ReactNode
}

export const Code = memo((props: CodeProps) => {
  const { className, children } = props

  return (
      <pre className={classNames(cls.Code, {}, [className])}>
          <Button className={cls.copyBtn}>Copy</Button>
          <code >
              {children}
          </code>
      </pre>
  )
})
