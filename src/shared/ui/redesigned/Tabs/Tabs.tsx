import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Card from '../Card/Card';
import { FlexDirection, Flex } from '../Stack/Flex/Flex';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection
}

export const Tabs = memo((props: TabsProps) => {
    const { className, value, tabs, onTabClick, direction = 'row' } = props;
    const { t, i18n } = useTranslation('article');

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex 
            className={classNames(cls.Tabs, {}, [className])}
            direction={direction} 
            gap='8'
            align='start'
        > 
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={classNames(cls.tab, {[cls.selected]: tab.value === value})}
                    variant={tab.value === value ? 'light' : 'normal'}
                    onClick={clickHandle(tab)}
                    border='round'
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
});

export default Tabs;
