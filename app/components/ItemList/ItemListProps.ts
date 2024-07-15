
export default interface ItemListProps<T> {
    items: T[];
    onItemClick: (item: T) => void;
}
