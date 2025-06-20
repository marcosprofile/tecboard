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


function App() {
  return (
    <div className="flex flex-col items-center text-white">
      <Header />
      <main className="flex flex-col items-center text-white">
        <HeroSection />
        <Section>
          <FormularioDeEvento />
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
