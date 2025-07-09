import { createContext, useContext } from "react";
import { NoteEvent } from 'midi-writer-js/build/types/midi-events/note-event';

interface DragContextType {
    isDragging: boolean;
    setIsDragging?: (isDragging: boolean) => void;
    note: NoteEvent | null;
}

export const DragContext = createContext<DragContextType>({
    isDragging: false,
    setIsDragging: () => { },
    note: null,
});

export const useDragContext = () => {
    const context = useContext(DragContext);
    if (!context) {
        throw new Error('useDragContext must be used within a DragProvider');
    }
    return context;
};