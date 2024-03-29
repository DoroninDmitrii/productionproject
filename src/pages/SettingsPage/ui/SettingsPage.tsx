import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { UiDesignedSwitcher } from '@/features/UiDesignedSwitcher'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props
    const { t, i18n } = useTranslation('settings')

    return (
        <Page>
            <VStack gap='16'>
                <Text title={t('Settings page')} />
                <UiDesignedSwitcher/>
            </VStack>
        </Page>
    )
})

export default SettingsPage;
