import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/deprecated/Popups';
export interface CountySelectOptions {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Armenia, content: Country.Armenia },
];

const CountrySelect = memo((props: CountySelectOptions) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
      <ListBox
      className={className}
      value={value}
      defaultValue={t('Choose a country')}
      label={t('Choose a country')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
      direction='top right'
    />
  );
});

export default CountrySelect;
