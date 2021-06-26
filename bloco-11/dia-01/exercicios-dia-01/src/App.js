import './App.css';
import Component from './Component';

function App() {

  const Task = (value) => {
    return (
        <li>{value}</li>
    );
  }

  const tarefas = ["Limpar o quarto", "Lavar as roupas", "Tirar o lixo", "Ir ao correio"]

  return (
    <div>
      <Component />
      <p>
        Resolução dos exercicios adiante.
      </p>
      <ul>
        { tarefas.map( (tarefa) => Task(tarefa)) }
      </ul>
    </div>

  );
}

export default App;
