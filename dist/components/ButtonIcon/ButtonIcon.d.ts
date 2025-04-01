import React from "react";
import { LucideIcon } from "lucide-react";
type TooltipPosition = "top" | "bottom" | "left" | "right";
type ButtonIconClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface TooltipProps {
    text: string;
    position?: TooltipPosition;
    delay?: number;
    backgroundColor?: string;
}
export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: LucideIcon;
    tooltip?: TooltipProps | string;
    size?: number;
    "aria-label": string;
    onClick?: ButtonIconClickHandler;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const ButtonIcon: ({ icon: Icon, tooltip, onClick, className, size, disabled, "aria-label": ariaLabel, onMouseEnter, onMouseLeave, ...rest }: ButtonIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
