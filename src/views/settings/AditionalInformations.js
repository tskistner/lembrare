import React, { Component } from 'react';
import { View, FormContainer, ModalBox, Utils, AlertBox } from './../../components/';
import UserService from './../../service/UserService';
import User from './../../repository/User';

let configPassword = {};

export default class AditionalInformation extends Component {

    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
    }

    //Events
    onSave() {
        const data = {
            idUsuario: User.getIdUser(),
            ieFase: Utils.getValue('ie_fase'),
            qtTempo: Utils.getValue('qt_tempo'),
            dsMedicacao: Utils.getValue('ds_medicacao'),
            ieAntecedentes: Utils.getValue('ie_antecedentes'),
            dsOutrasDoencas: Utils.getValue('ds_outrasDoencas')
        };
        return UserService.updateUserAI(data);
    }

    componentDidMount() {
        UserService.getUserInformations().then(resp => {
            if (resp.data) {
                Utils.setValue('ie_fase', resp.data.ieFase);
                Utils.setValue('qt_tempo', resp.data.qtTempo);
                Utils.setValue('ds_medicacao', resp.data.dsMedicacao);
                Utils.setValue('ie_antecedentes', resp.data.ieAntecedentes);
                Utils.setValue('ds_outrasDoencas', resp.data.dsOutrasDoencas);
            }
        });
    }

    buildOptions() {
        return [
            {OPTION: '1ª', VALUE: 1},
            {OPTION: '2ª', VALUE: 2},
            {OPTION: '3ª', VALUE: 3},
            {OPTION: '4ª', VALUE: 4}
        ]
    }

    //Render component
    render() {
        const modeV = (
            <div id='aditionalInformationDiv'>
                <FormContainer fields={[
                    { type: 'select', idInput: 'ie_fase', placeholder: 'Fase do Alzheimer', options: this.buildOptions() },
                    { type: 'text', idInput: 'qt_tempo', placeholder: 'Tempo da doença' },
                    { type: 'check', idInput: 'ie_antecedentes', placeholder: 'Possui antecedentes' },
                    { type: 'textarea', idInput: 'ds_medicacao', placeholder: 'Medicações' },
                    { type: 'textarea', idInput: 'ds_outrasDoencas', placeholder: 'Outras doenças' }
                ]} />
            </div>
        );

        return (
            <View modeV={modeV} id='aditionalInformationDiv'
                onSave={this.onSave}
                noGrid={true} />
        );
    }
}