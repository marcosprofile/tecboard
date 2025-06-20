import CategoryName from "../atoms/events/CategoryName";
import CardEvento from "../atoms/events/CardEvento";
import Container from "../atoms/events/layout/Container";
import ContainerCards from "../atoms/events/layout/ContainerCards";


export default function Backend() {
  return (
    <Container>
      <CategoryName nome="Back-end" />
      <ContainerCards>
        <CardEvento
          src="evento-1-backend.png"
          tag="Back-end"
          data="20/05/2025"
          title="Back-End Masters"
          description="Performance e inovação no back-end, conectando especialistas e entusiastas."
        />
        <CardEvento
          src="evento-2-backend.png"
          tag="Back-end"
          data="20/05/2025"
          title="Code to Core"
          description="Workshop que explora a essência do back-end, escalabilidade e boas práticas."
        />
        <CardEvento
          src="evento-3-backend.png"
          tag="Back-end"
          data="20/05/2025"
          title="Server Side Summit"
          description="Evento dedicado a tecnologias e estratégias para desenvolvimento back-end."
        />
      </ContainerCards>
    </Container>
  )
}
