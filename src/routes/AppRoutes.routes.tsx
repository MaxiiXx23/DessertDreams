import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'
import { Order } from '@/pages/Order'
import { AboutMe } from '@/pages/AboutMe'
import { Contact } from '@/pages/Contact'

import { PageNotFound } from '@/pages/PageNotFound'

import { MenuLayout } from '@/layouts/MenuLayout'
import { News } from '@/pages/News'
import { MenuCakes } from '@/pages/MenuCakes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/encomendas" element={<Order />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
      <Route path="/" element={<MenuLayout />}>
        <Route path="novidades" element={<News />} />
        <Route path="bolos" element={<MenuCakes />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
