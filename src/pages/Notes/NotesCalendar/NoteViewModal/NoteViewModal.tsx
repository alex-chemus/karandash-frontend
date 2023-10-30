import { Typography, Skeleton, Flex, Button } from "antd"
import { useEffect, useState } from "react"
import { Note } from "../../../../api/Api"
import useApiClient from "../../../../api/useApiClient"
import * as dayjs from 'dayjs'
import { IconPencil } from "@tabler/icons-react"
import './NoteViewModal.scss'
import { useNavigate } from "react-router-dom"

type Props = {
  id: number
}

const { Title, Text } = Typography

export default function NoteViewModal({ id }: Props) {
  const api = useApiClient()

  const navigate = useNavigate()

  const [note, setNote] = useState<Note | null>(null)

  useEffect(() => {
    api.notes.getNoteById({ id })
      .then(res => setNote(res.data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const editNote = () => {
    navigate(`/notes/edit/${id}`)
  }

  return note
    ? (
      <div>
        <Flex justify="space-between" align="baseline" gap="small">
          <Title ellipsis={{ rows: 2 }} className="" level={4}>{note.title}</Title>
          <Text italic style={{ flexShrink: 0 }}>
            {dayjs(note.date, 'YYYY-MM-DD').format('DD.MM')}
          </Text>
        </Flex>

        <Text>{note.text}</Text>

        <Button onClick={editNote} className="note-view-modal__edit-button" icon={<IconPencil />} />
      </div>
    ) : (
      <Skeleton />
    )
}