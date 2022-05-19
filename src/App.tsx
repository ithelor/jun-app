import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from 'layouts/Header'
import Sidebar from 'layouts/Sidebar'
import Footer from 'layouts/Footer'
import Main from 'pages/Main'
import News from 'pages/News'

import ModalProvider from 'components/Modal/ModalProvider'
import SidebarProvider from 'layouts/SidebarProvider'

import 'styles/index.scss'
import Groups from 'pages/Groups'

const App = () => (
  <BrowserRouter>
    <ModalProvider>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="groups" element={<Groups />} />
        </Routes>
      </main>

      <Footer />
    </ModalProvider>
  </BrowserRouter>
)

export default App

