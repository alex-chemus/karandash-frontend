import { MonthSummaryDto } from "../../../api/Api"

type BudgetTableColumn = {
  dataIndex: keyof MonthSummaryDto,
  title: string,
}

export const budgetTableColumns: BudgetTableColumn[] = [
  {
    dataIndex: 'month',
    title: 'Месяц',
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