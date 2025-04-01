import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ButtonIcon.module.css";
function isTooltipProps(tooltip) {
    return typeof tooltip === "object" && tooltip !== null;
}
export const ButtonIcon = ({ icon: Icon, tooltip, onClick, className = "", size = 22, disabled = false, "aria-label": ariaLabel, onMouseEnter, onMouseLeave, ...rest }) => {
    const tooltipText = isTooltipProps(tooltip) ? tooltip.text : tooltip;
    const tooltipPosition = isTooltipProps(tooltip)
        ? tooltip.position || "top"
        : "top";
    const tooltipDelay = isTooltipProps(tooltip) ? tooltip.delay : undefined;
    const backgroundColorOveride = isTooltipProps(tooltip)
        ? tooltip.backgroundColor
        : undefined;
    const tooltipStyle = tooltipDelay
        ? {
            transitionDelay: `${tooltipDelay}ms`,
        }
        : backgroundColorOveride
            ? {
                backgroundColor: `${backgroundColorOveride}`,
            }
            : undefined;
    return (_jsxs("button", { onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, disabled: disabled, "aria-label": ariaLabel, className: `${styles.button} ${disabled ? styles.disabled : ""} ${className}`, ...rest, children: [_jsx(Icon, { size: size }), tooltipText && (_jsx("div", { className: `${styles.tooltip} ${styles[`tooltip${tooltipPosition
                    .charAt(0)
                    .toUpperCase()}${tooltipPosition.slice(1)}`]}`, style: tooltipStyle, children: tooltipText }))] }));
};
