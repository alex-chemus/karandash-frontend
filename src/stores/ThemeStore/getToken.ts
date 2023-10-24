import { ThemeConfig } from "antd";
import { ColorMode } from "./ThemeStore";

export default function getToken(mode: ColorMode): ThemeConfig['token'] {
  return {
    colorPrimary: '#FD7014',
    colorTextBase: mode === 'light' ? 'black' : 'white',
    colorBgBase: mode === 'light' ? 'white' : 'black'
  }
}