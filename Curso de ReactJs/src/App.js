import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Projects from './components/pages/Projects';
import NovoProjeto from './components/pages/NovoProjeto';
import ProjetoCadastrado from './components/pages/ProjetoCadastrado';

function App() {
  return (
      <Router>
        <Navbar />
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Company' element={<Company/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/NovoProjeto' element={<NovoProjeto/>}/>
            <Route path='/projects/:id' element={<ProjetoCadastrado/>}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
  );
}
export default App;
