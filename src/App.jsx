import './app.css'
import Menu from './pages/menu/Menu.jsx'
import Home from './pages/home/Home.jsx'
import Recomendaciones from './pages/recomendaciones/Recomendaciones.jsx'
import Compania from './pages/compania/Compania.jsx'
import PasoAPaso from './pages/pasoapaso/PasoAPaso.jsx'
import Tipos from './pages/tipos/Tipos.jsx'
import Temporizador from './pages/temporizador/Temporizador.jsx'
import Footer from './pages/footer/Footer.jsx'


function App() {

  return (

     <>

      <Menu />

      <Home />
      <Recomendaciones />
      <Compania />
      <PasoAPaso />
      <Temporizador />
      <Tipos />

      <Footer />

    </>
  )
}

export default App
