import { ThemeConfig } from "antd";
import { ColorMode } from "./ThemeStore";

export default function getToken(mode: ColorMode): ThemeConfig['token'] {
  return {
    colorPrimary: '#FD7014',
    colorTextBase: mode === 'light' ? '#1F2125' : 'white',
    colorBgBase: mode === 'light' ? '#f8f8f8' : '#1F2125',
    colorBgContainer: mode === 'light' ? '#f8f8f8' : '#1F2125',
    colorBgElevated: mode === 'light' ? 'white' : '#292D31'
  }
}