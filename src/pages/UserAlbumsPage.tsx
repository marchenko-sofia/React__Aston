import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";
import { albumsApi } from "../entities/[entity]/api/albumsApi";

type AlbumType = {
    userId: number,
    id: number,
    title: string,
};

const UserAlbumsPage = () => {
    const params = useParams();
    const userId = params.id as string;
    const { data: albums, isLoading, error } = albumsApi.useGetAlbumsByUserIdQuery(userId);

    return (
        <>
            {!userId && <p>Введите номер пользователя</p>}
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {albums &&
                <div>
                    <h2>Альбомы пользователя {userId}</h2>
                    <ul>
                        {albums.map((album: AlbumType) => (
                            <li key={album.id}>
                                {album.title}{' '}<NavButton path={`/albums/${album.id}/photos`}>Смотреть фото альбома</NavButton>
                            </li>
                        ))}
                    </ul>
                </div>
            }
            <NavButton path={"/user"}>Вернуться назад</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
};

export default UserAlbumsPage