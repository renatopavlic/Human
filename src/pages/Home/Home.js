import React from 'react';
import Header from "../../components/Header/Header";
import About from '../../components/About/About';
import Cost from '../../components/Cost/Cost';
import Footer from '../../components/Footer/Footer';
import InsuranceProducts from '../../components/InsuranceProducts/InsuranceProducts';
import Intro from '../../components/Intro/Intro';
import Monetize from '../../components/Monetize/Monetize';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header theme="white"/>
      <Intro />
      <InsuranceProducts />
      <Cost />
      <Monetize />
      <About />
      <Footer />
    </div>
  )
}

export default Home;
