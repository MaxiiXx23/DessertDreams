import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function DefaultLayout() {
  const location = useLocation()
  const color = location.pathname !== '/' ? 'black' : 'white'
  return (
    <>
      {location.pathname !== '/' ? <Header colorMenus={color} /> : null}
      <Outlet />

      <Footer />
    </>
  )
}
