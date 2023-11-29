import { Modal as AntModal, ModalFuncProps } from 'antd';
import './Modal.scss'
import { IconX } from '@tabler/icons-react';

export default function useModal() {
  const [antModal, contextHolder] = AntModal.useModal()

  const modal = {
    info: (props: ModalFuncProps) => {
      antModal.info({
        ...props,
        className: 'karandash-modal',
        closable: true,
        closeIcon: <IconX />,
        maskClosable: true,
        okButtonProps: { hidden: true },
        centered: true,
      })
    },

    confirm: (props: ModalFuncProps) => {
      antModal.confirm({
        ...props,
        className: 'karandash-modal',
        closable: true,
        closeIcon: <IconX />,
        maskClosable: true,
        // okButtonProps: { hidden: true },
        centered: true,
      })
    },
  }

  return { modal, contextHolder }
}