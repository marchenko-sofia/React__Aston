import { createPortal } from 'react-dom';
import styles from "../Modal/modal.module.css";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

function Modal(props: ModalProps) {
    const { isOpen, onClose } = props;

    let modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modalContent}>
                <Modal.Header />
                <Modal.Body />
                <Modal.Footer isOpen={true} onClose={onClose} />
            </div>
        </div>,
        modalRoot
    );
};

Modal.Header = () => {
    return (
        <h2>О проекте</h2>
    )
};

Modal.Body = () => {
    return (
        <p>Приложение для просмотра постов и комментариев, основанное на публичном API JSONPlaceholder</p>
    )
};

Modal.Footer = ({ onClose }: ModalProps) => {
    return (
        <button onClick={onClose}>Закрыть</button>
    )
};

export default Modal