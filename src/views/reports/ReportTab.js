import React from 'react';
import { TabContainer } from '../../components';
import GenerateReport from './GenerateReport';
import Report from './Report';

export default class ReportTab extends React.Component {

    render() {
        return (
            <div className='view div'>
                <TabContainer firstTable='pi'
                    tabs={
                        [
                            { id: 'pi', title: 'Relatórios', modeV: <Report /> },
                            { id: 'gr', title: 'Gerar Relatório', modeV: <GenerateReport />}
                        ]
                    }>
                </TabContainer>
            </div>
        )
    }
}