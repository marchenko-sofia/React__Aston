import type { ReactNode } from 'react';

// Шаблон кнопки "по нажатию"
interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>{children}</button>
    );
}


export default Button