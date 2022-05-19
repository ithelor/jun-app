import React from 'react'

import { ModalContext } from 'contexts/ModalContext'
import useModal from 'hooks/useModal'

interface ISidebarProvider {
  children: React.ReactElement | React.ReactElement[]
}

const ModalProvider = (props: ISidebarProvider) => {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
