import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";
import { eventosCloud } from "../../utils/Eventos";


export default function Cloud() {
  return (
    <Container>
      <CategoryName nome="Cloud" />
      <ContainerCards>
        {eventosCloud.map((evento) => (
          <CardEvento
            key={evento.id}
            src={evento.src}
            tag={evento.tag}
            data={evento.data}
            title={evento.title}
            description={evento.description}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}