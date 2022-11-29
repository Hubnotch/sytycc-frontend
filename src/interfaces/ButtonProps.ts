import { ReactNode } from "react";

export interface IUser {
    name: string;
    age: number;

}
export interface IButtonProps { 
    background?: string;
    color?: string;
    height?: string;
    children: ReactNode;
    width?: string;
    style?: any;
    onclick?: () => void;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}