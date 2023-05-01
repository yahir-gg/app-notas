import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteDeleteBtn({id}){
    let {remove} = useContext(NotesContext);
    return(
        <button onClick={ev => remove(id) }>Eliminar</button>
    )
}

export default NoteDeleteBtn;