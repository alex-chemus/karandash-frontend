import { useNavigate } from "react-router-dom";
import { Api } from "./Api"
import userStore from "../stores/UserStore/UserStore";

const apiHost = import.meta.env.VITE_API_HOST || 'http://localhost:500'

export default function useApiClient() {
  const navigate = useNavigate()
  
  const api = new Api({ baseUrl: apiHost })

  const oldRequest = api.request;

  api.request = async (oldParams) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: any = oldParams.headers ?? {}
  
    if (userStore.token) {
      headers.Authorization = `Bearer ${userStore.token}`
    }
  
    const params = { ...oldParams, headers }
  
    try {
      return await oldRequest(params)
    } catch (e) {
      const err = e as any // eslint-disable-line @typescript-eslint/no-explicit-any
      if (err.status === 401) {
        navigate('/login')
      } else {
         alert(err.error.message) // change later
      }
      throw err
    }
  }

  return api
}