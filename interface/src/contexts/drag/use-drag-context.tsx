import { useContext } from "react";
import { DragContext } from "./drag-context";

export const useDragContext = () => {
    const context = useContext(DragContext);
    if (!context) {
        throw new Error('useDragContext must be used within a DragProvider');
    }
    return context;
};