import { temas } from "./Temas"

export const eventos = [
  {
    frontend: [
      {
        id: 1,
        capa: "evento-1-frontend.png",
        tag: temas[1].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Mulheres no Front",
        descricao: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
      },
      {
        id: 2,
        capa: "evento-2-frontend.png",
        tag: temas[1].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Pixel & Code",
        descricao: "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI."
      }
    ],
    backend: [
      {
        id: 1,
        capa: "evento-1-backend.png",
        tag: temas[2].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Back-End Masters",
        descricao: "Performance e inovação no back-end, conectando especialistas e entusiastas."
      },
      {
        id: 2,
        capa: "evento-2-backend.png",
        tag: temas[2].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Code to Core",
        descricao: "Workshop que explora a essência do back-end, escalabilidade e boas práticas."
      },
      {
        id: 3,
        capa: "evento-3-backend.png",
        tag: temas[2].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Server Side Summit",
        descricao: "Evento dedicado a tecnologias e estratégias para desenvolvimento back-end."
      }
    ],
    devops: [
      {
        id: 1,
        capa: "evento-1-devops.png",
        tag: temas[4].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "DevOps Evolution",
        descricao: "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações."
      }
    ],
    ia: [
      {
        id: 1,
        capa: "evento-1-ia.png",
        tag: temas[0].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Deep Learning Days",
        descricao: "Imersão sobre IA, redes neurais e aprendizado profundo."
      },
      {
        id: 2,
        capa: "evento-2-ia.png",
        tag: temas[0].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "IA na palma da mão",
        descricao: "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis."
      },
      {
        id: 3,
        capa: "evento-3-ia.png",
        tag: temas[0].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "IA Segura e Acessível",
        descricao: "Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial."
      }
    ],
    dataScience: [
      {
        id: 1,
        capa: "evento-1-data-science.png",
        tag: temas[3].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Data Pulse",
        descricao: "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados."
      },
      {
        id: 2,
        capa: "evento-2-data-science.png",
        tag: temas[3].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Data Revolution",
        descricao: "Palestra sobre últimas tendências em big data, análise e inteligência empresarial."
      },
      {
        id: 3,
        capa: "evento-3-data-science.png",
        tag: temas[3].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Driven by Data",
        descricao: "Minicurso sobre como dados impulsionam decisões e inovações para o futuro."
      },
      {
        id: 4,
        capa: "evento-4-data-science.png",
        tag: temas[3].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "SQL Summit",
        descricao: "Ciclo de palestras com especialistas do universo dos bancos de dados SQL."
      }
    ],
    cloud: [
      {
        id: 1,
        capa: "evento-1-cloud.png",
        tag: temas[5].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "SkyTech Summit",
        descricao: "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura."
      },
      {
        id: 2,
        capa: "evento-2-cloud.png",
        tag: temas[5].nome,
        data: new Date().toLocaleDateString('pt-BR'),
        titulo: "Mundo Cloud",
        descricao: "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud."
      }
    ]
  }
]