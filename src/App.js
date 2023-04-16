import './index.css';
import Menu from "./components/menu/index"
import Home from './components/home';
import Services from './components/services';
import CardapioApp from './components/cardapio';
import ReservaApp from './components/reserva';
import NewsLetter from './components/newsletter';
import Footer from './components/footer';


export default function App() {
  return (
    <>
      <Menu />
      <Home />
      <Services />
      <CardapioApp />
      <ReservaApp />
      <NewsLetter/>
      <Footer />
    </>
  )
}