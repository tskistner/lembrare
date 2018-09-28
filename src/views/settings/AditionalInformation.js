import React from 'react';
import View from './../../components/View';
import FormContainer from '../../components/FormContainer';
import UserService from './../../service/UserService';

export default class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { parentOptions: null };
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    UserService.getAllAditionalInformation().then(response => {
      if (response && response.data) {
        this.setState({ parentOptions: response.data.PARENTS, registers: response.data.REGISTERS });
      }
    });
  }

  setValue(element, value) {
    const e = document.getElementById(element);
    if (e) {
      e.value = value;
    }
  }

  getValue(element) {
    const e = document.getElementById(element);
    if (e) {
      return e.value;
    }
    return null;
  }

  onSave() {
    const ai = {
      idPessoa: this.getValue('ai_id_pessoa'),
      nmPessoa: this.getValue('ai_nm_pessoa'),
      dtNascimento: this.getValue('ai_dt_nascimento')
    }
    UserService.addAditionalInformation(ai);
  }


  render() {

    const parentOptions = this.state.parentOptions;
    const registers = this.state.registers;

    if (parentOptions) {
      const mode = (
        <div id='cInformationDiv'>
          <FormContainer
            fields={[
              { type: 'select', idInput: 'ai_id_pessoa', placeholder: 'Grau parentesco', required: true, options: parentOptions },
              { type: 'text', idInput: 'ai_nm_pessoa', placeholder: 'Nome', required: true },
              { type: 'date', idInput: 'ai_dt_nascimento', placeholder: 'Data de nascimento', required: true }
            ]} />
        </div>
      );

      const regs = [['Nome', 'Data Nascimento', 'Grau parentesco']];

      registers.map(r => {
        regs.push([r.nm_pessoa, r.dt_nascimento, r.id_pessoa]);
      });

      return (
        <View modeV={mode} registers={regs} id='cInformationDiv' onSave={this.onSave} />
      );
    } else {
      return <div></div>
    }
  }
}