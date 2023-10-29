import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { getFeatureFlag , updateFeatureFlag } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface UiDesignedSwitcherProps {
  className?: string
}

export const UiDesignedSwitcher = memo((props: UiDesignedSwitcherProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const [isLoading, setIsLoading] = useState(false);

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

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlag({
                userId: authData?.id,
                newFeatures: {
                    isAppRedesigned: value === 'new', 
                }
            })
            ).unwrap();
            setIsLoading(false);
        }
    }

    return (
        <HStack>
            <Text text={t('Interface variant')} />
            {isLoading ? (
                <Skeleton width={300} height={40} />
            ) : (
                <ListBox 
                    className={classNames('', {}, [])}
                    items={items} 
                    value={isAppRedesigned ? 'new' : 'old'}
                    onChange={onChange} 
                />
            )}
        </HStack>
    )
})
