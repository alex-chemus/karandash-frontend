import { Route, Routes } from "react-router-dom";
import NotesCalendar from "./NotesCalendar/NotesCalendar";
import NoteForm from "./NoteForm/NoteForm";
import NoteView from "./NoteView/NoteView";

export default function NotesPage() {
  return (
    <Routes>
      <Route path="/" element={<NotesCalendar />} />
      <Route path="/edit/:id/*" element={<NoteForm mode="edit" />} />
      <Route path="/add/*" element={<NoteForm mode="add" />} />
      <Route path="/view/:id/*" element={<NoteView />} />
    </Routes>
  )
}