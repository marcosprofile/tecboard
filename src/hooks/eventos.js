import { useState } from "react";
import { eventos as eventosMock } from "../utils/Eventos";

export default function useEventos() {
  function getTemaKey(id) {
    const temas = {
      0: 'frontend',
      1: 'backend',
      2: 'devops',
      3: 'ia',
      4: 'dataScience',
      5: 'cloud'
    };
  
    return temas[id];
  }
  
  const [eventos, setEventos] = useState(eventosMock || {});

  function adicionarEvento(evento) {
    const temaKey = getTemaKey(evento.idTema);

    setEventos((prevEventos) => {
      const novosEventos = {
        ...prevEventos,
        [temaKey]: [...(prevEventos[temaKey] || []), evento]
      }
      
      return novosEventos
    });
  }

  return {
    eventos,
    adicionarEvento
  };
}
