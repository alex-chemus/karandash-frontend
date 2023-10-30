import { Note } from "../../../api/Api";
import useApiClient from "../../../api/useApiClient";
import { Badge, Button, Calendar, List, ListProps, Space, Typography } from "antd";
import * as dayjs from 'dayjs'
import { useEffect, useMemo, useState } from "react";
import './NotesCalendar.scss'
import { CalendarProps } from "antd/lib";
import { IconNotesOff } from "@tabler/icons-react";
import useModal from "../../../shared/components/Modal/useModal";
import NoteViewModal from "./NoteViewModal/NoteViewModal";

const { Title } = Typography

function getCellRender(notes: Note[] | null): CalendarProps<dayjs.Dayjs>['cellRender'] {  
  return (current) => {
    const date = current.format('YYYY-MM-DD')

    if (!notes) return null

    const notesCount = notes.filter(note => note.date === date).length

    return notesCount
      ? <Badge count={notesCount} color='#FD7014' />
      : null
  }
}

const getRenderListItem = (onClick: (id: number) => void): ListProps<Note>['renderItem'] => {
  return (note) => (
    <Button className="notes-calendar-list-item" onClick={() => onClick(note.id)}>
      <span>{note.title}</span>
    </Button>
  )
}

export default function NotesPage() {
  const api = useApiClient()

  const { modal, contextHolder } = useModal()

  const [value, setValue] = useState<dayjs.Dayjs>(dayjs())
  
  const [notes, setNotes] = useState<Note[] | null>(null)

  const fillNotes = async (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    const res = await api.notes.getNotesInDateRange({
      start: start.format('YYYY-MM-DD'),
      end: end.format('YYYY-MM-DD')
    })
    setNotes(res.data)
  }

  useEffect(() => {
    fillNotes(value.startOf('month'), value.endOf('month'))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const computedNotes = useMemo<Note[]>(() => {
    return notes
      ? notes.filter(note => note.date === value.format('YYYY-MM-DD'))
      : []
  }, [notes, value])

  const openModal = (id: number) => {
    modal({
      content: <NoteViewModal id={id} />
    })
  }

  return (
    <div className="notes-calendar-wrapper">
      <Calendar
        mode="month"
        value={value}
        onChange={setValue}
        cellRender={getCellRender(notes)}
        onPanelChange={(date) => {
          fillNotes(date.startOf('month'), date.endOf('month'))
        }}
        className="notes-calendar"
      />
      <Space direction="vertical" size="middle" className="notes-calendar-list">
        <Title level={3}>Заметки за {value.format('DD.MM')}</Title>
        {computedNotes.length ? (
          <List
            dataSource={computedNotes}
            renderItem={getRenderListItem(openModal)}
          />
        ) : (
          <div className="notes-calendar-list-placeholder">
            <IconNotesOff style={{ alignSelf: 'center' }} size={40} />
          </div>
        )}
      </Space>
      {contextHolder}
    </div>
  )
}