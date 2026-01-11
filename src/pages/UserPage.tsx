import { useState } from 'react';
import style from '../features/PostLengthFilter/ui/styleInput.module.css';
import UserTabs from '../widgets/UserTabs/UserTabs';

const UserPage = () => {
    const [userId, setUserId] = useState<string>('');

    return (
        <>
            <input type='text' id='userId'
                className={style.input}
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
                placeholder="Введите id пользователя" />
            <UserTabs userId={userId} />
        </>

    );
}
export default UserPage

