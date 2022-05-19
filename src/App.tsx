import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from 'layouts/Header'
import Sidebar from 'layouts/Sidebar'
import Footer from 'layouts/Footer'
import Main from 'pages/Main'
import News from 'pages/News'
import Groups from 'pages/Groups'
import GroupCreate from 'pages/GroupCreate'
import Profile from 'pages/Profile'

import SidebarProvider from 'layouts/SidebarProvider'
import ModalProvider from 'components/Modal/ModalProvider'

import 'styles/index.scss'
import UserProvider from 'components/AuthForm/UserProvider'

const App = () => (
  <BrowserRouter>
    <UserProvider>
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
            <Route path="groups/create" element={<GroupCreate />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </ModalProvider>
    </UserProvider>
  </BrowserRouter>
)

export default App
