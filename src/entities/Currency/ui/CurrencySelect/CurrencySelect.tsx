import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'

export interface CurrencySelectOptions {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
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
    onChange
  } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
      <Select className={classNames('', {}, [className])}
        label={t('Choose a currency')}
        options={options}
        value={value}
        onChange={onChangeHandler}
      />
  )
})

export default CurrencySelect
