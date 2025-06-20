import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";

import { temas } from "../../utils/Temas";
import { eventos } from "../../utils/Eventos";


export default function Devops() {
  return (
    <Container>
      <CategoryName nome={temas[4].nome} />
      <ContainerCards>
        {eventos[0].devops.map((evento) => (
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
