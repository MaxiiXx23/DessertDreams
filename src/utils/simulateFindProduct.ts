import { menuCakes } from '@/database/menuCakes'

export function simulateFindProduct(id: string) {
  const product = menuCakes.find((item) => item.id === id)

  return product
}
