import MidiWriter from "midi-writer-js";

export type MidiWriterNote = InstanceType<typeof MidiWriter.NoteEvent>;

export interface NoteSelectInfo {
  note: MidiWriterNote;
  position: { x: number; y: number };
  noteBlockId: number;
}
