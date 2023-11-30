import { Button, Checkbox, DatePicker, Form, FormProps, Input, InputNumber, Typography } from "antd"
import useApiClient from "../../../api/useApiClient"
import ComboBox from "../../../shared/components/ComboBox/ComboBox"
import './BudgetForm.scss'
import { validateMessages } from "../../../shared/helpers/form-helpers"
import useMessage from "../../../shared/hoos/useMessage"

const budgetNames = {
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

export default function BudgetForm({ operation }: Props) {
  const api = useApiClient()

  const message = useMessage()

  const [form] = Form.useForm()

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
      className="budget-form"
      onFinish={onFinish}
      initialValues={operation === 'singular' ? initialSingularValues : initialRegularValues}
      validateMessages={validateMessages}
    >
      <Title level={2} className="note-form__title">
        Добавить {operation === 'singular' ? 'разовую' : 'регулярную'} операцию
      </Title>

      <Form.Item name={budgetNames.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={budgetNames.name} label="Название" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={budgetNames.sum} label="Сумма" rules={[{ required: true }, { type: 'number' }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name={budgetNames.isIncome} rules={[{ required: true }]}>
        <Checkbox
          defaultChecked={form.getFieldValue(budgetNames.isIncome)}
          onChange={(value => form.setFieldValue(budgetNames.isIncome, value.target.checked))}
        >Доход</Checkbox>
      </Form.Item>

      {operation === 'singular' && (
        <Form.Item name={budgetNames.date} label="Дата" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
      )}

      {operation === 'regular' && (
        <Form.Item name={budgetNames.periodId} label="Период" rules={[{ required: true }]}>
          <ComboBox dataSource={api.financialOperations.getPeriods} />
        </Form.Item>
      )}

      <Button type="primary" htmlType="submit">Добавить</Button>
    </Form>
  )
}