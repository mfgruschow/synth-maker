import { useContext } from "react";
import { NoteSelectModalContext } from "./note-select-modal-context";

export const useNoteSelectModalContext = () => {
  const context = useContext(NoteSelectModalContext);
  if (!context) {
    throw new Error(
      "useNoteSelectModalContext must be used within a NoteSelectModalProvider"
    );
  }
  return context;
};
