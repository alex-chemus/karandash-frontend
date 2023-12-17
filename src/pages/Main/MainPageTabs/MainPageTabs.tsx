import { IconBusinessplan, IconInfoCircle, IconLogout2, IconNotes, IconTargetArrow } from "@tabler/icons-react"
import { Button, Space } from "antd"
import { ReactNode, useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './MainPageTabs.scss'
import useModal from "../../../shared/components/Modal/useModal"

type NavTab = {
  icon: ReactNode,
  title: string,
  active: boolean,
  linkTo: string
}

type Props = {
  children: ReactNode
}

export default function MainPageTabs({ children }: Props) {
  const location = useLocation()

  const navigate = useNavigate()

  const { modal, contextHolder } = useModal()

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
      active: location.pathname === '/financial-operations',
      linkTo: '/financial-operations'
    },
    {
      icon: <IconTargetArrow />,
      title: 'Цели',
      active: location.pathname === '/goals',
      linkTo: '/goals'
    },
    {
      icon: <IconInfoCircle />,
      title: 'Справка',
      active: location.pathname === '/ref',
      linkTo: '/ref'
    }
  ], [location])

  useEffect(() => {
    if (navTabs.some(tab => tab.active)) {
      document.title = navTabs.find(tab => tab.active)!.title
    }
  }, [navTabs])

  const handleConfirmLogout = () => {
    modal.confirm({
      title: "Вы уверены, что хотите выйти?",
      onOk: () => {
        localStorage.removeItem("token")
        navigate("/login")
      }
    })
  }

  return (
    <div className="main-page-wrapper">
      <div className="main-page-tabs">
        {navTabs.map(tab => (
          <Button
            className="main-page-tabs__button"
            onClick={() => navigate(tab.linkTo)}
            key={tab.title}
            type={tab.active ? 'primary' : 'text'}
          >
            <Space>
              {tab.icon}
              {tab.title}
            </Space>
          </Button>
        ))}

        <Button
          className="main-page-tabs__button main-page-tabs__button_logout"
          type="primary"
          onClick={handleConfirmLogout}
        >
          {contextHolder}
          <Space>
            <IconLogout2 />
            Выйти
          </Space>
        </Button>
      </div>
      <div className="nav-sidebar-main-content">
        {children}
      </div>
    </div>
  )
}