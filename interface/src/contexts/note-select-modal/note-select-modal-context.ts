import { createContext } from "react";

interface NoteSelectModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NoteSelectModalContext = createContext<
  NoteSelectModalContextType | undefined
>(undefined);
