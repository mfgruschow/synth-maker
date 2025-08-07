import { createContext } from "react";
import type { NoteSelectInfo } from "../../utility/types";

interface NoteSelectModalContextType {
  isModalOpen: boolean;
  handleOpen: (isOpen: boolean, noteSelectInfo?: NoteSelectInfo) => void;
}

export const NoteSelectModalContext = createContext<
  NoteSelectModalContextType | undefined
>(undefined);
