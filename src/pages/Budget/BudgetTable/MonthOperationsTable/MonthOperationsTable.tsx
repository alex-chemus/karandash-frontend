import { useEffect, useState } from "react"
import { MonthSummaryDto, OperationsListItem } from "../../../../api/Api"
import { Skeleton, Table } from "antd"
import useApiClient from "../../../../api/useApiClient"
import * as dayjs from 'dayjs'
import { monthOperationsTableColumns } from "./MonthOperationsTableColumns"
import { ExpandableConfig } from "antd/es/table/interface"
import './MonthOperationsTable.scss'

type Props = {
  month: number
}

// eslint-disable-next-line
function MonthOperationsTable({ month }: Props) {
  const api = useApiClient()

  const [dataSource, setDataSource] = useState<OperationsListItem[] | null>()

  useEffect(() => {
    api.financialOperations.getAllOperationsInMonth({ year: dayjs().year(), month })
      .then(res => setDataSource(res.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return dataSource ? (
    <Table
      className="month-operations-table"
      columns={monthOperationsTableColumns}
      dataSource={dataSource}
      pagination={false}
    />
  ) : (
    <Skeleton
      className="month-operations-table__skeleton"
      paragraph={{ rows: 2 }}
      loading
      title={false}
    />
  )
}

const getMonthOperationsTable: ExpandableConfig<MonthSummaryDto>["expandedRowRender"] = (record) => {
  return <MonthOperationsTable month={record.month} />
}

export default getMonthOperationsTable
