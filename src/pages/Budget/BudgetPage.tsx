import { Route, Routes } from "react-router-dom";
import BudgetTable from "./BudgetTable/BudgetTable";
import BudgetForm from "./BudgetForm/BudgetForm";

export default function BudgetPage() {
  return (
    <Routes>
      <Route path="/" element={<BudgetTable />} />
      <Route path="/add-singular" element={<BudgetForm operation="singular" />} />
      <Route path="/add-regular" element={<BudgetForm operation="regular" />} />
    </Routes>
  )
}