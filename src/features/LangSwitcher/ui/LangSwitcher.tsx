import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <Button onClick={toggle} variant='clear'>
                    {t(short ? 'Short Language' : 'Language')}
                </Button>
            }
            off={
                <div>
                    <ButtonDepricated
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.CLEAR}
                        onClick={toggle}
                    >
                        {t(short ? 'Short Language' : 'Language')}
                    </ButtonDepricated>
                </div>
            }
        />
    );
});
