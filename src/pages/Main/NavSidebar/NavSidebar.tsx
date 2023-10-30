import { IconBusinessplan, IconNotes } from "@tabler/icons-react"
import { Button, Space } from "antd"
import { ReactNode, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './NavSidebar.scss'

type NavTab = {
  icon: ReactNode,
  title: string,
  active: boolean,
  linkTo: string
}

type Props = {
  children: ReactNode
}

export default function NavSidebar({ children }: Props) {
  const location = useLocation()

  const navigate = useNavigate()

  const navTabs = useMemo<NavTab[]>(() => [
    {
      icon: <IconNotes />,
      title: 'Заметки',
      active: location.pathname === '/notes',
      linkTo: '/notes'
    },
    {
      icon: <IconBusinessplan />,
      title: 'Финансы',
      active: location.pathname === '/budget',
      linkTo: '/budget'
    }
  ], [location])

  return (
    <div className="nav-sidebar-wrapper">
      <div className="nav-sidebar">
        {navTabs.map(tab => (
          <Button
            className="nav-sidebar-button"
            onClick={() => navigate(tab.linkTo)}
            key={tab.title}
            type={tab.active ? 'primary' : 'default'}
          >
            <Space>
              {tab.icon}
              {tab.title}
            </Space>
          </Button>
        ))}
      </div>
      <div className="nav-sidebar-main-content">
        {children}
      </div>
    </div>
  )
}