import React from 'react';
import TabContainer from './../../components/TabContainer';
import PersonalInformation from './PersonalInformation';
import AditionalInformation from './AditionalInformation';
import Address from './Address';

export default class Settings extends React.Component {
    render() {

        return (
            <div className='view div white'>
                <TabContainer firstTable='pi'
                    tabs={
                        [
                            { id: 'pi', title: 'Informações pessoais', modeV: <PersonalInformation /> },
                            { id: 'ai', title: 'Informações complementares', modeV: <AditionalInformation /> },
                            { id: 'e', title: 'Endereços', modeV: <Address />}
                        ]
                    }>
                </TabContainer>
            </div>
        );
    }
}