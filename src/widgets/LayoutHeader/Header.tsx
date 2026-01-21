import styles from "../LayoutHeader/header.module.css";
import Modal from '../../shared/ui/Modal/Modal';
import { useState } from 'react';

function Header() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <header className={styles.header}>
            <h1>ПОСТЫрония</h1>
            <nav>
                <button onClick={openModal}>О проекте</button>
            </nav>
            <Modal isOpen={showModal} onClose={closeModal} />
        </header>
    );
};

export default Header;