import { useEffect, useRef } from "react";
import "./note-selector.css";

export const NoteSelectorModal = ({
  noteId,
  coords,
}: {
  noteId: number;
  coords: { x: number; y: number };
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.left = `${coords.x}px`;
      modalRef.current.style.top = `${coords.y}px`;
    }
  });

  return <div ref={modalRef} className="note-selector-modal"></div>;
};
