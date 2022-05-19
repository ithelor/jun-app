import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from 'layouts/Header'
import Sidebar from 'layouts/Sidebar'
import Footer from 'layouts/Footer'
import Main from 'pages/Main'
import News from 'pages/News'
import Groups from 'pages/Groups'
import Profile from 'pages/Profile'

import SidebarProvider from 'layouts/SidebarProvider'
import ModalProvider from 'components/Modal/ModalProvider'

import 'styles/index.scss'

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
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </ModalProvider>
  </BrowserRouter>
)

export default App
