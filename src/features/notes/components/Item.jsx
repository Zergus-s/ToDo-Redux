import Button from "./Button";

export default function Item({ onDoneClick, onDeleteClick, item }) {
  return (
    <div
      className={`item ${item.checked ? "checked" : "unchecked"}`}
      id={item.id}
    >
      <div className="todo-text">{item.text}</div>
      <div className="right-column">
        <div className="date">{item.date}</div>
        <Button
          text="✓"
          className="todo-check"
          onClick={() => onDoneClick(item.id)}
        />
        <Button
          text="✖"
          className="todo-delete"
          onClick={() => onDeleteClick(item.id)}
        />
      </div>
    </div>
  );
}
