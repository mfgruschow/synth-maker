import { createContext } from "react";

interface NoteSelectModalContextType {
  isModalOpen: boolean;
  handleOpen: (noteId: number, coords: { x: number; y: number }) => void;
}

export const NoteSelectModalContext = createContext<
  NoteSelectModalContextType | undefined
>(undefined);
