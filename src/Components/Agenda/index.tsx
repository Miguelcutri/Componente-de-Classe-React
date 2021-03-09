import { Component } from 'react'
import  Contato  from '../Contato/index'


class MeuComponent extends Component<any> {

  state = {
    array: [{nome: 'Jeniffer',
    idade: '40',
    numero: 1}]
  } 

  mudarNome = () => {
    this.setState(
         {array: [ { nome: 'Maria', idade: '20', numero: 2}, {nome: 'Lara', idade: '13', numero: 3} ]}
    ) 
    
  }
  limpar = () => {
    this.setState(
      {array:[{ nome: '', idade: '', numero: '' }]}
    ) 
    
  }

  render() {
    return (
      <div>
        {
          this.state.array.map(item=>(
            <Contato nome={item.nome} idade={item.idade}numero={item.numero}/>
            
          ))
        }
        <button onClick={this.mudarNome}>Clique</button>
        <button onClick={this.limpar}>Limpar</button>

      </div>
    )
  }
}

export default MeuComponent