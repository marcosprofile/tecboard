import FormularioDeEvento from './components/FormularioDeEvento';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <main className="text-white">
      <Header />
      <HeroSection />
      <section className="flex justify-center my-16">
        <FormularioDeEvento />
      </section>
    </main>
  )
}

export default App
