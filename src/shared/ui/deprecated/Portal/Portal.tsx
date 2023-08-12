import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */
export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element);
};
