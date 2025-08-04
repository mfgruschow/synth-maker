import { createContext, } from "react";
import { NoteEvent } from 'midi-writer-js/build/types/midi-events/note-event';

interface DragContextType {
    isDragging: boolean;
    setIsDragging?: (isDragging: boolean) => void;
    note?: NoteEvent | null;
    setNote?: (note: NoteEvent | null) => void;
}

export const DragContext = createContext<DragContextType | undefined>(undefined);