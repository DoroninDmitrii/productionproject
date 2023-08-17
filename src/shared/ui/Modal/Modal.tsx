import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useTheme } from '../../lib/hooks/useTheme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '../../lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  isClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, isClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    isClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  // For lazy loading modal
  if (lazy && !isMounted) {
    return null;
  }

  return (
      <Portal>
          <div
            className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
              <Overlay onClick={close} />
              <div className={cls.content}>{children}</div>
          </div>
      </Portal>
  );
};
