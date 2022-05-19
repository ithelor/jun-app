import React from 'react'
import { AnimatePresence } from 'framer-motion'

import Modal from 'components/Modal'

import { ModalContext } from 'contexts/ModalContext'
import AuthForm from 'components/AuthForm'

interface ISidebarProvider {
  children: React.ReactElement | React.ReactElement[]
}

const ModalProvider = (props: ISidebarProvider) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {isModalOpen && (
          <Modal handleClose={() => setIsModalOpen(false)}>
            <AuthForm />
          </Modal>
        )}
      </AnimatePresence>

      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
