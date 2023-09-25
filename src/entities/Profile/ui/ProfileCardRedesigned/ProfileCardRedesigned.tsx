import { memo, KeyboardEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'  

export const ProfileCardRedesignedError = () => {

    const { t } = useTranslation();

    return (
        <HStack
            justify={'center'}
            max
        >
            <Text
                variant={'error'}
                title={t('Mistake is happened')}
                text={t('Try again')}
                align={'center'}
            />
        </HStack>
    )
}

export const ProfileCardRedesignedSkeleton = () => {

    return (
        <Card padding='24' max>
            <VStack gap='32'>
                <HStack max justify='center'>
                    <Skeleton border={'100%'} width={128} height={128}/>
                </HStack>
                <HStack gap='32' max>
                    <VStack gap='16' max>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>

                    <VStack gap='16' max>
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                        <Skeleton width={'100%'} height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
}

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {

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
    } = props

    const { t, i18n } = useTranslation();

    // validation
    const onKeyPress = (e: KeyboardEvent) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <Card
            max
            padding='24'
            className={className}
        >
  
            {data?.avatar && (
                <HStack justify={'center'} max>
                    <Avatar size={128} src={data?.avatar} />
                </HStack>
            )}

            <HStack gap='24'>
                <VStack gap='16' max>

                    <Input
                        value={data?.first}
                        label={t('Your name')}
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid={'ProfileCard.firstname'}
                    />

                    <Input
                        value={data?.lastname}
                        label={t('Your surname')}
                        onChange={onChangeLastname}
                        readonly={readonly}
                        data-testid={'ProfileCard.lastname'}
                    />

                    <Input
                        onKeyPress={onKeyPress}
                        value={data?.age}
                        label={t('Age')}
                        onChange={onChangeAge}
                        readonly={readonly}
                    />


                    <Input
                        value={data?.city}
                        label={t('City')}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />

                </VStack>

                <VStack gap='16' max>

                    <Input
                        value={data?.username}
                        label={t('Username')}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />

                    <Input
                        value={data?.avatar}
                        label={t('Avatar')}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />

                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />

                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />

                </VStack>
            </HStack>
    
        </Card>
    )
})
