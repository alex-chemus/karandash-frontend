import { Button, Input, Typography, Form, Space } from "antd";
import { observer } from "mobx-react-lite";
import './AuthPage.scss'
import useApiClient from "../../api/useApiClient";
import userStore from "../../stores/UserStore/UserStore";
import { useNavigate } from "react-router-dom";

const { Title } = Typography

type Props = {
  authAction: 'login' | 'register'
}

const authNames = {
  login: 'login',
  password: 'password'
} as const

function AuthComponent(props: Props) {
  const navigate = useNavigate()

  const [form] = Form.useForm()

  const api = useApiClient()

  const register = async (): Promise<string> => {
    const response = await api.auth.register({
      login: form.getFieldValue(authNames.login) as string,
      password: form.getFieldValue(authNames.password) as string
    })

    return response.data.token
  }

  const login = async (): Promise<string> => {
    const response = await api.auth.login({
      login: form.getFieldValue(authNames.login) as string,
      password: form.getFieldValue(authNames.password) as string
    })

    return response.data.token
  }

  const onFinish = async () => {
    const token = props.authAction === 'login'
      ? await login()
      : await register()
    
    userStore.setToken(token)

    navigate('/')
  }

  return (
    <div className='auth-page'>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="auth-form"
      >
        <Space size='small' direction="vertical">
          <Title level={1}>
            {props.authAction === 'login' ? 'Войти' : 'Регистрация'}
          </Title>

          <Form.Item
            name={authNames.login}
            label='Логин'
            rules={[
              { required: true, message: 'Логин не может быть пустым' },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name={authNames.password}
            label='Пароль'
            rules={[
              { required: true, message: 'Пароль не может быть пустым' }
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            {props.authAction === 'login' ? 'Войти' : 'Регистрация'}
          </Button>
        </Space>
      </Form>
    </div>
  )
}

const AuthPage = observer(AuthComponent)
export default AuthPage