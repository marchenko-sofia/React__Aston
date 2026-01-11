import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";

type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
};

type TodosDataProps = {
    todos: TodoType[];
};

const UserTodosPage = () => {
    const params = useParams();
    const userId = params.id;
    const [data, setData] = useState<TodosDataProps>({ todos: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const getTodosUser = async () => {
            try {
                const responseTodos = await fetch("https://todos-cf70c-default-rtdb.firebaseio.com/todos.json");
                const todos = await responseTodos.json();
                const todosUser = userId
                    ? todos.filter((todo: TodoType) => todo.userId === parseInt(userId))
                    : [];
                if (!ignore) {
                    setData({ todos: todosUser });
                }
            } catch (error) {
                console.error('Ошибка при получении задач пользователя:', error);
            } finally {
                setIsLoading(false);
            }
        };


        getTodosUser();
        return () => { //функция очистки
            ignore = true;
        }
    }, [userId]);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }

    if (userId && !data.todos.length) {
        return (
            <>
                <p>Такого пользователя нет</p>
                <NavButton path={"/user"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        )
    }
    else
        return (
            <>
                <div>
                    <h2>Задачи пользователя {userId}</h2>
                    <ul>
                        {data.todos.map((todo: TodoType) => (
                            <li key={todo.id}>
                                {todo.title}:{' '}{todo.completed ? <span>выполнено</span> : <span>не выполнено</span>}</li>
                        ))}
                    </ul>
                </div>
                <NavButton path={"/user"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        );
};

export default UserTodosPage