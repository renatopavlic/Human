import './App.css';
import About from './components/About/About';
import Cost from './components/Cost/Cost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InsuranceProducts from './components/InsuranceProducts/InsuranceProducts';
import Intro from './components/Intro/Intro';
import Monetize from './components/Monetize/Monetize';

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <InsuranceProducts />
      <Cost />
      <Monetize />
      <About />
      <Footer />
    </div>
  );
}

export default App;
