import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { PanelLeftClose, TextSearch, X as CloseX } from "lucide-react";
import { useIsMobileLayout } from "../../hooks/useIsMobileLayout";
export const SideBarControls = ({ isDisabled, onCloseClick, onOpenSearchModal, }) => {
    const isMobileLayout = useIsMobileLayout();
    const CloseIcon = isMobileLayout ? CloseX : PanelLeftClose;
    const closeIconLabel = isMobileLayout
        ? "Close Mobile Menu"
        : "Close Desktop Menu";
    return (_jsxs(_Fragment, { children: [_jsx(ButtonIcon, { disabled: isDisabled, onClick: onOpenSearchModal, icon: TextSearch, tooltip: {
                    text: "Search History",
                    position: "bottom",
                }, "aria-label": "Search History" }), _jsx(ButtonIcon, { icon: CloseIcon, tooltip: {
                    text: "Close Menu",
                    position: "bottom",
                }, "aria-label": closeIconLabel, onClick: onCloseClick })] }));
};
