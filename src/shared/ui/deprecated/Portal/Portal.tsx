import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  // what we teleport
  children: ReactNode;
  // where we teleport
  element?: HTMLElement;
}

/**
 * @deprecated
 */

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
