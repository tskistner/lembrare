import React from 'react';
import View from './../../components/View';
import { Button, Form } from 'reactstrap';
import FormContainer from '../../components/FormContainer';

export default class LoginControl extends React.Component {


  render() {

    const header =
      <header align='center' className='default-header'>
        <img src={require('../../icons/person-icon-blue.png')} className='view image' alt='profile' />
        <h2>Informações pessoais</h2>
      </header>;

    const mode =
      <div>
        <div className='pInformation'>
          <FormContainer
            fields={[
              { type: 'text', idInput: 'nm_completo', placeholder: 'Nome Completo', col: '12', required: true }]} />
          <FormContainer
            fields={[
              { type: 'date', idInput: 'dt_nasc', col: '3', placeholder: 'Data de nascimento' },
              { type: 'text', idInput: 'cidade_nt', placeholder: 'Cidade natal', col: '9' },
            ]} />
          <FormContainer
            fields={[
              { type: 'radio', idInput: 'rg_sexo', placeholder: 'Sexo', col: '12', options: ['feminino', 'masculino'], values: ['f', 'm'] }
            ]} />
          <FormContainer fields={[
            { type: 'text', idInput: 'ds_cidade', placeholder: 'Cidade', col: '4' },
            { type: 'text', idInput: 'ds_pais', placeholder: 'Pais', col: '4' },
            { type: 'text', idInput: 'ds_estado', placeholder: 'Estado', col: '4' }
          ]} />
          <FormContainer
            fields={[
              { type: 'text', idInput: 'nr_telefone', placeholder: 'Telefone', col: '6' }
            ]} />
          <FormContainer
            fields={[
              { type: 'text', idInput: 'ds_endereco', placeholder: 'Endereço', col: '6' },
              { type: 'number', idInput: 'nr_numero', placeholder: 'Número', col: '2', maxlength: '5' },
              { type: 'text', idInput: 'ds_complemento', placeholder: 'Complemento', col: '4' }
            ]} />
          <FormContainer
            fields={[
              { type: 'text', idInput: 'ds_email', placeholder: 'Email', col: '12', icon: 'mail.png' }
            ]} />
        </div>

        <Form align='center'>
          <Button id='btn_salvar'>Salvar</Button>
        </Form>

      </div>



    return (
      <View header={header} modeV={mode} button='btn_salvar' />
    );
  }
}