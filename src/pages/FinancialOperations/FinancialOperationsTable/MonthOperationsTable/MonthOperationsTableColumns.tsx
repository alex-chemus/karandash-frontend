import { OperationsListItem } from "../../../../api/Api"
import { Checkbox, TableProps } from "antd"

export const monthOperationsTableColumns: TableProps<OperationsListItem>['columns'] = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'Название'
  },
  {
    key: 'sum',
    dataIndex: 'sum',
    title: 'Сумма',
  },
  {
    key: 'isIncome',
    dataIndex: 'isIncome',
    title: 'Доход',
    render(value: OperationsListItem['isIncome']) {
      console.log(value)
      return (
        <Checkbox
          className="month-operations-table__income-checkbox"
          checked={value}
        />
      )
    }
  },
  {
    key: 'operationType',
    dataIndex: 'operationType',
    title: 'Тип операции',
    render(value: OperationsListItem['operationType']) {
      return value === 'regular' ? 'Регулярная' : 'Разовая'
    }
  }
]