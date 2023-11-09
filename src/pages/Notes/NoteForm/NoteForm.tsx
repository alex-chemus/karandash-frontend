import { DatePicker, Form, Input, FormProps, Button, Typography } from "antd";
import useApiClient from "../../../api/useApiClient";
import { CreateNoteDto } from "../../../api/Api";
import './NoteForm.scss'
import { validateMessages } from "../../../shared/helpers/form-helper";

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
      validateMessages={validateMessages}
    >
      <Title level={2} className="note-form__title">
        {mode === 'add' ? 'Создать заметку' : 'Редактировать заметку'}
      </Title>

      <Form.Item name={noteNames.id} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={noteNames.title} label="Заголовок" rules={[{ required: true }]}>
        <Input className="note-form__title-input" />
      </Form.Item>

      <Form.Item name={noteNames.date} label="Дата" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item name={noteNames.text} label="Текст" rules={[{ required: true }]}>
        <TextArea rows={4} autoSize={false} />
      </Form.Item>

      <Button type="primary" htmlType="submit">Создать</Button>
    </Form>
  )
}