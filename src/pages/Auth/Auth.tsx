import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import themeStore from "../../stores/ThemeStore";
import { observer } from "mobx-react-lite";

function AuthComponent() {
  return (
    <>
      <nav>
        <Link to="/">Auth</Link>
        <Link to="/notes">Notes</Link>
      </nav>

      Auth

      <Button onClick={() => themeStore.setTheme('dark')}>switch theme</Button>
      <Input />
    </>
  )
}

const Auth = observer(AuthComponent)
export default Auth