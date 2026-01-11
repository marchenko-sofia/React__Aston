import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";

type AlbumType = {
    userId: number,
    id: number,
    title: string,
};

type AlbumsDataProps = {
    albums: AlbumType[];
};

const UserAlbumsPage = () => {
    const params = useParams();
    const userId = params.id;
    const [data, setData] = useState<AlbumsDataProps>({ albums: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const getAlbumsUser = async () => {
            try {
                const responseAlbums = await fetch("https://albums-96752-default-rtdb.firebaseio.com/albums.json");
                const albums = await responseAlbums.json();
                const albumsUser = userId
                    ? albums.filter((album: AlbumType) => album.userId === parseInt(userId))
                    : [];
                if (!ignore) {
                    setData({ albums: albumsUser });
                }
            } catch (error) {
                console.error('Ошибка при получении альбомов пользователя:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getAlbumsUser();
        return () => {
            ignore = true;
        }
    }, [userId]);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }

    if (userId && !data.albums.length) {
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
                    <h2>Альбомы пользователя {userId}</h2>
                    <ul>
                        {data.albums.map((album: AlbumType) => (
                            <li key={album.id}>
                                {album.title}{' '}<NavButton path={`/albums/${album.id}/photos`}>Смотреть фото альбома</NavButton>
                            </li>
                        ))}
                    </ul>
                </div>
                <NavButton path={"/user"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        );
};

export default UserAlbumsPage