import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { scrollSaveAction } from '@/features/ScrollSave/index'
import { StateSchema } from '../../app/providers/StoreProvider/index'
import { getSaveScrollByPath } from '@/features/ScrollSave/model/selectors/scrollSave'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getSaveScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveAction.setScrollPosition({
      position: e.currentTarget.scrollTop, path: pathname
    }))
  }, 500)

  return (
      <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
          {children}
          {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
      </section>
  )
})

export default Page
