import { ReactNode } from 'react';
export interface NavBarProps {
    onMenuClick: () => void;
    isSideBarOpen: boolean;
    onNewChatClick: () => void;
    /**
     * Component that appears in the center on mobile and right section on desktop
     */
    primaryControlComponent?: ReactNode;
    /**
     * Optional component for the right section on mobile (replaces new chat button)
     */
    secondaryControlComponent?: ReactNode;
}
export declare const NavBar: ({ onMenuClick, isSideBarOpen, onNewChatClick, primaryControlComponent, secondaryControlComponent, }: NavBarProps) => import("react/jsx-runtime").JSX.Element;
