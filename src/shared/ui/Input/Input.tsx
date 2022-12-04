import { classNames } from 'shared/lib/classNames/classNames'
import React, { InputHTMLAttributes, useState } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
          {placeholder && (<div className={cls.placeholder}>
              {`${placeholder}>`}
          </div>
          )}

          <div className={cls.caretWrapper}>
              <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          />
              {isFocused && (
              <span className={cls.caret}/>
              )}
          </div>
      </div>
  )
}
