import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";

import { eventosDevops } from "../../utils/Eventos";


export default function Devops() {
  return (
    <Container>
      <CategoryName nome="Devops" />
      <ContainerCards>
        {eventosDevops.map((evento) => (
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
