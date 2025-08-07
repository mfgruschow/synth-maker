import { useEffect, useRef, useState } from "react";
import "./note-block.css";
import type { MidiWriterNote } from "../../utility/types";
import { useDragContext } from "../../contexts/drag/use-drag-context";
import noteIcon from "../../assets/music-note-icon.svg";
import restIcon from "../../assets/rest-note-icon.svg";

function NoteBlock({ noteId }: { noteId: number }) {
  const { isDragging, setIsDragging } = useDragContext();

  const [note, setNote] = useState<MidiWriterNote | null>(null);
  const [dragVisited, setDragVisited] = useState(false);

  const noteRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDragStart = (event: React.DragEvent) => {
    if (!note) return;

    setIsDragging!(true); // set the global context state to dragging

    console.info("Drag starting", note);

    noteRef.current?.classList.add("dragging");

    // set the data to be transferred
    event.dataTransfer.setData("text/plain", JSON.stringify(note));
    // set the effect allowed for the drag operation
    event.dataTransfer.effectAllowed = "copy";
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();

    if (!timeoutId.current && isDragging && !dragVisited) {
      // is there is no timeout, and we are dragging and haven't visited the drag area yet
      setDragVisited(true);

      timeoutId.current = setTimeout(() => {
        // after 300ms, we can assume this is a valid drag operation
        const data: MidiWriterNote = JSON.parse(
          event.dataTransfer.getData("text/plain")
        );

        noteRef.current?.classList.add("drag-selected");

        console.log("Drag Over Data:", data);
      }, 400);
    }
  };

  const handleDragEnd = (event: React.DragEvent) => {
    // set global drag state to false
    setIsDragging!(false);

    const data: MidiWriterNote = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );

    setNote(data);
    noteRef.current?.classList.remove("dragging");
  };

  useEffect(() => {
    if (!note) {
      noteRef.current?.classList.add("empty");
    } else {
      noteRef.current?.classList.remove("empty");
    }
  }, [note]);

  useEffect(() => {
    if (!isDragging && dragVisited) {
      // the drag operation has ended, reset the dragVisited state
      // and clear the timeout if it exists

      setDragVisited(false);

      noteRef.current?.classList.remove("drag-selected");

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
    }
  }, [isDragging, dragVisited]);

  return (
    <div
      ref={noteRef}
      draggable={!!note}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className="note-block"
    >
      {/* Import the SVG as a module */}
      {/* @ts-ignore */}
      {note ? (
        <img className="note-icon" src={noteIcon} alt="Note Icon" />
      ) : (
        <img className="note-icon" src={restIcon} alt="Empty Note Icon" />
      )}
    </div>
  );
}
export default NoteBlock;
