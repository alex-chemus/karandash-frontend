import { ThemeConfig, theme } from "antd"
import { makeAutoObservable } from "mobx"
import getToken from "./getToken"

export type ColorMode = "dark" | "light"

class ThemeStore {
  colorMode: ColorMode = 'light'
  theme: ThemeConfig = {}

  constructor() {
    makeAutoObservable(this)
  }

  private refreshTheme() {
    this.theme = {
      algorithm: this.colorMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      token: getToken(this.colorMode)
    }
  }

  init() {
    const theme = localStorage.getItem('colorMode')
    if (theme === 'light' || theme === 'dark') {
      this.colorMode = theme
    } else {
      localStorage.setItem('colorMode', 'light')
      this.colorMode = 'light'
    }
    this.refreshTheme()
  }

  setTheme(colorMode: ColorMode) {
    localStorage.setItem('colorMode', colorMode)
    this.colorMode = colorMode
    this.refreshTheme()
  }
}

const themeStore = new ThemeStore()

export default themeStore