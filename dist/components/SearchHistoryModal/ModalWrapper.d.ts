import { ReactNode, RefObject } from 'react';
interface ModalWrapperProps {
    children: ReactNode;
    modalRef: RefObject<HTMLDivElement | null>;
    onClose: () => void;
    closeOnOutsideClick?: boolean;
}
export declare const ModalWrapper: ({ children, modalRef, onClose, closeOnOutsideClick, }: ModalWrapperProps) => import("react").ReactPortal;
export {};
