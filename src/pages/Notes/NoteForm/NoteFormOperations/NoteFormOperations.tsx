import { Button, Checkbox, DatePicker, Divider, Form, Input, InputNumber, Typography, Table, Tooltip } from "antd"
import { validateMessages } from "../../../../shared/helpers/form-helpers"
import { AddSingularFinancialOperationDto } from "../../../../api/Api"
import "./NoteFormOperations.scss"
import { IconTrash } from "@tabler/icons-react"
import { useEffect, useMemo, useReducer } from "react"
import useApiClient from "../../../../api/useApiClient"
import { FormMode } from "../NoteForm"
import { useParams } from "react-router-dom"
import { NoteFinancialOperation, NoteOperationsReducer, noteOperationsReducer } from "./NoteOperationsReducer"
import useMessage from "../../../../shared/hoos/useMessage"
import { NoteFormState } from "../NoteFormReducer"

const { Title } = Typography

type Props = {
  mode: FormMode,
  formState: NoteFormState,
  onTouch?: () => void,
}

enum OperationNames {
  name = 'name',
  sum = 'sum',
  isIncome = 'isIncome',
  date = 'date'
}

export default function NoteFormOperations({ mode, formState, onTouch }: Props) {
  const api = useApiClient()

  const { id } = useParams()

  const message = useMessage()

  const [form] = Form.useForm<AddSingularFinancialOperationDto>()

  const [operations, dispatch] = useReducer<NoteOperationsReducer>(noteOperationsReducer, [])

  const deleteOperation = async (operation: NoteFinancialOperation) => {
    if (operation.exists) {
      try {
        const res = await api.financialOperations.deleteSingularOperation({ id: Number(id) })
        if (res.data) dispatch({ type: 'delete', payload: operation.key })
      } catch(error) {
        message.error('Ошибка удаления операции')
        console.error(error)
      }
    } else {
      dispatch({ type: 'delete', payload: operation.key })
    }
  }

  useEffect(() => {
    if (mode === 'edit' && id) {
      api.financialOperations.getOperationsByNote({ id: Number(id) })
        .then(res => dispatch({ type: 'fill', payload: res.data }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, mode])

  useEffect(() => {
    operations.forEach((operation) => {
      if (operation.exists) return
      api.financialOperations.addSingularFinancialOperation({ ...operation, noteId: formState.id })
        .catch(error => {
          console.error(error)
          message.error(error)
        })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])

  const columns = useMemo(() => {
    return [
      {
        key: 'name',
        dataIndex: 'name',
        title: 'Название',
      },
      {
        key: 'sum',
        dataIndex: 'sum',
        title: 'Сумма',
      },
      {
        key: 'isIncome',
        dataIndex: 'isIncome',
        title: 'Доход',
        render: (value: boolean) => <Checkbox checked={value} />
      },
      {
        key: 'date',
        dataIndex: 'date',
        title: 'Дата'
      },
      {
        key: 'actions',
        render: (operation: NoteFinancialOperation) => {
          return (
            <Tooltip title="Удалить">
              <Button
                icon={<IconTrash />}
                type="text"
                onClick={() => deleteOperation(operation)}
              />
            </Tooltip>
          )
        }
      }
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form<AddSingularFinancialOperationDto>
        form={form}
        layout="vertical"
        className="note-form-operations"
        onFinish={values => dispatch({ type: 'add', payload: values })}
        validateMessages={validateMessages}
        onValuesChange={onTouch}
      >
        <Title level={4} className="note-form-operations__form-title">Добавить разовую операцию</Title>

        <Form.Item name={OperationNames.name} label="Название" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={OperationNames.sum} label="Сумма" rules={[{ required: true }, { type: 'number' }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item name={OperationNames.isIncome} label="Доход">
          <Checkbox
            defaultChecked={form.getFieldValue(OperationNames.isIncome)}
            onChange={(value => form.setFieldValue(OperationNames.isIncome, value.target.checked))}
          >Доход</Checkbox>
        </Form.Item>

        <Form.Item name={OperationNames.date} label="Дата" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Button type="primary" htmlType="submit">Добавить операцию</Button>
      </Form>

      {operations.length ? (
        <>
          <Divider />
    
          <Table
            columns={columns}
            dataSource={operations}
            pagination={false}
          />
        </>
      ) : null}
    </>
  )
}