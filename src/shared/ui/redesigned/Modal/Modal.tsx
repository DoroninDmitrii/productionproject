import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '../../redesigned/Portal/Portal';
import { useTheme } from '../../../lib/hooks/useTheme/useTheme';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { useModal } from '../../../lib/hooks/useModal/useModal';
import { toggleFeatures } from '@/shared/lib/features';
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
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className, 
                    theme, 
                    'app_modal',
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld
                    })
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
