import React from 'react';
import TabContainer from './../../components/TabContainer';
import PersonalInformation from './PersonalInformation';
import AditionalInformation from './AditionalInformations';
import FamilyFriends from './FamilyFriends';
import Address from './Address';

export default class Settings extends React.Component {
    render() {

        return (
            <div className='view div white '>
                <TabContainer firstTable='pi'
                    tabs={
                        [
                            { id: 'pi', title: 'Informações pessoais', modeV: <PersonalInformation /> },
                            { id: 'ai', title: 'Informações adicionais', modeV: <AditionalInformation />},
                            { id: 'fa', title: 'Familia/Amigos', modeV: <FamilyFriends /> },
                            { id: 'e', title: 'Endereços', modeV: <Address />}
                        ]
                    }>
                </TabContainer>
            </div>
        );
    }
}