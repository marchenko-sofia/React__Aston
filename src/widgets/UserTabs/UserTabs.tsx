import NavButton from "../../shared/ui/NavButton/NavButton";
import style from "../../shared/styles/nav.module.css";

const UserTabs = ({ userId }: { userId: string }) => {
    return (
        <ul className={style.navList}>
            <li>
                <NavButton path={`/users/${userId}/posts`}>Посты</NavButton>
            </li>
            <li>
                <NavButton path={`/users/${userId}/albums`}>Альбомы</NavButton>
            </li>
            <li>
                <NavButton path={`/users/${userId}/todos`}>Список дел</NavButton>
            </li>
        </ul>
    )
}

export default UserTabs