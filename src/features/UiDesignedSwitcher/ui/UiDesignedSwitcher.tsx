import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { getFeatureFlag , updateFeatureFlag } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import cls from './UiDesignedSwitcher.module.scss'

interface UiDesignedSwitcherProps {
  className?: string
}

export const UiDesignedSwitcher = memo((props: UiDesignedSwitcherProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);


    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const items = [
        {
            content: t('New'),
            value: 'new'
        },
        {
            content: t('Old'),
            value: 'old'
        },
    ];

    const onChange = (value: string) => {
        if (authData) {
            dispatch(updateFeatureFlag({
                userId: authData?.id,
                newFeatures: {
                    isAppRedesigned: value === 'new', 
                }
            }));
        }
    }

    return (
        <ListBox 
            className={classNames(cls.UiDesignedSwitcher, {}, [])}
            items={items} 
            value={isAppRedesigned ? 'new' : 'old'}
            label={t('Interface variant')}
            onChange={onChange} 
        />
    )
})
