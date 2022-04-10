import './App.css';
import Hello from './components/Hello.js';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';


function App() {

    const nomi = 'Var com nome -> Mary'
  return (
    <div className="App">
      <Hello/>
      <SayMyName nome='Vini' />
      <SayMyName nome='Outro Nome' />
      <SayMyName nome={nomi} />
      <Pessoa
        nome = 'Vini'
        idade = '28'
        profissao = 'só estuda'
        foto = 'http://via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
