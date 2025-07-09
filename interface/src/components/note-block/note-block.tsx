import { useDragContext } from '../../contexts/drag-context';
import './note-block.css';

function NoteBlock() {
    const { isDragging, setIsDragging } = useDragContext();

    return (
        <div draggable={!isDragging} onDragStart={() => setIsDragging(true)} onDragEnd={() => setIsDragging(false)} className='note-block'>
            <p>test</p>
        </div>
    )
}
export default NoteBlock