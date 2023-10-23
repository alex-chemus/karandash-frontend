import { Link } from "react-router-dom";
import { useEffect } from "react";
import useApiClient from "../../api/useApiClient";

export default function Notes() {
  const api = useApiClient()

  useEffect(() => {
    api.notes.getNoteById({ id: 10 })
  }, [])

  return (
    <>
      <nav>
        <Link to="/">Auth</Link>
        <Link to="/notes">Notes</Link>
      </nav>

      Notes
    </>
  )
}