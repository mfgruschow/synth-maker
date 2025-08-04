import { useState, type ReactNode } from "react";
import { DragContext } from "./drag-context";
import type { MidiWriterNote } from "../utility/types";

export const DragProvider = ({ children }: { children: ReactNode }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [note, setNote] = useState<MidiWriterNote | null>(null);

    return (
        <DragContext.Provider value={{ isDragging, note, setIsDragging, setNote }
        }>
            {children}
        </DragContext.Provider>
    );
};