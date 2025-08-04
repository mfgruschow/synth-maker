import { useState } from 'react';
import { useDragContext } from '../../contexts/use-drag-context';
import './note-block.css';
import { NoteEvent } from 'midi-writer-js/build/types/midi-events/note-event';

function NoteBlock() {
    const { isDragging, setIsDragging } = useDragContext();
    const [note,] = useState<NoteEvent | null>(null);

    const handleDragStart = (event: React.DragEvent) => {
        setIsDragging!(true);
        // You can set the note here if needed
        // setNote({ ... });
        event.dataTransfer.setData('text/plain', JSON.stringify(note));
    };

    return (
        <div draggable={!isDragging} onDragStart={handleDragStart} className='note-block'>
            <p>test</p>
        </div>
    )
}
export default NoteBlock