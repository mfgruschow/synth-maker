import { useState, type ReactNode } from "react";
import { NoteSelectModalContext } from "./note-select-modal-context";

export const NoteSelectModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NoteSelectModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NoteSelectModalContext.Provider>
  );
};
