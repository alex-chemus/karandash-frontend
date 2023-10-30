import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage'
import { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import themeStore from './stores/ThemeStore/ThemeStore'
import { observer } from 'mobx-react-lite'
import MainPage from './pages/Main/MainPage'
import ThemeSwitcherProvider from './pages/ThemeSwitcherProvider'
import ru_RU from 'antd/lib/locale/ru_RU'

function AppComponent() {
  useEffect(() => {
    themeStore.init()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConfigProvider theme={themeStore.theme} locale={ru_RU}>
      <ThemeSwitcherProvider>
        <Routes>
          <Route path='/login' element={<AuthPage authAction='login' />} />
          <Route path='/register' element={<AuthPage authAction='register' />} />
          <Route path='/*' element={<MainPage />} />
        </Routes>
      </ThemeSwitcherProvider>
    </ConfigProvider>
  )
}

const App = observer(AppComponent)
export default App
