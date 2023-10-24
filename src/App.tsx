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
        <Route path='/login' element={<Auth authAction='login' />} />
        <Route path='/register' element={<Auth authAction='register' />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/' element={<Auth authAction='login' />} />
      </Routes>
    </ConfigProvider>
  )
}

const App = observer(AppComponent)
export default App
