import { Reducer } from "react"
import { AddSingularFinancialOperationDto, SingularFinancialOperation } from "../../../../api/Api"

export type FinancialOperationMetaData = {
  key: number,
  exists: boolean
}

export type NoteFinancialOperation = AddSingularFinancialOperationDto & FinancialOperationMetaData

type FillAction = {
  type: 'fill',
  payload: SingularFinancialOperation[]
}

type AddAction = {
  type: 'add',
  payload: AddSingularFinancialOperationDto
}

type DeleteAction = {
  type: 'delete',
  payload: number
}

type Action = AddAction | DeleteAction | FillAction

export type NoteOperationsReducer = Reducer<NoteFinancialOperation[], Action>

export const noteOperationsReducer = (state: NoteFinancialOperation[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.payload, key: Date.now(), exists: false }]
    case 'delete':
      return state.filter(operation => operation.key !== action.payload)
    case 'fill':
      return action.payload.map((operation) => {
        return { ...operation, key: operation.id, exists: true }
      })
    default: 
      return state
  }
}