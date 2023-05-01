import './App.css'
import NotesForm from './Notes/NotesForm'
import NotesList from './Notes/NotesList'
import { NotesProvider } from './context/NotesContext'

function App() {

  return (
    <>
    <div className="App">
      <NotesProvider>
        <NotesForm/>
        <NotesList/>
      </NotesProvider>
    </div>
    </>
  )
}

export default App
