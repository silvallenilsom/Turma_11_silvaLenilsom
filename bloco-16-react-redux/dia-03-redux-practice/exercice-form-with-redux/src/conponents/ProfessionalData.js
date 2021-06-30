import React, { Component } from 'react';

class ProfessionalData extends Component {
  constructor() {
    super();
    this.handleUf = this.handleUf.bind(this);
    this.handleInputText = this.handleInputText.bind(this);
  }

  handleUf() {
    const estados = [
      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF',
      'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
      'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ',
      'RN', 'SC', 'SP', 'SE', 'TO' ];

    return estados.map( (estado) => <option value={estado}>{ estado }</option>);
  }

  handleInputText(inputType, inputName, textLabel) {
    return (
    <label htmlFor={ inputName }>
      { textLabel }
      <input type={ inputType } name={ inputName }/>
    </label>
    );
  }
  render() {
    return (
      <fieldset className="fieldset-personal-data">
        {this.handleInputText('text', 'nome', 'Nome:')}
        {this.handleInputText('text', 'email', 'E-mail:')}
        {this.handleInputText('text', 'cpf', 'CPF:')}
        {this.handleInputText('text', 'endereço', 'Endereço:')}
        {this.handleInputText('text', 'cidade', 'Cidade:')}

        <label htmlFor="estado">
          Estado:
          <select name="estado">
            <option selected value="">- -</option>
            { this.handleUf() }
          </select>
        </label>
        <div>
          <p>Escolha o tipo de residência:</p>
          <label htmlFor="residencia" >
            <input type="radio" name="residencia" value="casa" />
            Casa
          </label>
          <label htmlFor="apartamento" >
            <input type="radio" name="residencia" value="apartamento" />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalData;
