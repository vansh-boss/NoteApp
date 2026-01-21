import jsPDF from "jspdf";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";


const Notes = () => {
  const { notes, deleteNote, editNote } = useNotes();

  const downloadAllPDF = () => {
    const doc = new jsPDF();
    let y = 10;

    notes.forEach((note, i) => {
      doc.text(`Note ${i + 1}`, 10, y);
      y += 6;
      doc.text(`Title: ${note.title}`, 10, y);
      y += 6;
      doc.text(note.content, 10, y);
      y += 10;
    });

    doc.save("all-notes.pdf");
  };

  return (

    
    <div className="min-h-screen flex flex-col relative z-10">
    <div className="max-w-2xl mx-auto mt-6">
      <button
        onClick={downloadAllPDF}
        className="bg-black text-white px-4 py-2 rounded mb-4"
      >
        Download ALL Notes (PDF)
      </button>

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
    </div>
  );
};

export default Notes;
