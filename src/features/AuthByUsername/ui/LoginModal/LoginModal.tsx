import { Modal } from '@/shared/ui/redesigned/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  isClose: () => void;
}

export const LoginModal = ({ className, isOpen, isClose }: LoginModalProps) => {
  return (
      <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      isClose={isClose}
      lazy
    >
          <Suspense fallback={<Loader />}>
              <LoginFormAsync onSuccess={isClose} />
          </Suspense>
      </Modal>
  );
};
