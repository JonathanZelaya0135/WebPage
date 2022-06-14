import React, {useState} from 'react';
import Header from './componentes/Header';
import Form from './componentes/Form';
import TodoList from './componentes/TodoList';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
  <div className="container">
    <img src="./CSS_Logo.png" alt="foto4" id="photo4" />
    <img src="./JS_Logo.png" alt="foto3" id="photo3" />
    <img src="./UCA_Logo.png" alt="foto2" id="photo2" />
    <img src="./Miku_2020WinterFestival.png" alt="foto" id="photo" />
    <div className="Wrapper">
      <div>
        <Header />
      </div>

      <div>
        <Form 
          input= {input}
          setInput= {setInput}
          todos= {todos}
          setTodos= {setTodos}
        />
      </div>

      <div>
        <TodoList todos= {todos} setTodos= {setTodos} />
      </div>
    </div>
  </div>);
}

export default App;