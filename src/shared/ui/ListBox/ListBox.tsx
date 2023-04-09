import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Button } from '../Button/Button'

export interface ListBoxItem {
  value: string
  content: ReactNode
}

interface ListBoxProps {
  items?: ListBoxItem
  className: string
}

export function ListBox (props: ListBoxProps) {
  const {
    className,
    items
  } = props

  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
      <HListBox
          as={'div'}
          className={classNames(cls.ListBox, {}, [className])}
          value={selectedPerson}
          onChange={setSelectedPerson}
      >
          <HListBox.Button className={cls.trigger}>
              <Button>
                  {selectedPerson.name}
              </ Button>
          </HListBox.Button>
          <HListBox.Options className={cls.options}>
              {people.map((person) => (
                  <HListBox.Option
                    key={person.id}
                    value={person}
                    disabled={person.unavailable}
                    as={Fragment}
                >
                      {({ active, selected }) => (
                          <li
                              className={classNames(cls.item, { [cls.active]: active })}
                          >
                              {selected && '!!!'}
                              {person.name}
                          </li>
                      )}
                  </HListBox.Option>
              ))}
          </HListBox.Options>
      </HListBox>
  )
}
