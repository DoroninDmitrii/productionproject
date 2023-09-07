import { memo, useState, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures 
            feature='isAppRedesigned' 
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            } 
            off={
                <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    const { width } = useMobile();

    const isMobile = width <= 768;

    return (
        <div>
            {isMobile ? (
                <AnimationProvider>
                    {trigger}
                    <Drawer isOpen={isOpen} isClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            ) : (
                <ToggleFeatures 
                    feature='isAppRedesigned' 
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [className])}
                            direction='bottom left'
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    } 
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [className])}
                            direction='bottom left'
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            )}
        </div>
    );
});

export default NotificationButton;
