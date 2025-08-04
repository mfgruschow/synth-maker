import { createContext } from "react";
import type { MidiWriterNote } from "../utility/types";

interface DragContextType {
    isDragging: boolean;
    setIsDragging?: (isDragging: boolean) => void;
    note?: MidiWriterNote | null;
    setNote?: (note: MidiWriterNote | null) => void;
}

export const DragContext = createContext<DragContextType | undefined>(undefined);