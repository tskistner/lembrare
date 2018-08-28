import React, { Component } from 'react';
import { Button, Form, CardImg } from 'reactstrap';
import FormContainer from '../../components/FormContainer';

class PersonalInformation extends Component {

    render() {

        return (
            <div className='col-12 form-div'>
                <header align='center' className='default-header'>
                    <img src={require('../../icons/person-icon-blue.png')} className='default-image'/>  
                    <h2>Informações pessoais</h2>
                </header>
                <FormContainer fields={[
                    { type: 'text', idInput: 'nm_completo', placeholder: 'Nome Completo', col: '12', required:true }]} />
                <FormContainer fields={[
                     { type: 'date', idInput: 'dt_nasc', col: '3', placeholder: 'Data de nascimento'},
                     { type: 'text', idInput: 'cidade_nt', placeholder: 'Cidade natal', col:'9'}, 
                ]}/>
                <FormContainer fields={[
                    { type: 'radio', idInput: 'rg_sexo', placeholder:'Sexo', col: '12', options: ['feminino','masculino'], values: ['f','m']}
                    ]} />
                <FormContainer fields={[ 
                    { type: 'text', idInput: 'ds_cidade', placeholder: 'Cidade', col: '4'},
                    { type: 'text', idInput: 'ds_pais', placeholder: 'Pais', col: '4'},
                    { type: 'text', idInput: 'ds_estado', placeholder: 'Estado', col: '4'}
                ]}/>
                <FormContainer fields={[
                    { type: 'text', idInput: 'nr_telefone', placeholder: 'Telefone', col: '6'}
                ]}/>
                <FormContainer fields={[
                    { type: 'text', idInput: 'ds_endereco', placeholder: 'Endereço', col: '6' },
                    { type: 'number', idInput: 'nr_numero', placeholder: 'Número', col:'2', maxlength: '5'},
                    { type: 'text', idInput: 'ds_complemento', placeholder: 'Complemento', col: '4'}
                ]} />
                <FormContainer fields={[
                    { type: 'text', idInput: 'ds_email', placeholder: 'Email', col:'12', icon:'mail.png'}
                ]}/> 
                <Form>
                    <Button align='center'>Salvar</Button>
                </Form>
            </div>

        );
    }
}

export default PersonalInformation;

/*
<FormContainer fields={[
    { type: 'label', label: 'lala', col: '3' },
    { type: 'label', label: 'asas', col: '3' },
]} />
<FormContainer fields={[
    { type: 'text', idInput: 't1', placeholder: 'olá', col: '3', addon: '@' },
    { type: 'text', idInput: 't2', placeholder: 'olá', col: '3' },
    { type: 'password', idInput: 'p', col: '1', maxlength: '2' },
    { type: 'select', idInput:'s1', col: '3', options: [1, 2, 3, 4] },
    { type: 'textarea', idInput:'ta1', col: '5', idInput: 'll', rows: '1', maxlength: '2' },
    { type: 'file', idInput:'f1', col: '2' },
    { type: 'formtext', idInput:'ft1', col: '2', text:'lalalalalla' },
    { type: 'radio', idInput: 'r1', col:'3', options: ['oi', 'oie', 'hey'], label:'herou'},
    { type: 'check', idInput:'c1', col:'3', desc:'hehe'}
]} />
<Form> 
    <Button>Submit</Button>
</Form>
*/
