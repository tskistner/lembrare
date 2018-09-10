import React from 'react';
import TabContainer from './../../components/TabContainer';
import PersonalInformation from './PersonalInformation';
import AditionalInformation from './AditionalInformation';

export default class Settings extends React.Component {
    render() {

        return (
            <div>
                <TabContainer firstTable='pi'
                    tabs={
                        [
                            { id: 'pi', title: 'Informações pessoais', modeV: <PersonalInformation /> },
                            { id: 'ai', title: 'Informações adicionais', modeV: <AditionalInformation /> }
                        ]
                    }>
                </TabContainer>
            </div>
        );
    }
}