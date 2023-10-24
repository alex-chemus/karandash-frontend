import { Button, Input, Space, Typography, Form } from "antd";
import { observer } from "mobx-react-lite";
import './Auth.scss'

const { Title } = Typography

type Props = {
  authAction: 'login' | 'register'
}

const authNames = {
  login: 'login',
  password: 'password'
} as const

function AuthComponent(props: Props) {
  const [form] = Form.useForm()

  const onFinish = () => {
    console.log(form.getFieldValue(authNames.login))
  }

  return (
    <Space className="auth-form">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Title level={1}>
          {props.authAction === 'login' ? 'Войти' : 'Регистрация'}
        </Title>

        <Form.Item name={authNames.login} label='Логин'>
          <Input />
        </Form.Item>

        <Form.Item name={authNames.password} label='Пароль'>
          <Input type="password" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          {props.authAction === 'login' ? 'Войти' : 'Регистрация'}
        </Button>
      </Form>
    </Space>
  )
}

const Auth = observer(AuthComponent)
export default Auth