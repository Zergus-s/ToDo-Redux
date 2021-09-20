import { createSlice } from "@reduxjs/toolkit";
import getFakeData from "./data/mock-data";

const initialState = {
    notes: JSON.parse(localStorage.getItem("notes")) || getFakeData(),
    input: "",
    filter: "",
  },
  sendToLocalStorage = (item) => {
    localStorage.setItem("notes", JSON.stringify(item));
  };

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    //Creating new note
    createNote: (state, action) => {
      if (!action.payload.input) {
        alert("Write something...");
        return;
      }
      const date = new Date();
      const newNote = {
        text: action.payload.input,
        checked: false,
        date: `${date.toLocaleString()}`,
        id: Date.now(date),
      };
      state.notes.push(newNote);
      sendToLocalStorage(state.notes);
      state.input = "";
    },
    handleChangeInput: (state, action) => {
      state.input = action.payload;
    },

    //Sorting notes
    sortByName: (state, action) => {
      const newNotes = [...action.payload];
      newNotes.sort((a, b) => {
        if (a.text < b.text) return 1;
        else return -1;
      });
      state.notes = newNotes;
    },

    sortByDate: (state, action) => {
      const newNotes = [...action.payload];
      newNotes.sort((a, b) => {
        if (a.id < b.id) return 1;
        else return -1;
      });
      state.notes = newNotes;
    },

    handleChangeFilter: (state, action) => {
      state.filter = action.payload;
    },

    //Operations with notes
    checkNote: (state, action) => {
      state.notes = JSON.parse(JSON.stringify(state.notes)).map((note) => {
        if (note.id === action.payload) {
          note.checked = !note.checked;
        }
        return note;
      });
      sendToLocalStorage(state.notes);
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      sendToLocalStorage(state.notes);
    },
  },
});

export const {
  sortByName,
  sortByDate,
  createNote,
  handleChangeInput,
  handleChangeFilter,
  checkNote,
  deleteNote,
} = noteSlice.actions;

export default noteSlice.reducer;
