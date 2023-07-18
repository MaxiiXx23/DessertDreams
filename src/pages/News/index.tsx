import { CardProduct } from '@/components/CardProduct'
import { ContainerMain, ContainerSection, List, Title } from './styles'

import { menuNews } from '@/database/menuNews'
import { formatValue } from '@/utils/formatValue'

export function News() {
  return (
    <ContainerMain>
      <Title>
        Cardápio - <span>Novidades</span>
      </Title>
      <ContainerSection>
        <List>
          {menuNews.map((item) => {
            const value = formatValue(item.value)
            return (
              <CardProduct
                key={item.id}
                id={item.id}
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
