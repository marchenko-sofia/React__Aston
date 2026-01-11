import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";


type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
};

type PhotosDataProps = {
    photos: PhotoType[];
};

const PhotosPage = () => {
    const params = useParams();
    const albumId = params.id;
    const [data, setData] = useState<PhotosDataProps>({ photos: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const getPhotosAlbum = async () => {
            try {
                const responsePhotos = await fetch("https://photos-13f08-default-rtdb.firebaseio.com/photos.json");
                const photos = await responsePhotos.json();
                const photosUser = albumId
                    ? photos.filter((photo: PhotoType) => photo.albumId === parseInt(albumId))
                    : [];
                if (!ignore) {
                    setData({ photos: photosUser });
                }
            } catch (error) {
                console.error('Ошибка при получении фотографий альбома:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getPhotosAlbum();
        return () => {
            ignore = true;
        }
    }, [albumId]);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }

    if (albumId && !data.photos.length) {
        return (
            <>
                <p>Фотографий нет</p>
                <NavButton path={"/albums"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        )
    }
    else
        return (
            <>
                <div>
                    <h2>Фотографии альбома {albumId}</h2>
                    <ul>
                        {data.photos.map((photo: PhotoType) => (
                            <li key={photo.id}>
                                {photo.title}{' '}
                                <img src={photo.url} alt={photo.id.toString()}></img>
                            </li>
                        ))}
                    </ul>
                </div>
                <NavButton path={"/albums"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        );
}

export default PhotosPage
