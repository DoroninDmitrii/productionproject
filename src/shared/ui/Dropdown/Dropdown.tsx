import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from '../../lib/classNames/classNames'
import { ReactNode } from 'react'

export interface DropdownItems {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItems[]
  trigger: ReactNode
}

export function Dropdown (props: DropdownProps) {
  const { className, items, trigger } = props
  return (
      <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
          <Menu.Button className={cls.btn}>
              {trigger}
          </Menu.Button>
          <Menu.Items className={cls.menu}>
              {items.map(item => {
                return (
                    <Menu.Item disabled={item.disabled}>
                        {({ active }) => (
                            <button
                                onClick={item.onClick}
                                className={classNames(cls.item, { [cls.active]: active })}
                            >
                                {item.content}
                            </button>
                        )}
                    </Menu.Item>
                )
              })}
          </Menu.Items>
      </Menu>
  )
}
