import './App.css';
import Component from './Component';

function App() {

  const Task = (value) => {
    return (
        <li>{value}</li>
    );
  }

  return (
    <div>
      <Component />
      <p>
        Resolução dos exercicios adiante.
      </p>
      <ul>
        { Task('exercicios') }
      </ul>
    </div>

  );
}

export default App;
