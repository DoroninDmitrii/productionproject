import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

export interface CurrencySelectOptions {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectOptions) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const properties = {
        className,
        value,
        defaultValue: t('Choose a currency'),
        label: t('Choose a currency'),
        onChange: onChangeHandler,
        items: options,
        readonly,
        direction: 'top right' as const
    }

    return (
        <ToggleFeatures 
            feature='isAppRedesigned'
            on={ <ListBox {...properties} /> }
            off={ <ListBoxDeprecated {...properties} /> }
        />
    )
});

export default CurrencySelect;
