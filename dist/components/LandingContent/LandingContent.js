import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './LandingContent.module.css';
import { KavaAILogo } from '../KavaAILogo/KavaAILogo';
import { useIsMobileLayout } from '../../hooks';
export const LandingContent = ({ introText }) => {
    const isMobileLayout = useIsMobileLayout();
    return (_jsx("div", { className: styles.landingContent, children: _jsxs("div", { className: styles.logoWrapper, children: [_jsx(KavaAILogo, { height: isMobileLayout ? 40 : 50 }), _jsx("h2", { className: styles.introText, children: introText })] }) }));
};
