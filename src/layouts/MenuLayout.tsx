import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function MenuLayout() {
  return (
    <>
      <Header colorMenus="black" />
      <Outlet />
      <Footer />
    </>
  )
}
