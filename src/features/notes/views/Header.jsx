import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByName,
  sortByDate,
  createNote,
  handleChangeInput,
  handleChangeFilter,
} from "../noteSlice";

export default function Header() {
  const { notes, filter, input } = useSelector((state) => state.noteState);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="todo-sorting">
        <Button
          className="sort-name"
          onClick={() => dispatch(sortByName(notes))}
          text="Sort by Name"
        />
        <Button
          className="sort-date"
          onClick={() => dispatch(sortByDate(notes))}
          text="Sort by Date"
        />
        <Input
          value={filter}
          className="filter"
          placeholder="Filter..."
          onChange={(e) => dispatch(handleChangeFilter(e.target.value))}
        />
      </div>
      <div className="todo-input">
        <h1>ToDo List</h1>
        <Input
          value={input}
          className="message"
          placeholder="What do you want to do?"
          onChange={(e) => dispatch(handleChangeInput(e.target.value))}
          autoFocus
        />
        <Button
          onClick={() => dispatch(createNote({ input, notes }))}
          className="add"
          text="ADD"
        />
      </div>
    </div>
  );
}
