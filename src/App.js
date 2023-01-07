import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Nav from './components/Nav.js'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Projects/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
