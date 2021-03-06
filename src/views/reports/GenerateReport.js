import React from 'react';
import { FormContainer, Utils, PDF } from '../../components';
import { Button } from 'reactstrap';
import ChartService from '../../service/ChartService';
import ReportPDF from './ReportPDF';
import User from '../../repository/User';

export default class GenerateReport extends React.Component {

    constructor() {
        super();
        this.state = { chart: null };
        this.generate = this.generate.bind(this);
        this.print = this.print.bind(this);
    }

    print() {
        PDF.generate('relatorio_desempenho', 'chart_report',
            'desempenho_'.concat(User.getIdUser())
                .concat(Utils.getValue('R_DT_BEGGIN')).concat('_').concat(Utils.getValue('R_DT_FINAL')));
    }

    generate() {
        if (Utils.validateRequiredFields('report_settings')) {
            ChartService.getDataSource({ DT_INICIO: Utils.getValue('R_DT_BEGGIN'), DT_FIM: Utils.getValue('R_DT_FINAL') })
                .then(res =>
                    this.setState({
                        report: <ReportPDF data={res.data} />
                    })
                );
        }
    }

    render() {
        return (
            <div id='report_settings' className='report-pdf'>
                <div className='report-settings'>
                    <FormContainer
                        fields={[
                            { type: 'date', idInput: 'R_DT_BEGGIN', placeholder: 'Data início', required: true },
                            { type: 'date', idInput: 'R_DT_FINAL', placeholder: 'Data final', required: true }
                        ]} />
                    <div align='center'>
                        <Button onClick={this.generate}>Gerar Relatório </Button>
                        {this.state.report ?
                            <Button onClick={this.print}>Salva PDF </Button>
                            : null
                        }
                    </div>
                </div>
                {this.state.report}
            </div>
        )
    }

}