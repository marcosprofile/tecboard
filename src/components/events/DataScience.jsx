import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";


export default function DataScience() {
  return (
    <Container>
      <CategoryName nome="Data Science" />
      <ContainerCards>
        <CardEvento
          src="evento-1-data-science.png"
          tag="Data Science"
          data="20/05/2025"
          title="Data Pulse"
          description="Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados."
        />
        <CardEvento
          src="evento-2-data-science.png"
          tag="Data Science"
          data="20/05/2025"
          title="Data Revolution"
          description="Palestra sobre últimas tendências em big data, análise e inteligência empresarial."
        />
        <CardEvento
          src="evento-3-data-science.png"
          tag="Data Science"
          data="20/05/2025"
          title="Driven by Data"
          description="Minicurso sobre como dados impulsionam decisões e inovações para o futuro."
        />
        <CardEvento
          src="evento-4-data-science.png"
          tag="Data Science"
          data="20/05/2025"
          title="SQL Summit"
          description="Ciclo de palestras com especialistas do universo dos bancos de dados SQL."
        />
      </ContainerCards>
    </Container>
  )
}