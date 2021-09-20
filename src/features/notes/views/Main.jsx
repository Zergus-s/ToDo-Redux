import ItemList from "../components/ItemList";
import { useSelector } from "react-redux";
import { checkNote, deleteNote } from "../noteSlice";

export default function Main() {
  const { notes, filter } = useSelector((state) => state.noteState),
    filteredNotes = notes.filter((note) => {
      if (note.text.toLowerCase().includes(filter.toLowerCase())) return note;
      else return null;
    });

  return (
    <ItemList
      filteredNotes={filteredNotes}
      onDeleteClick={deleteNote}
      onDoneClick={checkNote}
    />
  );
}
