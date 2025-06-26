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
import useEventos from './hooks/eventos';
import { ToastContainer } from 'react-toastify';


function App() {
  const { eventos, adicionarEvento } = useEventos()

  return (
    <div className="flex flex-col items-center text-white">
      <Header />
      <main className="flex flex-col items-center text-white">
        <HeroSection />
        <Section>
          <FormularioDeEvento onSubmit={adicionarEvento} />
        </Section>
        <Section classes="gap-16">
          <Frontend data={eventos.frontend} />
          <Backend data={eventos.backend} />
          <Devops data={eventos.devops} />
          <InteligenciaArtificial data={eventos.ia} />
          <DataScience data={eventos.dataScience} />
          <Cloud data={eventos.cloud} />
        </Section>
        <ToastContainer autoClose={3000} />
      </main>
      <Footer />
    </div>
  )
}

export default App
