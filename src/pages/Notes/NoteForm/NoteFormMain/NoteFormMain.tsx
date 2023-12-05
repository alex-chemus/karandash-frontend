import { Button, DatePicker, Form, Input } from "antd"
import { FormMode } from "../NoteForm"
import { FormProps } from "antd/lib"
import { validateMessages } from "../../../../shared/helpers/form-helpers"
import useMessage from "../../../../shared/hoos/useMessage"
import useApiClient from "../../../../api/useApiClient"
import { EditNoteDto } from "../../../../api/Api"
import { useEffect } from "react"
import { DateToString, responseDateFormatter } from "../../../../shared/helpers/date-helpers"
import { useParams } from "react-router-dom"

const { TextArea } = Input

type NoteFormFields = DateToString<EditNoteDto>

enum NoteNames {
  id = 'id',
  title = 'title',
  date = 'date',
  text = 'text',
  singularFinancialOperations = 'singularFinancialOperations'
}

type Props = {
  mode: FormMode,
  onSubmit?: (id: number) => void
}

export default function NoteFormMain({ mode, onSubmit }: Props) {
  const api = useApiClient()

  const message = useMessage()

  const { id } = useParams()

  const [form] = Form.useForm<NoteFormFields>()

  useEffect(() => {
    return () => {
      console.log('destroy NoteFormMain')
    }
  }, [])

  useEffect(() => {
    if (mode === 'edit' && id) {
      api.notes.viewNote({ id: +id })
        .then(responseDateFormatter)
        .then(res => form.setFieldsValue(res.data))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, id, form])

  const onFinish: FormProps<NoteFormFields>['onFinish'] = async (values) => {
    if (mode === 'add') {
      const note = await api.notes.createNote({ ...values })
      form.resetFields()
      message.success('Заметка добавлена')
      onSubmit?.(note.data.id)
    }

    if (mode === 'edit') {
      await api.notes.editNote(values)
      message.success('Заметка обновлена')
      onSubmit?.(Number(id))
    }
  }

  return (
    <Form<NoteFormFields>
      form={form}
      layout="vertical"
      className="note-form-main"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={NoteNames.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={NoteNames.title} label="Заголовок" rules={[{ required: true }]}>
        <Input className="note-form__title-input" />
      </Form.Item>

      <Form.Item name={NoteNames.date} label="Дата" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item name={NoteNames.text} label="Текст" rules={[{ required: true }]}>
        <TextArea rows={4} autoSize={false} />
      </Form.Item>

      <Button type="primary" htmlType="submit">Создать</Button>
    </Form>
  )
}