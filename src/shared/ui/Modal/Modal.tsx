import { createPortal } from 'react-dom';
import styles from "../Modal/modal.module.css";
// import { createContext, useEffect, useRef, useState } from 'react';

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


/*Попытка другой реализации*/
// const modalContext = createContext();

// function Modal(id = 'modal-root') {

//     const rootRef = useRef<HTMLElement | null>(null);
//     useEffect(() => {
//         let container = document.getElementById(id);
//         if (!container) {
//             container = document.createElement('div');
//             container.id = id;
//             document.body.appendChild(container);
//         }
//         rootRef.current = container;
//     }, [id]);

//     const [showModal, setShowModal] = useState(false);
//     const toggle = () => { setShowModal((prev) => !prev) };

//     const modalPortal = ({ isOpen, onClose }: ModalProps) => {
//         return ({isOpen && rootRef.current ? createPortal(
//             <div className={styles.overlay}>
//                 <div className={styles.modalContent}>
//                     <Modal.Header />
//                     <Modal.Body />
//                     <Modal.Footer isOpen={showModal} onClose={closeModal} />
//                 </div>
//             </div>,
//             rootRef.current
//         ) : null};
//        )
//     }

//     return modalPortal;
// }

// Modal.Trigger = () => {
//     const openModal = () => setShowModal(true);
//     return (
//         <nav>
//             <button onClick={openModal}>О проекте</button>
//         </nav>
//     )
// };

