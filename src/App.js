import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      {/* <Header/> */}
      <Projects/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
