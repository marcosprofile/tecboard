import CategoryName from "../atoms/events/CategoryName";
import CardEvento from "../atoms/events/CardEvento";
import Container from "../atoms/events/layout/Container";
import ContainerCards from "../atoms/events/layout/ContainerCards";

import { temas } from "../../utils/Temas";
import { eventos } from "../../utils/Eventos";


export default function Backend() {
  return (
    <Container>
      <CategoryName nome={temas[2].nome} />
      <ContainerCards>
        {eventos[0].backend.map((evento) => (
          <CardEvento
            key={evento.id}
            src={evento.capa}
            tag={evento.tag}
            data={evento.data}
            title={evento.titulo}
            description={evento.descricao}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}
