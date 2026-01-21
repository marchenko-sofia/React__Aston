import NavButton from "../shared/ui/NavButton/NavButton";

const NotFoundPage = () => {
    return (
        <>
            <p>Что-то не так. Нужно переделать</p>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    )
};

export default NotFoundPage