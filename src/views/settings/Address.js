import React from 'react';
import { FormContainer, View, Utils } from '../../components/';
import UserService from './../../service/UserService';

export default class Address extends React.Component {

  constructor() {
    super();
    this.state = { registers: null };
  }

  //Carregar registros
  componentWillMount() {
    UserService.getAllAddress().then(res => {
      this.setState({ registers: res.data, ieBuild: true });
    });
  }

  //Salvar / atualizar registro
  onSave(id) {
    const address = {
      dsLocal: Utils.getValue('end_ds_local'),
      dsLocalizacao: Utils.getValue('end_ds_localizacao')
    }

    if (id) {
      address.idEndereco = id;
      return UserService.updateAddres(address);
    } else {
      return UserService.addAddress(address);
    }
  }

  onDelete(id) {
    return UserService.deleteAddress(id);
  }

  render() {

    if (this.state.ieBuild) {
      const mode = (
        <div id='addressDiv'>
          <FormContainer
            fields={[
              { type: 'text', idInput: 'end_ds_local', placeholder: 'Local', required: true },
              { type: 'textarea', idInput: 'end_ds_localizacao', placeholder: 'Descrição', required: true, maxlength: 255 }
            ]} />
        </div>
      );

      return (
        <View modeV={mode}
          registers={this.state.registers}
          headerGrid={['Local', 'Descrição']}
          id='addressDiv'
          onSave={this.onSave}
          onDelete={this.onDelete} />
      );
    } else {
      return <div></div>;
    }
  }

}