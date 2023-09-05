import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  state = {
    estudantes: [
      {
      matricula: 1,
      nome: 'Júlio Cezar',
      curso: 'Informática',
      turma: '6B'
      },
      {
      matricula: 2,
      nome: 'Pedro Mineli',
      curso: 'Informática',
      turma: '4B'
      },
      {
      matricula: 1,
      nome: 'Dudu Shelby',
      curso: 'Informática',
      turma: '6B'
      }
      ]      
    }
  render(){
    const{ estudantes } = this.state; //atribuição via desestruturação

    return( 
    <div className="App">
      {estudantes.map(estudante=> (
      <div key={estudante.matricula}>
      <h2 key={estudante.matricula}>{estudante.nome}</h2>
      <p>{estudante.turma} {estudante.curso}</p>
      </div> 
      ))}
    </div>
  );
  }
}

export default App;
