import { Modal } from 'shared/ui/Modal/Modal'
import { classNames } from 'shared/lib/classNames/classNames'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  isClose: () => void
}

export const LoginModal = ({ className, isOpen, isClose }: LoginModalProps) => {
  return (
      <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        isClose={isClose}
        lazy
    >
          <LoginForm/>
      </Modal>
  )
}
