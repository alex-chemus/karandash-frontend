import { Popover, TooltipProps, Button } from "antd";
import { ReactNode } from "react";
import './ActionButtons.scss'

export type Action = {
  id: number,
  title: string,
  onClick: (id: number) => void 
}

type Props = {
  actions: Action[],
  children: ReactNode
} & Exclude<TooltipProps, 'trigger'>

const getContent = (actions: Action[]) => (
  <div className="action-buttons__content-wrapper">
    {actions.map(action => (
      <Button onClick={() => action.onClick(action.id)} className="action-buttons__button">
        {action.title}
      </Button>
    ))}
  </div>
)

export default function ActionButtons({ actions, children, ...tooltipProps }: Props) {
  return (
    <Popover {...tooltipProps} trigger={'click'} content={() => getContent(actions)}>
      {children}
    </Popover>
  )
}