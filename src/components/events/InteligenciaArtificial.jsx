import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";


export default function InteligenciaArtificial() {
  return (
    <Container>
      <CategoryName nome="Inteligência Artificial" />
      <ContainerCards>
        <CardEvento
          src="evento-1-ia.png"
          tag="Inteligência Artificial"
          data="20/05/2025"
          title="Deep Learning Days"
          description="Imersão sobre IA, redes neurais e aprendizado profundo."
        />
        <CardEvento
          src="evento-2-ia.png"
          tag="Inteligência Artificial"
          data="20/05/2025"
          title="IA na palma da mão"
          description="Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis."
        />
        <CardEvento
          src="evento-3-ia.png"
          tag="Inteligência Artificial"
          data="20/05/2025"
          title="IA Segura e Acessível"
          description="Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial."
        />
      </ContainerCards>
    </Container>
  )
}