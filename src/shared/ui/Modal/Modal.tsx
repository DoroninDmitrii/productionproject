import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  isClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    isClose
  } = props

  const closeHandler = () => {
    if (isClose) {
      isClose()
    }
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  return (
      <div className={classNames(cls.Modal, mods, [className])}>
          <div className={cls.overlay} onClick={closeHandler}>
              <div className={cls.content} onClick={onContentClick}>
                  {children}
              </div>
          </div>
      </div>
  )
}
