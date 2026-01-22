import type { PropsWithChildren } from 'react';

// Шаблон кнопки "по нажатию"
type ButtonProps = {
    onClick?: () => void;
}

function Button(props: PropsWithChildren<ButtonProps>) {
    const { onClick, children } = props;
    return (
        <button onClick={onClick}>{children}</button>
    );
}


export default Button