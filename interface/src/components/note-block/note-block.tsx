import { useEffect, useRef, useState } from 'react';
// import { useDragContext } from '../../contexts/use-drag-context';
import './note-block.css';
import type { MidiWriterNote } from '../../utility/types';
import { useDragContext } from '../../contexts/use-drag-context';

function NoteBlock() {
    const { isDragging, setIsDragging } = useDragContext();

    const [note, setNote] = useState<MidiWriterNote | null>(null);
    const [dragVisited, setDragVisited] = useState(false);

    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleDragStart = (event: React.DragEvent) => {
        setIsDragging!(true); // set the global context state to dragging

        console.info('Drag starting', note);
        event.dataTransfer.setData('text/plain', JSON.stringify(note)); // set the data to be transferred
        event.dataTransfer.effectAllowed = 'copy'; // set the effect allowed for the drag operation
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();

        if (!timeoutId.current && isDragging && !dragVisited) {
            // is there is no timeout, and we are dragging and haven't visited the drag area yet
            setDragVisited(true);

            timeoutId.current = setTimeout(() => {
                // after 300ms, we can assume this is a valid drag operation
                const data: MidiWriterNote = JSON.parse(event.dataTransfer.getData('text/plain'));

                console.log('Drag Over Data:', data);
            }, 300)
        }
    };

    const handleDragEnd = (event: React.DragEvent) => {
        // set global drag state to false
        setIsDragging!(false);

        const data: MidiWriterNote = JSON.parse(event.dataTransfer.getData('text/plain'));

        setNote(data);
    }

    useEffect(() => {
        if (!isDragging && dragVisited) {
            // the drag operation has ended, reset the dragVisited state
            // and clear the timeout if it exists
            console.log('Drag ended, resetting state');

            setDragVisited(false);

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        }
    }, [isDragging, dragVisited]);

    return (
        <div draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} className='note-block'>
            <p>test</p>
        </div>
    )
}
export default NoteBlock