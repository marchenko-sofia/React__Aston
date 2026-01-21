import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../NavButton/NavButton.module.css';

interface ButtonProps {
    children?: ReactNode;
    path: string;
}

function NavButton({ children, path }: ButtonProps) {
    return (
        <button className={style.navButton}>
            <NavLink className={style.navLink} to={path}>{children}</NavLink>
        </button>
    );
}


export default NavButton;