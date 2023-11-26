import { Note } from "../../../api/Api";
import useApiClient from "../../../api/useApiClient";
import { Badge, Button, Calendar, Collapse, Space, Typography } from "antd";
import * as dayjs from 'dayjs'
import { useEffect, useMemo, useState } from "react";
import './NotesCalendar.scss'
import { CalendarProps } from "antd/lib";
import { IconChevronRight, IconNotesOff, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography

const { Panel } = Collapse

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

export default function NotesPage() {
  const api = useApiClient()

  const navigate = useNavigate()

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

  const openNote = (id: number) => {
    navigate(`./view/${id}`)
  }

  return (
    <>
      <Button icon={<IconPlus />} onClick={() => navigate('/notes/add')} />
      <div className="notes-calendar-page">
        <Calendar
          mode="month"
          value={value}
          onChange={setValue}
          cellRender={getCellRender(notes)}
          onPanelChange={(date) => {
            fillNotes(date.startOf('month'), date.endOf('month'))
          }}
          className="notes-calendar-page__calendar"
        />
        <Space direction="vertical" size="middle" className="notes-calendar-page__sidebar">
          <Title level={3}>Заметки за {value.format('DD.MM')}</Title>
          {computedNotes.length ? (
            <Collapse bordered={false} accordion className="notes-calendar-page__collapse">
              {computedNotes.map((note, index) => (
                <Panel
                  key={index}
                  header={note.title}
                  className="notes-calendar-page__note-item"
                >
                  <Space direction="vertical">
                    <Text italic>{note.date}</Text>
                    <Paragraph ellipsis={{ rows: 3 }} style={{ marginBottom: 0 }}>{note.text}</Paragraph>
                  </Space>

                  <Button
                    icon={<IconChevronRight />}
                    className="notes-calendar-page__show-note-button"
                    onClick={() => openNote(note.id)}
                  />
                </Panel>
              ))}
            </Collapse>
          ) : (
            <div className="notes-calendar-page__sidebar-placeholder">
              <IconNotesOff style={{ alignSelf: 'center' }} size={40} />
            </div>
          )}
        </Space>
      </div>
    </>
  )
}