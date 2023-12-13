import { ReactNode } from "react"
import { MonthSummaryDto } from "../../../api/Api"
import { getMonthByNumber } from "../../../shared/helpers/months-helpers"

type FinancialOperationsTableColumn = {
  dataIndex: keyof MonthSummaryDto,
  key: keyof MonthSummaryDto,
  title: string,
  render?: (value: number, record: MonthSummaryDto, index: number) => ReactNode
}

export const financialOperationsTableColumns: FinancialOperationsTableColumn[] = [
  {
    key: 'month',
    dataIndex: 'month',
    title: 'Месяц',
    render: (value) => getMonthByNumber(value)
  },
  {
    key: 'income',
    dataIndex: 'income',
    title: 'Доход',
  },
  {
    key: 'expense',
    dataIndex: 'expense',
    title: 'Расход'
  },
  {
    key: 'diff',
    dataIndex: 'diff',
    title: 'Разница'
  }
]