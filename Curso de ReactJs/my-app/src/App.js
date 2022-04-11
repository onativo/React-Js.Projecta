import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['python', 'c++', 'javascript']

return (
    <div className="App">
      <h1>Reenderização de listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
  );
}
export default App