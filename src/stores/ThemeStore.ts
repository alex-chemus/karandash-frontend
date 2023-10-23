import { ThemeConfig, theme } from "antd"
import { MapToken, SeedToken } from "antd/es/theme/interface"
import { makeAutoObservable } from "mobx"

type ColorMode = "dark" | "light"

const lightAlgorith = (token: SeedToken): MapToken => {
  return {
    ...theme.defaultAlgorithm(token)
  }
}

const darkAlgorithm = (token: SeedToken): MapToken => {
  return {
    ...theme.defaultAlgorithm(token)
  }
}

class ThemeStore {
  colorMode: ColorMode = 'light'

  theme: ThemeConfig = {
    algorithm: this.colorMode === 'light' ? lightAlgorith : darkAlgorithm,
    token: {
      colorPrimary: 'red'
    }
  }

  constructor() {
    makeAutoObservable(this)
  }

  init() {
    const theme = localStorage.getItem('colorMode')
    if (theme === 'light' || theme === 'dark') {
      this.colorMode = theme
    } else {
      localStorage.setItem('colorMode', 'light')
      this.colorMode = 'light'
    }
  }

  setTheme(colorMode: ColorMode) {
    localStorage.setItem('colorMode', colorMode)
    this.colorMode = colorMode
    console.log('color mode', this.colorMode)
  }
}

const themeStore = new ThemeStore()

export default themeStore