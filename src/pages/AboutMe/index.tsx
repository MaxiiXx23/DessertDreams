import ImageFernanda from '@/assets/Fernanda.svg'
import {
  ContainerFooter,
  ContainerInfos,
  ContainerMain,
  ContainerSection,
  ContentTexts,
  Title,
  TitleFooter,
} from './styles'

export function AboutMe() {
  return (
    <ContainerMain>
      <Title>
        Sobre <span>mim</span>
      </Title>
      <ContainerSection>
        <img
          src={ImageFernanda}
          alt="Imagem Confeitera Fernanda"
          title="Confeitera Fernanda"
        />
        <ContainerInfos>
          <ContentTexts>
            <p>
              Meu nome é Fernanda e a confeitaria é minha paixão. Desde criança,
              eu ficava fascinada com a mágica de transformar simples
              ingredientes em sobremesas deliciosas. Há mais de dois anos, me
              tornei uma confeiteira profissional e cada dia que passa sinto-me
              mais realizada. A cada bolo que decoro, cada torta que assa no
              forno, sinto que estou dando vida a uma obra de arte comestível.
            </p>
            <p>
              Ver o sorriso nos rostos das pessoas quando provam meus doces é a
              melhor recompensa que eu poderia pedir. A confeitaria é minha
              forma de espalhar felicidade, e estou grata por ter encontrado
              minha verdadeira paixão na criação de sobremesas que adoçam a vida
              das pessoas.
            </p>
          </ContentTexts>
          <ContainerFooter>
            <TitleFooter>
              Feitos com total <span>amor</span>
            </TitleFooter>
            <p>
              Meus ingredientes são 100% selecionados a dedo e todos os produtos
              são feitos a mão. Sempre trago o melhor da arte da confeitaria a
              cada produto e receita feitos por mim.
            </p>
          </ContainerFooter>
        </ContainerInfos>
      </ContainerSection>
    </ContainerMain>
  )
}
