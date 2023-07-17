import { IMenuItem } from '@/shared/IMenuItem'

import BoloDeCaju from '@/assets/menu/bolo-de-caju.png'
import BoloChocolateMorango from '@/assets/menu/bolo-de-choco-morango.png'
import BoloAmendoim from '@/assets/menu/bolo-de-amendoim.png'
import BoloOreo from '@/assets/menu/bolo-oreo.png'
import BoloChocolate from '@/assets/menu/bolo-de-chocolate.png'

export const menuCakes: IMenuItem[] = [
  {
    id: '49266bfc-e200-42ad-afab-f972e2249490',
    name: 'Bolo de Caju',
    description: 'Bolo com sabor de caju, 100% natural e cremoso.',
    image: BoloDeCaju,
    value: 49.99,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249491',
    name: 'Bolo de chocolate com morango',
    description: 'Bolo de chocolate com morango com creme flocos.',
    image: BoloChocolateMorango,
    value: 57.9,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249492',
    name: 'Bolo de amendoim',
    description: 'Bolo sabor amendoim com cobertura de Nutella.',
    image: BoloAmendoim,
    value: 69.7,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249493',
    name: 'Bolo Oreo',
    description: 'Bolo com sabor chocolate e Oreo.',
    image: BoloOreo,
    value: 54.49,
  },
  {
    id: '49266bfc-e200-42ad-afab-f972e2249494',
    name: 'Bolo de chocolate tradicional',
    description: 'Bolo sabor chocolate tradicional 100% cacau.',
    image: BoloChocolate,
    value: 54.49,
  },
]
