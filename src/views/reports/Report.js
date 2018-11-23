import React from 'react';
import { View, FormContainer, Utils } from '../../components';
import ReportService from '../../service/ReportService';

export default class Report extends React.Component {

    constructor() {
        super();
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = { registers: null, parentOptions: null };
    }

    onDelete(id) {
        return ReportService.delete({ ID_BOLETIM: id });
    }

    onSave(id) {

        const data = {
            dsPessoa: Utils.getValue('R_DS_PERSON'),
            dsBoletim: Utils.getValue('R_DS_REPORT')
        }

        if (id) {
            data.idBoletim = id;
            return ReportService.update(data);
        } else {
            return ReportService.add(data);
        }
    }

    componentWillMount() {
        ReportService.all().then(res => {
            this.setState({ registers: res.data });
        });
    }

    render() {
        const registers = this.state.registers;

        if (registers) {
            const mode = (
                <div id='reportsUser'>
                    <FormContainer
                        fields={[
                            { type: 'text', idInput: 'R_DS_PERSON', placeholder: 'Responsável', required: true, maxLength:255 },
                            { type: 'textarea', idInput: 'R_DS_REPORT', placeholder: 'Descrição', required: true, rows: 4, maxLength:2000 }
                        ]} />
                </div>
            );

            return (
                <View modeV={mode}
                    registers={registers}
                    headerGrid={['Data Registro', 'Responsável', 'Descrição']}
                    id='reportsUser'
                    onSave={this.onSave}
                    onDelete={this.onDelete} />
            );
        } else {
            return <div></div>
        }

    }

}