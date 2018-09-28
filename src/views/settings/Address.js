import React from 'react';
import View from './../../components/View';
import { Button, Form } from 'reactstrap';
import FormContainer from '../../components/FormContainer';

export default class Address extends React.Component {

  render() {
    const mode = (
      <div className='addressDiv'>
        <FormContainer
          fields={[
            { type: 'text', idInput: 'ds_local', placeholder: 'Local', required: true },
            { type: 'textarea', idInput: 'ds_localizacao', placeholder: 'Descrição', required: true, maxlength: 255 }
          ]} />
      </div>
    );

    const reg = [
      ['Local', 'Descrição'],
      ['Trabalho', 'Rua dois de setembro']
    ];

    return (
      <View modeV={mode} registers={reg} id='addressDiv' />
    );
  }

}