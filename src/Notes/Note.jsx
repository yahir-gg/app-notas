import NoteDeleteBtn from "./NoteDeleteBtn";

function Note({title, message, id}){
    return(
        <div className="note">
            <h2>{title}</h2>
            <h2>{message}</h2>
            <NoteDeleteBtn id={id}/>
        </div>
    );
}

export default Note;