import {Component} from 'react';

interface TipContato {
  nome: string,
  idade: string,
  numero: number

}

class Contato extends Component<TipContato> {
  render() {
    return(
      <div>
        <p>{this.props?.nome}</p>
        <p>{this.props?.idade}</p>
        <p>{this.props?.numero}</p>

      </div>
      
    )
  }
}

export default Contato;