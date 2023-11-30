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

  private refreshInnerTheme() {
    this.theme = {
      algorithm: this.colorMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      token: getToken(this.colorMode)
    }
    const root = document.querySelector(':root') as HTMLElement
    root.dataset.theme = this.colorMode
    root.style.colorScheme = this.colorMode
  }

  init() {
    const theme = localStorage.getItem('colorMode')
    if (theme === 'light' || theme === 'dark') {
      this.colorMode = theme
    } else {
      localStorage.setItem('colorMode', 'light')
      this.colorMode = 'light'
    }
    this.refreshInnerTheme()
  }

  setTheme(colorMode: ColorMode) {
    localStorage.setItem('colorMode', colorMode)
    this.colorMode = colorMode
    this.refreshInnerTheme()
  }
}

const themeStore = new ThemeStore()

export default themeStore