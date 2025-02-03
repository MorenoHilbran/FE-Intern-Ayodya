import { useState } from 'react'
import Sidebar from './components/sidebar'
import Headerdashboard from './components/headerdashboard'
import CardDashboard from './components/carddashboard'
import TablePembayaran from './components/tablepembayaran'


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
      <Headerdashboard />
      <CardDashboard />
      <TablePembayaran />
      </div>

    </div>
  )
}

export default App

