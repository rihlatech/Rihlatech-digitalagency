import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Navbar />
      <main className="bg-surface pb-20 pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
