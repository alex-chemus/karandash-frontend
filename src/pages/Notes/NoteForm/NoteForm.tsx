import { DatePicker, Form, Input, FormProps, Button, Typography } from "antd";
import useApiClient from "../../../api/useApiClient";
import { CreateNoteDto } from "../../../api/Api";
import './NoteForm.scss'

const { TextArea } = Input

const { Title } = Typography

type Props = {
  mode: 'add' | 'edit'
}

const noteNames = {
  id: 'id',
  title: 'title',
  date: 'date',
  text: 'text'
}

export default function NoteForm({ mode }: Props) {
  const api = useApiClient()

  const [form] = Form.useForm()

  const onFinish: FormProps['onFinish'] = async (values: CreateNoteDto) => {
    if (mode === 'add') {
      await api.notes.createNote(values)
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      className="note-form"
      onFinish={onFinish}
    >
      <Title level={2} className="note-form__title">
        {mode === 'add' ? 'Создать заметку' : 'Редактировать заметку'}
      </Title>

      <Form.Item name={noteNames.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={noteNames.title} label="Заголовок">
        <Input className="note-form__title-input" />
      </Form.Item>

      <Form.Item name={noteNames.date} label="Дата">
        <DatePicker />
      </Form.Item>

      <Form.Item name={noteNames.text} label="Текст">
        <TextArea rows={4} autoSize={false} />
      </Form.Item>

      <Button type="primary" htmlType="submit">Создать</Button>
    </Form>
  )
}