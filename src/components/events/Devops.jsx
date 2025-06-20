import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";


export default function Devops() {
  return (
    <Container>
      <CategoryName nome="Devops" />
      <ContainerCards>
        <CardEvento
          src="evento-1-devops.png"
          tag="Devops"
          data="20/05/2025"
          title="DevOps Evolution"
          description="Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações."
        />
      </ContainerCards>
    </Container>
  )
}
