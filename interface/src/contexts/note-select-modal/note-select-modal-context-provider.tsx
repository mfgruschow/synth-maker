import { useState, type ReactNode } from "react";
import { NoteSelectModalContext } from "./note-select-modal-context";
// eslint-disable-next-line max-len
import { NoteSelectorModal } from "../../components/note-selector/note-selector";

export const NoteSelectModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteId, setNoteId] = useState<number>(-1);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleOpen = (id: number, newCoords: { x: number; y: number }) => {
    if (noteId === -1 || id === noteId) setIsModalOpen((prev) => !prev);

    // if()

    setNoteId(id);
    setCoords(newCoords);
  };

  return (
    <NoteSelectModalContext.Provider value={{ isModalOpen, handleOpen }}>
      {isModalOpen && <NoteSelectorModal noteId={noteId} coords={coords} />}
      {children}
    </NoteSelectModalContext.Provider>
  );
};
