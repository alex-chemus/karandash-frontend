import { ReactNode, useEffect, useState } from "react";
import userStore from "../../stores/UserStore/UserStore";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate()

  const [initializedStore, setInitializedStore] = useState(false)

  useEffect(() => {
    userStore.init()
      .then(() => {
        setInitializedStore(true)
        if (!userStore.token) throw new Error()
      })
      .catch(() => navigate('/login'))
  }, [userStore.token]) // eslint-disable-line react-hooks/exhaustive-deps

  return initializedStore ? children : null
}