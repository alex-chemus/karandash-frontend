import { Route, Routes, useNavigate } from 'react-router-dom'
import userStore from './stores/UserStore/UserStore'
import Auth from './pages/Auth/Auth'
import Notes from './pages/Notes/Notes'
import { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import themeStore from './stores/ThemeStore/ThemeStore'
import { observer } from 'mobx-react-lite'

function AppComponent() {
  const navigate = useNavigate()

  useEffect(() => {
    themeStore.init()
    userStore.init().catch(() => navigate('/'))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConfigProvider theme={themeStore.theme}>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </ConfigProvider>
  )
}

const App = observer(AppComponent)
export default App
