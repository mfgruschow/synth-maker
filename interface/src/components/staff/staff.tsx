import { useDragContext } from "../../contexts/drag-context";
import NoteBlock from "../note-block/note-block";
import './staff.css';

function Staff() {
    const { isDragging } = useDragContext();

    return (
        <>
            <div>Drag state: {isDragging ? 'Active' : 'Inactive'}</div>

            <div className="staff">
                {Array.from({ length: 16 }, (_, i) => (
                    <NoteBlock key={i} />
                ))}
            </div>
        </>
    )
}

export default Staff;