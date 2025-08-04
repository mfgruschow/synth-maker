import './App.css'
import Staff from './components/staff/staff'
import { DragProvider } from './contexts/drag-context-provider'
import MidiWriter from "midi-writer-js";



function App() {
  // Start with a new track
  const track = new MidiWriter.Track();

  // Define an instrument (optional):
  track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));

  // Add some notes:
  const note = new MidiWriter.NoteEvent({ pitch: ['C4', 'D4', 'E4'], duration: '4' });
  track.addEvent(note);

  // Generate a data URI
  const write = new MidiWriter.Writer(track);
  console.log(write.dataUri());


  return (
    <>
      <h1>Melody</h1>
      <DragProvider>
        <Staff />
      </DragProvider>
    </>
  )
}

export default App
