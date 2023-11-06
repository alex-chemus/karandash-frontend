import { Route, Routes } from "react-router-dom";
import GoalsChart from "./GoalsChart/GoalsChart";
import GoalsForm from "./GoalsForm/GoalsForm";

export default function GoalsPage() {
  return (
    <Routes>
      <Route path='/' element={<GoalsChart />} />
      <Route path='add' element={<GoalsForm />} />
    </Routes>
  )
}