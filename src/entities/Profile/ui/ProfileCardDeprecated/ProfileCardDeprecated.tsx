import { memo , KeyboardEvent } from 'react'
import { useTranslation } from 'react-i18next';
import { classNames , Mods } from '@/shared/lib/classNames/classNames'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { VStack, HStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './ProfileCardDeprecated.module.scss'


export const ProfileCardDeprecatedError = () => {

    const { t } = useTranslation();

    return (
        <HStack
            justify={'center'}
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Mistake is happened')}
                text={t('Try again')}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
}


export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify={'center'}
            max
            className={classNames(cls.ProfileCard, {}, [cls.loading])}
        >
            <Loader />
        </HStack>
    )
}


export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    // validation
    const onKeyPress = (e: KeyboardEvent) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <VStack
            max
            gap='8'
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify={'center'} max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}

            <InputDeprecated
                value={data?.first}
                placeholder={t('Your name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={'ProfileCard.firstname'}
            />

            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Your surname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.lastname'}
            />

            <InputDeprecated
                onKeyPress={onKeyPress}
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />

            <InputDeprecated
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />

            <InputDeprecated
                value={data?.username}
                placeholder={t('Username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />

            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />

            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )

})
