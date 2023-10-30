import { ReactNode, useEffect } from "react";
import userStore from "../../stores/UserStore/UserStore";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    userStore.init()
    if (!userStore.token) navigate('/login')
  }, [userStore.token]) // eslint-disable-line react-hooks/exhaustive-deps

  return children
}