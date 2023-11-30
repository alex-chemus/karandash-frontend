import { DatePicker, Form, Input, FormProps, Button, Typography } from "antd";
import useApiClient from "../../../api/useApiClient";
import { EditNoteDto } from "../../../api/Api";
import './NoteForm.scss'
import { validateMessages } from "../../../shared/helpers/form-helpers";
import useMessage from "../../../shared/hoos/useMessage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateToString, responseDateFormatter } from "../../../shared/helpers/date-helpers";

const { TextArea } = Input

const { Title } = Typography

type Props = {
  mode: 'add' | 'edit'
}

enum NoteNames {
  id = 'id',
  title = 'title',
  date = 'date',
  text = 'text'
}

type NoteFormFields = DateToString<EditNoteDto>

export default function NoteForm({ mode }: Props) {
  const { id } = useParams()

  const api = useApiClient()

  const message = useMessage()

  const [form] = Form.useForm<NoteFormFields>()

  useEffect(() => {
    if (mode === 'edit' && id) {
      api.notes.getNoteById({ id: +id })
        .then(responseDateFormatter)
        .then(res => form.setFieldsValue(res.data))
    }
  }, [mode, id, api, form])

  const onFinish: FormProps<NoteFormFields>['onFinish'] = async (values) => {
    if (mode === 'add') {
      await api.notes.createNote(values)
      form.resetFields()
      message.success('Заметка добавлена')
    }

    if (mode === 'edit') {
      await api.notes.editNote(values)
      message.success('Заметка обновлена')
    }
  }

  return (
    <Form<NoteFormFields>
      form={form}
      layout="vertical"
      className="note-form"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Title level={2} className="note-form__title">
        {mode === 'add' ? 'Создать заметку' : 'Редактировать заметку'}
      </Title>

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