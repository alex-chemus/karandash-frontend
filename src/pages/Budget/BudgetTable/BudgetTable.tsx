import { Button, Flex, Table } from "antd"
import ActionButtons, { Action } from "../../../shared/components/ActionButtons/ActionButtons"
import { IconPlus } from "@tabler/icons-react"
import { useEffect, useMemo, useState } from "react"
import { MonthSummaryDto } from "../../../api/Api"
import useApiClient from "../../../api/useApiClient"
import * as dayjs from 'dayjs'
import { budgetTableColumns } from "./BudgetTableColumns"
import SectionSkeleton from "../../../shared/components/SectionSkeleton/SectionSkeleton"
import './BudgetTable.scss'
import Sizes from "../../../shared/helpers/Sizes"
import { useNavigate } from "react-router-dom"

export default function BudgetTable() {
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
    api.budget.getPlainYearSummary({ year: dayjs().year() })
      .then(res => setDataSource(res.data))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex gap={Sizes.lg} vertical={true}>
      <ActionButtons actions={actions} placement="bottomLeft">
        <Button icon={<IconPlus />} />
      </ActionButtons>

      <div className="budget-table__table-wrapper">
        {dataSource ? (
          <Table dataSource={dataSource} columns={budgetTableColumns} pagination={false} />
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </Flex>
  )
}