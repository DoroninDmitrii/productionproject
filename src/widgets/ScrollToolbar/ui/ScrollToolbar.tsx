import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import cls from './ScrollToolbar.module.scss'
import { ScrollToTopButton } from '@/features/ScrollToTopButton'

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    return (
        <VStack
            className={classNames(cls.ScrollToolbar, {}, [className])}
            justify='center'
            align='center'
            max
        >
            <ScrollToTopButton />
        </VStack>
    )
})
