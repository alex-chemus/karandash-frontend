import { IconBrightnessHalf } from "@tabler/icons-react"
import { Button } from "antd"
import { ReactNode } from "react"
import themeStore from "../stores/ThemeStore/ThemeStore"

type Props = {
  children: ReactNode
}

export default function ThemeSwitcherProvider({ children }: Props) {
  const handleClick = () => {
    themeStore.setTheme(themeStore.colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Button
        onClick={handleClick}
        className="theme-switcher-button"
        icon={<IconBrightnessHalf size={28} />}
      />
      {children}
    </>
  )
}