import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import Note from "./Note";

function NotesList(){
    const { notes } = useContext(NotesContext);
    return(
        <div>
            <p>Tienes {notes.length} notas guardadas.</p>
            {
                notes.map((elem => (
                    <Note key={elem.id} title={elem.title} id={elem.id} message={elem.message}/>
                )))
            }
        </div>
    )
}

export default NotesList;