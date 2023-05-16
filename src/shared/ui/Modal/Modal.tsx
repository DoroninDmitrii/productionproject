import { useTheme } from 'app/providers/ThemeProvider'
import React, { useState, useRef, useEffect, useCallback, MutableRefObject } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  isClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    isClose,
    lazy
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  const { theme } = useTheme()

  // For lazy loading modal
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (isClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        isClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [isClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }
  // For lazy loading modal
  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
              <Overlay onClick={closeHandler} />
              <div className={cls.content} >
                  {children}
              </div>
          </div>
      </Portal>
  )
}
