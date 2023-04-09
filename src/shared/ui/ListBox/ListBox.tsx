import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Button } from '../Button/Button'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
}

export function ListBox (props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange
  } = props

  return (
      <HListBox
          as={'div'}
          className={classNames(cls.ListBox, {}, [className])}
          value={value}
          onChange={onChange}
      >
          <HListBox.Button className={cls.trigger}>
              <Button>
                  {value ?? defaultValue}
              </ Button>
          </HListBox.Button>
          <HListBox.Options className={cls.options}>
              {items?.map((item) => (
                  <HListBox.Option
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    as={Fragment}
                >
                      {({ active, selected }) => (
                          <li
                              className={classNames(cls.item,
                                {
                                  [cls.active]: active,
                                  [cls.disabled]: item.disabled
                                }
                              )}
                          >
                              {selected && '!!!'}
                              {item.content}
                          </li>
                      )}
                  </HListBox.Option>
              ))}
          </HListBox.Options>
      </HListBox>
  )
}
