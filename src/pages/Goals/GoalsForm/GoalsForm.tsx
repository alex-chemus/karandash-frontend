import { Button, Form, FormProps, Input, InputNumber, Typography } from "antd"
import useApiClient from "../../../api/useApiClient"
import './GoalsForm.scss'
import * as dayjs from 'dayjs'
import { AddGoalDto } from "../../../api/Api"
import { validateMessages } from "../../../shared/helpers/form-helpers"
import useMessage from "../../../shared/hoos/useMessage"
import { useState } from "react"

const goalNames = {
  id: 'id',
  name: 'name',
  year: 'year',
  sum: 'sum'
}

const initialValues = {
  name: '',
  year: dayjs().year(),
  sum: 0
}

const { Title } = Typography

export default function GoalsForm() {
  const api = useApiClient()

  const message = useMessage()

  const [form] = Form.useForm()

  const [touched, setTouched] = useState(false)

  const onFinish: FormProps['onFinish'] = async (values: AddGoalDto) => {
    await api.goals.addGoal(values)

    form.resetFields()
    message.success('Цель добавлена')
  }

  return (
    <Form
      form={form}
      layout="vertical"
      className="goals-form"
      onFinish={onFinish}
      initialValues={initialValues}
      validateMessages={validateMessages}
      onValuesChange={() => setTouched(true)}
    >
      <Title level={2} className="note-form__title">
        Добавить цель
      </Title>

      <Form.Item name={goalNames.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={goalNames.name} label="Название" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={goalNames.sum} label="Сумма" rules={[{ required: true }, { type: 'number' }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name={goalNames.year} label="Год" rules={[{ required: true }, { type: 'number' }]}>
        <InputNumber />
      </Form.Item>

      <Button type="primary" htmlType="submit" disabled={!touched}>Добавить</Button>
    </Form>
  )
}