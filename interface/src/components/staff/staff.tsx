import { useDragContext } from "../../contexts/drag/use-drag-context";
// eslint-disable-next-line max-len
import { NoteSelectModalProvider } from "../../contexts/note-select-modal/note-select-modal-context-provider";
import NoteBlock from "../note-block/note-block";
import "./staff.css";

function Staff() {
  const { isDragging } = useDragContext();

  return (
    <>
      <div>Drag state: {isDragging ? "Active" : "Inactive"}</div>

      <div className="staff">
        <NoteSelectModalProvider>
          {Array.from({ length: 48 }, (_, i) => (
            <NoteBlock key={i} noteId={i} />
          ))}
        </NoteSelectModalProvider>
      </div>
    </>
  );
}

export default Staff;
