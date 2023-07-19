import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ShoppingCart } from '@phosphor-icons/react'

import { Container, Count } from './styles'

import { CartState } from '@/shared/redux/Cart/store'

export function Cart() {
  const amount = useSelector((state: CartState) => state.amount)
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    setCount(amount)
  }, [amount, count])

  return (
    <Container>
      <ShoppingCart size={24} />
      <Count>{count}</Count>
    </Container>
  )
}
