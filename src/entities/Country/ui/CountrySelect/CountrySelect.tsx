import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'

export interface CountySelectOptions {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Armenia, content: Country.Armenia }
]

const CountrySelect = memo((props: CountySelectOptions) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props

  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
      <Select className={classNames('', {}, [className])}
        label={t('Choose a country')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
  )
})

export default CountrySelect
