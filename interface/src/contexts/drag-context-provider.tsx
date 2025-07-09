import { useState, type ReactNode, } from "react";
import { DragContext } from "./drag-context";

interface DragProviderProps {
    children: ReactNode;
}

export const DragProvider = ({ children }: DragProviderProps) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <DragContext.Provider value={{ isDragging, setIsDragging }}>
            {children}
        </DragContext.Provider>
    );
};

