import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './LandingContent.module.css';
export const LandingContent = ({ introText, logo }) => {
    return (_jsx("div", { className: styles.landingContent, children: _jsxs("div", { className: styles.logoWrapper, children: [logo, _jsx("h2", { className: styles.introText, children: introText })] }) }));
};
