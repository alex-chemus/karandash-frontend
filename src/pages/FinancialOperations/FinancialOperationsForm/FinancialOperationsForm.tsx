import { Button, Checkbox, DatePicker, Form, FormProps, Input, InputNumber, Typography } from "antd"
import useApiClient from "../../../api/useApiClient"
import ComboBox from "../../../shared/components/ComboBox/ComboBox"
import './FinancialOperationsForm.scss'
import { validateMessages } from "../../../shared/helpers/form-helpers"
import useMessage from "../../../shared/hoos/useMessage"
import { useState } from "react"

const names = {
  id: 'id',
  name: 'name',
  sum: 'sum',
  isIncome: 'isIncome',
  date: 'date',
  periodId: 'periodId'
}

const initialSingularValues = {
  id: null,
  name: '',
  sum: 0,
  isIncome: false,
  date: ''
}

const initialRegularValues = {
  id: null,
  name: '',
  sum: 0,
  isIncome: false,
  periodId: null
}

const { Title } = Typography

type Props = {
  operation: 'singular' | 'regular'
}

export default function FinancialOperationsForm({ operation }: Props) {
  const api = useApiClient()

  const message = useMessage()

  const [form] = Form.useForm()

  const [touched, setTouched] = useState(false)

  const onFinish: FormProps['onFinish'] = (values) => {
    if (operation === 'singular') {
      api.financialOperations.addSingularFinancialOperation({ ...values, date: values.date.format('YYYY-MM-DD') })
    } else {
      api.financialOperations.addRegularFinancialOperation(values)
    }

    form.resetFields()
    message.success('Операция добавлена')
  }

  return (
    <Form
      form={form}
      layout="vertical"
      className="financial-operations-form"
      onFinish={onFinish}
      initialValues={operation === 'singular' ? initialSingularValues : initialRegularValues}
      validateMessages={validateMessages}
      onValuesChange={() => setTouched(true)}
    >
      <Title level={2} className="financial-operations-form__title">
        Добавить {operation === 'singular' ? 'разовую' : 'регулярную'} операцию
      </Title>

      <Form.Item name={names.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={names.name} label="Название" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={names.sum} label="Сумма" rules={[{ required: true }, { type: 'number' }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name={names.isIncome} rules={[{ required: true }]}>
        <Checkbox
          defaultChecked={form.getFieldValue(names.isIncome)}
          onChange={(value => form.setFieldValue(names.isIncome, value.target.checked))}
        >Доход</Checkbox>
      </Form.Item>

      {operation === 'singular' && (
        <Form.Item name={names.date} label="Дата" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
      )}

      {operation === 'regular' && (
        <Form.Item name={names.periodId} label="Период" rules={[{ required: true }]}>
          <ComboBox dataSource={api.financialOperations.getPeriods} />
        </Form.Item>
      )}

      <Button type="primary" htmlType="submit" disabled={!touched}>Добавить</Button>
    </Form>
  )
}