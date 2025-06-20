import Container from "../atoms/events/layout/Container";
import CategoryName from "../atoms/events/CategoryName";
import ContainerCards from "../atoms/events/layout/ContainerCards";
import CardEvento from "../atoms/events/CardEvento";
import { eventosDataScience } from "../../utils/Eventos";
import { temas } from "../../utils/Temas";


export default function DataScience() {
  return (
    <Container>
      <CategoryName nome={temas[3].nome} />
      <ContainerCards>
        {eventosDataScience.map((evento) => (
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