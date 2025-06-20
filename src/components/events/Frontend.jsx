import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";


export default function Frontend() {
  return (
    <Container>
      <CategoryName nome="Front-end" />
      <ContainerCards>
        <CardEvento
          src="evento-1-frontend.png"
          tag="Front-end"
          data="20/05/2025"
          title="Mulheres no Front"
          description="Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
        />
        <CardEvento
          src="evento-2-frontend.png"
          tag="Front-end"
          data="20/05/2025"
          title="Mulheres no Front"
          description="Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
        />
      </ContainerCards>
    </Container>
  )
}
