import { useState, type ChangeEvent } from 'react';
import style from '../features/PostLengthFilter/ui/styleInput.module.css';
import UserTabs from '../widgets/UserTabs/UserTabs';
import NavButton from '../shared/ui/NavButton/NavButton';

const UserPage = () => {
    const [userId, setUserId] = useState<string>('');

    return (
        <>
            <input type='text' id='userId'
                className={style.input}
                value={userId}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setUserId(event.target.value)}
                placeholder="Введите id пользователя" />
            <UserTabs userId={userId} />
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
};

export default UserPage

