import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/styles/nav.module.css";

const HomePage = () => {
    return (
        <div className={style.wrapNav}>
            <h3>Что хотите?</h3>
            <ul className={style.navList}>
                <li>
                    <NavButton path={"/posts"}>Все посты</NavButton>
                </li>
                <li>
                    <NavButton path={"/user"}>Пользователь</NavButton>
                </li>
            </ul>
        </div>
    )
}

export default HomePage