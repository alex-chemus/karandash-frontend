import { Route, Routes } from "react-router-dom";
import FinancialOperationsTable from "./FinancialOperationsTable/FinancialOperationsTable";
import FinancialOperationsForm from "./FinancialOperationsForm/FinancialOperationsForm";

export default function FinancialOperationsPage() {
  return (
    <Routes>
      <Route path="/" element={<FinancialOperationsTable />} />
      <Route path="/add-singular" element={<FinancialOperationsForm operation="singular" />} />
      <Route path="/add-regular" element={<FinancialOperationsForm operation="regular" />} />
    </Routes>
  )
}