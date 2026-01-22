import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../NavButton/NavButton.module.css';

type ButtonProps = {
    path: string;
}

function NavButton(props: PropsWithChildren<ButtonProps>) {
    const { path, children } = props;
    return (
        <button className={style.navButton}>
            <NavLink className={style.navLink} to={path}>{children}</NavLink>
        </button>
    );
}

export default NavButton;