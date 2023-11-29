import { Button, Flex, Skeleton, Tooltip, Typography } from "antd"
import useApiClient from "../../../api/useApiClient"
import { useEffect, useState } from "react"
import { Note } from "../../../api/Api"
import * as dayjs from 'dayjs'
import { useNavigate, useParams } from "react-router-dom"
import './NoteView.scss'
import { IconPencil, IconTrash } from "@tabler/icons-react"
import useMessage from "../../../shared/hoos/useMessage"
import useModal from "../../../shared/components/Modal/useModal"

const { Title, Text } = Typography

export default function NoteView() {
  const api = useApiClient()

  const navigate = useNavigate()

  const { id } = useParams()

  const message = useMessage()

  const { modal, contextHolder } = useModal()

  const [note, setNote] = useState<Note | null>(null)

  const editNote = () => {
    /* todo */
  }

  const deleteNote = () => {
    modal.confirm({
      title: "Вы уверены, что хотите удалить заметку?",
      onOk: async () => {
        if (!id) return
        await api.notes.deleteNoteById({ id: +id })
        message.info("Заметка удалена")
        navigate(-1)
      }
    })
  }

  useEffect(() => {
    if (id) api.notes.getNoteById({ id: +id })
      .then(res => setNote(res.data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return note ? (
    <div className="note-view">
      <Flex justify="space-between" align="baseline">
        <Title ellipsis={{ rows: 2 }} level={2} className="note-view__title">{note.title}</Title>
        <Text italic style={{ flexShrink: 0 }}>
          {dayjs(note.date, 'YYYY-MM-DD').format('DD.MM')}
        </Text>
      </Flex>

      <Text>{note.text}</Text>

      <Flex justify="flex-end" align="center" gap={8}>
        <Tooltip title="Редактировать">
          <Button icon={<IconPencil />} onClick={editNote} />
        </Tooltip>
        <Tooltip title="Удалить">
          <Button icon={<IconTrash />} onClick={deleteNote} />
        </Tooltip>
        {contextHolder}
      </Flex>
    </div>
  ) : <Skeleton />
}