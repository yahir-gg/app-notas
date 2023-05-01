import { useState } from "react";

// no retorna UI - keyword=use____
function useNotes(){
    
    const [notes, setNotes] = useState( [] );
    
    function add(title, message){
        const id = Date.now();
        const noteObject = {title, message, id};
        
        setNotes([noteObject, ...notes]);
    }
    function remove(id){
        let newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }
    return{
        notes,
        add,
        remove
    }
}

export default useNotes;