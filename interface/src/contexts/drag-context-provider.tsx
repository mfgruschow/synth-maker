import type { NoteEvent } from "midi-writer-js/build/types/midi-events/note-event";
import { useState, type ReactNode } from "react";
import { DragContext } from "./drag-context";

export const DragProvider = ({ children }: { children: ReactNode }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [note, setNote] = useState<NoteEvent | null>(null);

    return (
        <DragContext.Provider value={{ isDragging, note, setIsDragging, setNote }
        }>
            {children}
        </DragContext.Provider>
    );
};