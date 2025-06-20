import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";


export default function Cloud() {
  return (
    <Container>
      <CategoryName nome="Cloud" />
      <ContainerCards>
        <CardEvento
          src="evento-1-cloud.png"
          tag="Cloud"
          data="20/05/2025"
          title="SkyTech Summit"
          description="Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura."
        />
        <CardEvento
          src="evento-2-cloud.png"
          tag="Cloud"
          data="20/05/2025"
          title="Mundo Cloud"
          description="Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud."
        />
      </ContainerCards>
    </Container>
  )
}