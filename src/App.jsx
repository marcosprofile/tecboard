import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/layout/Section';
import FormularioDeEvento from './components/FormularioDeEvento';
import Frontend from './components/events/Frontend';
import Backend from './components/events/Backend';
import Devops from './components/events/Devops';
import InteligenciaArtificial from './components/events/InteligenciaArtificial';
import DataScience from './components/events/DataScience';
import Cloud from './components/events/Cloud';
import Footer from './components/Footer';
import { eventos } from './utils/Eventos';


function App() {
  function getTemaKey(id) {
    const temas = {
      0: 'frontend',
      1: 'backend',
      2: 'devops',
      3: 'ia',
      4: 'dataScience',
      5: 'cloud'
    }
    return temas[id]
  }

  function adicionarEvento(evento) {
    const temaKey = getTemaKey(evento.idTema)

    const { idTema: _, ...eventoSemIdTema } = evento

    eventos[0][temaKey].push(eventoSemIdTema)

    console.log(`Evento adicionado em ${temaKey}`)
    console.table(eventoSemIdTema)
    console.table(eventos)
  }

  return (
    <div className="flex flex-col items-center text-white">
      <Header />
      <main className="flex flex-col items-center text-white">
        <HeroSection />
        <Section>
          <FormularioDeEvento onSubmit={adicionarEvento} />
        </Section>
        <Section classes="gap-16">
          <Frontend />
          <Backend />
          <Devops />
          <InteligenciaArtificial />
          <DataScience />
          <Cloud />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
