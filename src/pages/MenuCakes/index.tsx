import { CardProduct } from '@/components/CardProduct'
import { ContainerMain, ContainerSection, List, Title } from './styles'

import { menuCakes } from '@/database/menuCakes'
import { formatValue } from '@/utils/formatValue'

export function MenuCakes() {
  return (
    <ContainerMain>
      <Title>
        Cardápio - <span>Bolos</span>
      </Title>
      <ContainerSection>
        <List>
          {menuCakes.map((item) => {
            const value = formatValue(item.value)
            return (
              <CardProduct
                key={item.id}
                pathImage={item.image}
                name={item.name}
                description={item.description}
                value={value}
              />
            )
          })}
        </List>
      </ContainerSection>
    </ContainerMain>
  )
}
