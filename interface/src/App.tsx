import "./App.css";
import Staff from "./components/staff/staff";
import MidiWriter from "midi-writer-js";
import { DragProvider } from "./contexts/drag/drag-context-provider";

function App() {
  // Start with a new track
  const track = new MidiWriter.Track();

  // Define an instrument (optional):
  track.addEvent(new MidiWriter.ProgramChangeEvent({ instrument: 1 }));

  // Add some notes:
  const note = new MidiWriter.NoteEvent({
    pitch: ["C4", "D4", "E4"],
    duration: "4",
  });
  track.addEvent(note);

  // Generate a data URI
  const write = new MidiWriter.Writer(track);
  console.log(write.dataUri());

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">SynthMaker</h1>
      </header>
      <main>
        <DragProvider>
          <Staff />
        </DragProvider>
      </main>
    </div>
  );
}

export default App;
