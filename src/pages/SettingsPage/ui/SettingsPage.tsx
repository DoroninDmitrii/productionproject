import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'
import cls from './SettingsPage.module.scss'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props
    const { t, i18n } = useTranslation('settings')

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <Text title={t('Settings page')} />
        </Page>
    )
})

export default SettingsPage
