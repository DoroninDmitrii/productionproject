import { useTranslation } from 'react-i18next';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemsProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = ({ item, collapsed }: SidebarItemsProps) => {
    const { t, i18n } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <AppLink
                    className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
                    to={item.path}
                >
                    <Icon Svg={item.Icon}/>
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }  
        />
    );
};

export default SidebarItem;
