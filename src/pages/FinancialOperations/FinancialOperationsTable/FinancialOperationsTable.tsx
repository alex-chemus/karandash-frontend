import { Button, Flex, Table } from "antd"
import ActionButtons, { Action } from "../../../shared/components/ActionButtons/ActionButtons"
import { IconListTree, IconPlus } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { MonthSummaryDto } from "../../../api/Api"
import useApiClient from "../../../api/useApiClient"
import * as dayjs from 'dayjs'
import { financialOperationsTableColumns } from "./FinancialOperationsTableColumns"
import SectionSkeleton from "../../../shared/components/SectionSkeleton/SectionSkeleton"
import './FinancialOperationsTable.scss'
import Sizes from "../../../shared/helpers/Sizes"
import { useNavigate } from "react-router-dom"
import getMonthOperationsTable from "./MonthOperationsTable/MonthOperationsTable"

export default function FinancialOperationsTable() {
  const api = useApiClient()

  const navigate = useNavigate()

  const actions = useMemo<Action[]>(() => [
    {
      id: 1,
      title: 'Добавить единичную операцию',
      onClick: () => {
        navigate('add-singular')
      }
    },
    {
      id: 2,
      title: 'Добавить регулярную операцию',
      onClick: () => {
        navigate('add-regular')
      }
    }
  ], [navigate])

  const [dataSource, setDataSource] = useState<MonthSummaryDto[] | null>(null)

  useEffect(() => {
    api.financialOperations.getPlainYearSummary({ year: dayjs().year() })
      .then(res => setDataSource(res.data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex gap={Sizes.lg} vertical={true}>
      <ActionButtons actions={actions} placement="bottomLeft">
        <Button icon={<IconPlus />} />
      </ActionButtons>

      <div className="financial-operations-table-page__table-wrapper">
        {dataSource ? (
          <Table
            className="financial-operations-table-page__table"
            dataSource={dataSource.map(item => ({ ...item, key: item.month }))}
            columns={financialOperationsTableColumns}
            pagination={false}
            expandable={{
              expandedRowRender: getMonthOperationsTable,
              expandRowByClick: true,
              expandIcon: (record) => {
                return record.expanded ? (
                  <Button
                    className="financial-operations-table-page__list-tree-button"
                    type="text"
                    icon={<IconListTree />}
                    onClick={(e) => record.onExpand(record.record, e)}
                  />
                ) : null
              }
            }}
          />
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </Flex>
  )
}