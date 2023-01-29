// components
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'

//fonts
import "./assets/fonts/ClashDisplay-Semibold.ttf"
import "./assets/fonts/Archivo-Regular.ttf"
import Slider from 'react-slick'

// js for cursor stuff
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

function App() {
  return (
    <div className="App">
      <div id="invertedcursor"></div>
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
