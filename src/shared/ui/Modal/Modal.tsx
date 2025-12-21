import { createPortal } from 'react-dom';
import styles from "../Modal/modal.module.css";
// import { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    let modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }

    // Не получилось так реализовать - выводил ошибку в 36 строчке: "rootRef.current"
    // const rootRef = useRef<HTMLElement | null>(null);
    // useEffect(() => {
    //     let container = document.getElementById(id);
    //     if (!container) {
    //         container = document.createElement('div');
    //         container.id = id;
    //         document.body.appendChild(container);
    //     }
    //     rootRef.current = container;
    // }, [id]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modalContent}>
                <h2>О проекте</h2>
                <p>Приложение для просмотра постов и комментариев, основанное на публичном API JSONPlaceholder</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal