import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './NavBar.module.css';
import { Menu, PanelLeftOpen, SquarePen } from 'lucide-react';
import { useIsMobileLayout } from '../../hooks';
import { ButtonIcon } from '../ButtonIcon';
export const NavBar = ({ onMenuClick, isSideBarOpen, onNewChatClick, primaryControlComponent, secondaryControlComponent, }) => {
    const isMobileLayout = useIsMobileLayout();
    const newChatButton = (_jsx(ButtonIcon, { icon: SquarePen, tooltip: {
            text: 'New Chat',
            position: 'bottom',
        }, "aria-label": "New Chat Button", onClick: onNewChatClick }));
    return (_jsxs("div", { className: styles.nav, children: [_jsx("div", { className: styles.leftSection, children: !isMobileLayout ? (_jsxs("div", { className: styles.desktopControls, children: [!isSideBarOpen && (_jsx(ButtonIcon, { icon: PanelLeftOpen, tooltip: {
                                text: 'Open Menu',
                                position: 'bottom',
                            }, "aria-label": "Open Desktop Menu", onClick: onMenuClick })), newChatButton] })) : (_jsx("div", { className: styles.menu, children: _jsx(ButtonIcon, { icon: Menu, tooltip: {
                            text: 'Menu',
                            position: 'bottom',
                        }, "aria-label": "Open Mobile Menu", onClick: onMenuClick }) })) }), _jsx("div", { className: styles.centerSection, children: isMobileLayout && primaryControlComponent }), _jsxs("div", { className: styles.rightSection, children: [!isMobileLayout && primaryControlComponent, isMobileLayout && (secondaryControlComponent || newChatButton)] })] }));
};
