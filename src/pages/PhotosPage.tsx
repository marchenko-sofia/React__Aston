import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import style from "../shared/lib/hoc/styleLoader.module.css";
import { albumsApi } from "../entities/[entity]/api/albumsApi";
import ItemList from "../shared/ui/ItemList/ItemList";

const PhotosPage = () => {
    const params = useParams();
    const albumId = params.id as string;
    const { data: photos, isLoading, error } = albumsApi.useGetPhotosByAlbumIdQuery(albumId);

    return (
        <>
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {photos &&
                <div>
                    <h2>Фотографии альбома {albumId}</h2>
                    <ItemList items={photos} renderItem={(photo) =>
                        <>
                            {photo.title}{' '}
                            <img src={photo.url} alt={photo.id.toString()}></img>
                        </>} />
                </div>
            }
            <NavButton path={"/user"}>Вернуться назад</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
}

export default PhotosPage
