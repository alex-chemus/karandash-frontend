import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotesPage from "../Notes/NotesPage";
import FinancialOperationsPage from "../FinancialOperations/FinancialOperationsPage";
import NavSidebar from "./NavSidebar/NavSidebar";
import './MainPage.scss'
import GoalsPage from "../Goals/GoalsPage";
import ReferencePage from "../Reference/ReferencePage";

export default function MainPage() {
  return (
  <ProtectedRoute>
    <NavSidebar>
      <Routes>
        <Route path='/' element={<Navigate to='/notes' />} /> 
        <Route path='/notes/*' element={<NotesPage />} />
        <Route path='/financial-operations/*' element={<FinancialOperationsPage />} />
        <Route path='/goals/*' element={<GoalsPage />} />
        <Route path='/ref/*' element={<ReferencePage />} />
      </Routes>
    </NavSidebar>
  </ProtectedRoute>
  )
}