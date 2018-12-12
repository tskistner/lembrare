import React from 'react';
import { Utils, Chart, PDF } from '../../components';
import User from '../../repository/User';
import '../../css/Report.css';

export default class ReportPDF extends React.Component {

    buildRegisters() {
        const registers = this.props.data.REPORTS.map(r => {
            return <div>
                <div className='row'>
                    <div className='col-3'>
                        <p>Data:</p>
                    </div>
                    <div className='col-3'>
                        <p>{(r.dt_atualizacao)}</p>
                    </div>
                    <div className='col-3'>
                        <p>Responsável:</p>
                    </div>
                    <div className='col-3'>
                        <p>{r.ds_pessoa}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <p>Descrição:</p>
                    </div>
                    <div className='col-10'>
                        <p>{r.ds_boletim}</p>
                    </div>
                </div>
                <p className='report break' />
            </div>
        });
        return registers;
    }

    render() {
        return (
            <div id='relatorio_desempenho' className='report table'>
                <div >
                    <p className='report title'>Relatório de Progresso</p>
                    <p className='report title'>Nome: {User.getNameUser()} </p>
                    <p className='report title'>Data: {Utils.getValue('R_DT_BEGGIN').concat(' até ').concat(Utils.getValue('R_DT_FINAL'))}</p>
                </div>

                <div id='chart_report'>
                    <Chart
                        title='Desenpenho'
                        y_axis='Acertos'
                        subcaption={Utils.getValue('R_DT_BEGGIN').concat(' até ').concat(Utils.getValue('R_DT_FINAL'))}
                        description='Quantidade de acertos'
                        data={this.props.data.CHART}
                    />
                </div>

                <p align='center' className='report title'>Registros</p>
                <div className='container'>
                    {this.buildRegisters()}
                </div>
            </div>
        );
    }

}