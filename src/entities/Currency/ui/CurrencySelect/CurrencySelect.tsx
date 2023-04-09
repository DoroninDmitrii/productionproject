import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { ListBox } from 'shared/ui/ListBox/ListBox'

export interface CurrencySelectOptions {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
]

const CurrencySelect = memo((props: CurrencySelectOptions) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
      <ListBox
          className={className}
          value={value}
          defaultValue={t('Choose a currency')}
          label={t('Choose a currency')}
          onChange={onChangeHandler}
          items={options}
          readonly={readonly}
          direction='top'
      />
  )
})

export default CurrencySelect
