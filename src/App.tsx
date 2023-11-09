import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage'
import { createContext, useEffect } from 'react'
import { ConfigProvider, message } from 'antd'
import themeStore from './stores/ThemeStore/ThemeStore'
import { observer } from 'mobx-react-lite'
import MainPage from './pages/Main/MainPage'
import ThemeSwitcherProvider from './pages/ThemeSwitcherProvider'
import ru_RU from 'antd/lib/locale/ru_RU'
import { MessageInstance } from 'antd/es/message/interface'

export const MessageContext = createContext<MessageInstance | null>(null)

function AppComponent() {
  const [messageApi, contextPlaceholder] = message.useMessage()

  useEffect(() => {
    themeStore.init()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConfigProvider theme={themeStore.theme} locale={ru_RU}>
      <MessageContext.Provider value={messageApi}>
        <ThemeSwitcherProvider>
          {contextPlaceholder}
          <Routes>
            <Route path='/login' element={<AuthPage authAction='login' />} />
            <Route path='/register' element={<AuthPage authAction='register' />} />
            <Route path='/*' element={<MainPage />} />
          </Routes>
        </ThemeSwitcherProvider>
      </MessageContext.Provider>
    </ConfigProvider>
  )
}

const App = observer(AppComponent)
export default App
