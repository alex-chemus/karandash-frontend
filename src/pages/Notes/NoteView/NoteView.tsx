import { Flex, Skeleton, Typography } from "antd"
import useApiClient from "../../../api/useApiClient"
import { useEffect, useState } from "react"
import { Note } from "../../../api/Api"
import * as dayjs from 'dayjs'
import { useParams } from "react-router-dom"
import './NoteView.scss'

const { Title, Text } = Typography

export default function NoteView() {
  const api = useApiClient()

  const { id } = useParams()

  const [note, setNote] = useState<Note | null>(null)

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
    </div>
  ) : <Skeleton />
}