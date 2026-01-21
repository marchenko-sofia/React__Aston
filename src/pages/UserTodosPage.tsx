import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";
import { todosApi } from "../entities/[entity]/api/todosApi";

type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
};

const UserTodosPage = () => {
    const params = useParams();
    const userId = params.id as string;
    const { data: todos, isLoading, error } = todosApi.useGetTodosByUserIdQuery(userId);

    return (
        <>
            {!userId && <p>Введите номер пользователя</p>}
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {todos &&
                <div>
                    <h2>Задачи пользователя {userId}</h2>
                    <ul>
                        {todos.map((todo: TodoType) => (
                            <li key={todo.id}>
                                {todo.title}:{' '}{todo.completed ? <span>выполнено</span> : <span>не выполнено</span>}</li>
                        ))}
                    </ul>
                </div>
            }

            <NavButton path={"/user"}>Вернуться назад</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
};

export default UserTodosPage