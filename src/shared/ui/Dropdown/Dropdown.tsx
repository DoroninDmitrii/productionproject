import { Menu } from '@headlessui/react'
import { classNames } from '../../lib/classNames/classNames'
import { Fragment, ReactNode } from 'react'
import { DropdownDirection } from '../../types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

export interface DropdownItems {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItems[]
  direction?: DropdownDirection
  trigger: ReactNode
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft
}

export function Dropdown (props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right'
  } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
      <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
          <Menu.Button className={cls.btn}>
              {trigger}
          </Menu.Button>
          <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
              {items.map(item => {
                const content = ({ active }: { active: boolean }) => (
                    <button
                      type='button'
                      disabled={item.disabled}
                      onClick={item.onClick}
                      className={classNames(cls.item, { [cls.active]: active })}
                    >
                        {item.content}
                    </button>
                )

                if (item.href) {
                  return (
                      <Menu.Item key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                          {content}
                      </Menu.Item>
                  )
                }

                return (
                    <Menu.Item key={item.content as string} as={Fragment} disabled={item.disabled}>
                        {content}
                    </Menu.Item>
                )
              })}
          </Menu.Items>
      </Menu>
  )
}
