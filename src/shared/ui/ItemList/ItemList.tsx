import styles from '../../../widgets/PostList/postList.module.css';
import styleLi from '../../../entities/post/ui/postCard.module.css';

type WithId = {
    id: number;
}

type ItemListProp<T extends WithId> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const ItemList = <T extends WithId>(props: ItemListProp<T>) => {
    const { items, renderItem } = props;

    return (
        <ul className={styles.postList}>{items.map((item) =>
            <li key={item.id} className={styleLi.postCard}>
                {renderItem(item)}
            </li>)}
        </ul>
    );
}

export default ItemList