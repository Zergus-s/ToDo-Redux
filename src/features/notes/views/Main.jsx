import { useSelector, useDispatch } from "react-redux";

import { checkNote, deleteNote } from "../noteSlice";
import ItemList from "../components/ItemList";

export default function Main() {
  const dispatch = useDispatch();
  const { notes, filter } = useSelector((state) => state.noteState),
    filteredNotes = notes.filter((note) => {
      if (note.text.toLowerCase().includes(filter.toLowerCase())) return note;
      else return null;
    });

  return (
    <ItemList
      filteredNotes={filteredNotes}
      onDeleteClick={(id) => dispatch(deleteNote(id))}
      onDoneClick={(id) => dispatch(checkNote(id))}
    />
  );
}
