import Item from "./Item";

export default function ItemList({
  onDeleteClick,
  onDoneClick,
  filteredNotes,
}) {
  return (
    <div className="todo-list">
      {filteredNotes.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDoneClick={onDoneClick}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
}
