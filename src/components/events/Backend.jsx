import CategoryName from "../atoms/events/CategoryName";
import CardEvento from "../atoms/events/CardEvento";
import Container from "../atoms/events/layout/Container";
import ContainerCards from "../atoms/events/layout/ContainerCards";

import { eventosBackend } from "../../utils/Eventos";


export default function Backend() {
  return (
    <Container>
      <CategoryName nome="Back-end" />
      <ContainerCards>
        {eventosBackend.map((evento) => (
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
