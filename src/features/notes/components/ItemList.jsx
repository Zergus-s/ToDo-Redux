import Item from "./Item";
import { useDispatch } from "react-redux";

export default function ItemList({
  onDeleteClick,
  onDoneClick,
  filteredNotes,
}) {
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      {filteredNotes.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDoneClick={() => dispatch(onDoneClick(item.id))}
            onDeleteClick={() => dispatch(onDeleteClick(item.id))}
          />
        );
      })}
    </div>
  );
}
