import { makeAutoObservable } from "mobx";

class UserStore {
  token = ""

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
  }

  async init() {
    const token = localStorage.getItem('token')
    if (token) this.token = token
    else {
      return Promise.reject()
    }
  }
}

const userStore = new UserStore()

export default userStore