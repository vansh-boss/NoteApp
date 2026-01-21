import { useNotes } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";




const Home = () => {
  const { notes, addNote, deleteNote, editNote } = useNotes();

  return (
    <> 
       <div className="min-h-screen flex flex-col relative z-10">  
    <div className="max-w-2xl mx-auto mt-10 relative z-10">
      <NoteForm addNote={addNote} />

      <div className="mt-6">
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
      
    
    </div>
  
   </>
  );
};

export default Home;