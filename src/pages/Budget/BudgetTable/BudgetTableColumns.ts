import { ReactNode } from "react"
import { MonthSummaryDto } from "../../../api/Api"
import { getMonthByNumber } from "../../../shared/helpers/months-helper"

type BudgetTableColumn = {
  dataIndex: keyof MonthSummaryDto,
  title: string,
  render?: (value: number, record: MonthSummaryDto, index: number) => ReactNode
}

export const budgetTableColumns: BudgetTableColumn[] = [
  {
    dataIndex: 'month',
    title: 'Месяц',
    render: (value) => getMonthByNumber(value)
  },
  {
    dataIndex: 'income',
    title: 'Доход',
  },
  {
    dataIndex: 'expense',
    title: 'Расход'
  },
  {
    dataIndex: 'diff',
    title: 'Разница'
  }
]