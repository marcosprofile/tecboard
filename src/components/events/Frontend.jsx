import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";

import { eventosFrontend } from "../../utils/Eventos";


export default function Frontend() {
  return (
    <Container>
      <CategoryName nome="Front-end" />
      <ContainerCards>
        {eventosFrontend.map((evento) => (
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
