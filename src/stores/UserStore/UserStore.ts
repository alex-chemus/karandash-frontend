import { makeAutoObservable } from "mobx";

class UserStore {
  token = ""

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
    localStorage.setItem('token', token)
  }

  async init() {
    const token = localStorage.getItem('token')
    if (token) this.token = token
  }
}

const userStore = new UserStore()

export default userStore