import { useSelector } from 'react-redux';
import { useMemo, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import SidebarItem from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebaritems';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => {
    return sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
    ));
  }, [collapsed, sidebarItemsList]);

  return (
      <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
              <menu
                data-testid='sidebar'
                className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [
                  className,
                ])}
              >
                  <AppLogo className={cls.appLogo} />
                  <VStack role='navigation' gap='8' className={cls.items}>
                      {itemList}
                  </VStack>
              </menu>
          } 
          off={
              <menu
                data-testid='sidebar'
                className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                  className,
                ])}
              >
                  <Button
                      data-testid='sidebar-toggle'
                      onClick={onToggle}
                      className={cls.collapseBtn}
                      theme={ButtonTheme.BACKGROUND_INVERTED}
                      square
                      size={ButtonSize.L}
                  >
                      {collapsed ? '>' : '<'}
                  </Button>
      
                  <VStack role='navigation' gap='8' className={cls.items}>
                      {itemList}
                  </VStack>
                  <div className={cls.switchers}>
                      <ThemeSwitcher />
                      <LangSwitcher short={collapsed} className={cls.lang} />
                  </div>
              </menu>
          }
      />
  )
});
