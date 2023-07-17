import { IMenuItem } from '@/shared/IMenuItem'

import BoloDeCaju from '@/assets/menu/bolo-de-caju.png'
import BoloPoteMorango from '@/assets/menu/bolo-de-pote-morango.png'
import BoloPoteCafe from '@/assets/menu/bolo-de-pote-cafe.png'

export const menuNews: IMenuItem[] = [
  {
    id: '49266bfc-e200-42ad-afab-f972e2249490',
    name: 'Bolo de Caju',
    description: 'Bolo com sabor de caju, 100% natural e cremoso.',
    image: BoloDeCaju,
    value: 49.99,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249491',
    name: 'Bolo de Pote - Morango',
    description: 'Bolo de Pote de morango com creme ninho.',
    image: BoloPoteMorango,
    value: 9.9,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249492',
    name: 'Bolo de Pote - Café',
    description: 'Bolo de Pote sabor café com creme avelã.',
    image: BoloPoteCafe,
    value: 12.9,
  },
]
