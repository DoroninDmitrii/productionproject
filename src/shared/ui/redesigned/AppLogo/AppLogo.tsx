import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '../../deprecated/Stack';
import AppSvg from '@/shared/assets/icons/logo-20-20.svg'
import cls from './AppLogo.module.scss'

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
      <HStack 
          className={classNames(cls.appLogoWrapper, {}, [className])}
          max 
          justify='center'
      > 
          <div className={cls.gradientBig} />
          <div className={cls.gradientSmall} />
          <AppSvg width={size} height={size} color='black' className={cls.appLogo} />
      </HStack>
  )
})
