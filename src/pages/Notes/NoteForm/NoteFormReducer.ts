import { Reducer } from "react"

export type NoteFormState = {
  id: number,
  refresher: number,
  touched: boolean,
}

type SetIdAction = {
  type: 'setId',
  payload: number
}

type RefreshAction = {
  type: 'refresh'
}

type TouchAction = {
  type: 'touch'
}

type Action = SetIdAction | RefreshAction | TouchAction

export type NoteFormReducer = Reducer<NoteFormState, Action>

export const noteFormReducer = (state: NoteFormState, action: Action) => {
  switch (action.type) {
    case 'setId':
      return { ...state, id: action.payload, refresher: +state.refresher }
    case 'refresh':
      return { ...state, refresher: +state.refresher }
    case 'touch':
      return { ...state, touched: true }
    default:
      return state
  }
}