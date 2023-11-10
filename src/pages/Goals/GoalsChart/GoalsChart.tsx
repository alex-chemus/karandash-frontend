import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, Line, XAxis, YAxis, ComposedChart, Area, Dot, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import useApiClient from "../../../api/useApiClient";
import { Goal, MonthSummaryDto } from "../../../api/Api";
import * as dayjs from 'dayjs'
import { Button, Flex, Tooltip } from "antd";
import Sizes from "../../../shared/helpers/Sizes";
import { IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import themeStore from "../../../stores/ThemeStore/ThemeStore";
import './GoalsChart.scss'
import { months } from "../../../shared/helpers/months-helper";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDot = (props: any, title: string) => {
  if (props.payload.name === 'Декабрь') {
    return (
      <Tooltip open={true} title={title} placement="right">
        <Dot {...props} />
      </Tooltip>
    )
  }

  return <Dot {...props} />
}

export default function GoalsChart() {
  const navigate = useNavigate()

  const api = useApiClient()

  const [goals, setGoals] = useState<Goal[] | null>(null)

  const [aggregatedBudget, setAggregatedBudget] = useState<MonthSummaryDto[] | null>(null)

  useEffect(() => {
    const year = dayjs().year()

    api.goals.getGoals({ year })
      .then(res => setGoals(res.data))

    api.budget.getAggregatedYearSummary({ year })
      .then(res => setAggregatedBudget(res.data))
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const chartData = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = []

    if (goals === null || aggregatedBudget === null) return null

    months.forEach((month, i) => {
      const monthSummary = aggregatedBudget.find(item => item.month === i+1)!

      data.push({
        name: month,
        ...goals.reduce((acc, goal) => {
          acc[goal.name] = goal.sum
          return acc
        }, {} as any), // eslint-disable-line @typescript-eslint/no-explicit-any
        'Финансы': monthSummary.diff
      })
    })

    return data
  }, [goals, aggregatedBudget])

  return (
    <Flex gap={Sizes.lg} vertical={true} className="goals-chart">
      <Tooltip title="Добавить цель" placement="right">
        <Button icon={<IconPlus />} onClick={() => navigate('add')} />
      </Tooltip>
      <ResponsiveContainer height={600} width='80%' style={{ alignSelf: 'center' }}>
        <ComposedChart data={chartData}>
          <CartesianGrid horizontal={false} />
          <XAxis dataKey={'name'} />
          <YAxis />
          <RechartsTooltip
            contentStyle={{ backgroundColor: themeStore.theme.token?.colorBgElevated }}
            itemStyle={{ color: themeStore.theme.token?.colorTextBase }}
            labelStyle={{ color: themeStore.theme.token?.colorPrimary }}
          />
          {goals && goals.map(goal => {
            return (
              <Line
                dataKey={goal.name}
                stroke={themeStore.theme.token?.colorTextBase}
                label={goal.name}
                dot={props => getDot(props, goal.name)}
              />
            )
          })}
          {aggregatedBudget && (
            <Area
              dataKey={'Финансы'}
              fill={themeStore.theme.token?.colorPrimary}
              stroke={themeStore.theme.token?.colorPrimary}
              dot={props => getDot(props, 'Финансы')}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </Flex>
  )
}