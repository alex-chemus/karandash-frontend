import { Button, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import themeStore from "../../stores/ThemeStore/ThemeStore";
import { observer } from "mobx-react-lite";

function AuthComponent() {
  const onClick = () => {
    if (themeStore.colorMode === 'light') themeStore.setTheme('dark')
    else themeStore.setTheme('light')
  }

  return (
    <Space>
      <nav>
        <Link to="/">Auth</Link>
        <Link to="/notes">Notes</Link>
      </nav>

      <Button onClick={onClick}>switch theme</Button>
      <Input />

      <Typography>test</Typography>
    </Space>
  )
}

const Auth = observer(AuthComponent)
export default Auth