import { Typography, Tabs, TabsProps } from "antd";
import './NoteForm.scss'
import { useMemo, useReducer } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NoteFormMain from "./NoteFormMain/NoteFormMain";
import NoteFormOperations from "./NoteFormOperations/NoteFormOperations";
import { NoteFormReducer, NoteFormState, noteFormReducer } from "./NoteFormReducer";

const { Title } = Typography

export type FormMode = 'add' | 'edit'

type Props = {
  mode: FormMode
}

export default function NoteForm({ mode }: Props) {
  const navigate = useNavigate()

  const [formReducer, dispatch] = useReducer<NoteFormReducer>(noteFormReducer, { 
    refresher: 0,
    id: 0,
  } as NoteFormState)

  const items = useMemo<TabsProps['items']>(() => {
    return [
      {
        key: '1',
        label: 'Заметка',
        children: <NoteFormMain mode={mode} onSubmit={id => dispatch({ type: 'setId', payload: id })} />
      },
      {
        key: '2',
        label: 'Финансы',
        children: (
          <NoteFormOperations
            mode={mode}
            formState={formReducer}
          />
        )
      }
    ]
  }, [mode, formReducer])

  const routes = useMemo(() => {
    return [
      {
        key: '1',
        route: 'main'
      },
      {
        key: '2',
        route: 'operations'
      }
    ]
  }, [])

  return (
    <div className="note-form">
      <Title level={2} className="note-form__title">
        {mode === 'add' ? 'Создать заметку' : 'Редактировать заметку'}
      </Title>
      <Routes>
        <Route path="/" element={<Navigate to={`./${routes[0].route}`} />} />
        {routes.map(({ route, key }) => (
          <Route key={key} path={route} element={
            <Tabs items={items} activeKey={key} onChange={(key) => navigate(`./${routes.find(r => r.key === key)?.route}`)} />
          } />
        ))}
      </Routes>
    </div>
  )
}