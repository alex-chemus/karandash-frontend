import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotesPage from "../Notes/NotesPage";
import BudgetPage from "../Budget/BudgetPage";
import NavSidebar from "./NavSidebar/NavSidebar";
import './MainPage.scss'

export default function MainPage() {
  return (
  <ProtectedRoute>
    <NavSidebar>
      <Routes>
        <Route path='/' element={<Navigate to='/notes' />} /> 
        <Route path='/notes*' element={<NotesPage />} />
        <Route path='/budget*' element={<BudgetPage />} />
      </Routes>
    </NavSidebar>
  </ProtectedRoute>
  )
}