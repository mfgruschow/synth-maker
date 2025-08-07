import { useState, type ReactNode } from "react";
import { NoteSelectModalContext } from "./note-select-modal-context";
import type { NoteSelectInfo } from "../../utility/types";
// eslint-disable-next-line max-len
import { NoteSelectorModal } from "../../components/note-selector/note-selector";

export const NoteSelectModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen =
    () => (isOpen: boolean, noteSelectInfo?: NoteSelectInfo) => {
      if (isOpen) {
        // Logic to handle opening the modal with noteSelectInfo
      } else {
        // Logic to handle closing the modal
      }
      Z;
      setIsModalOpen((prev) => !prev);
    };

  return (
    <NoteSelectModalContext.Provider value={{ isModalOpen, handleOpen }}>
      {isModalOpen && <NoteSelectorModal />}
      {children}
    </NoteSelectModalContext.Provider>
  );
};
