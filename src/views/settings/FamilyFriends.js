import React from 'react';
import { View, FormContainer, Utils } from './../../components/';
import UserService from './../../service/UserService';

export default class FamilyFriends extends React.Component {

  constructor(props) {
    super(props);
    this.state = { parentOptions: null };
  }

  //Carregar registros
  componentWillMount() {
    UserService.getAllAditionalInformation().then(response => {
      if (response && response.data) {
        this.setState({ parentOptions: response.data.PARENTS, registers: response.data.REGISTERS });
      }
    });
  }

  onSave(id) {
    const ai = {
      idPessoa: Utils.getValue('ai_id_pessoa'),
      nmPessoa: Utils.getValue('ai_nm_pessoa'),
      dtNascimento: Utils.getDateValue('ai_dt_nascimento')
    }

    if (id) {
      ai.idInfoCompl = id;
      return UserService.updateAditionalInformation(ai);
    } else {
      return UserService.addAditionalInformation(ai);
    }
  }

  onDelete(id) {
    return UserService.deleteAditionalInformation(id);
  }


  render() {

    const parentOptions = this.state.parentOptions;
    const registers = this.state.registers;

    if (parentOptions) {
      const mode = (
        <div id='camilyFriendsDiv'>
          <FormContainer
            fields={[
              { type: 'select', idInput: 'ai_id_pessoa', placeholder: 'Grau parentesco', required: true, options: parentOptions },
              { type: 'text', idInput: 'ai_nm_pessoa', placeholder: 'Nome', required: true },
              { type: 'date', idInput: 'ai_dt_nascimento', placeholder: 'Data de nascimento' }
            ]} />
        </div>
      );

      return (
        <View modeV={mode}
          registers={registers}
          headerGrid={['Nome', 'Data Nascimento', 'Grau parentesco']}
          id='familyFriendsDiv'
          onSave={this.onSave}
          onDelete={this.onDelete} />
      );
    } else {
      return <div></div>
    }
  }
}