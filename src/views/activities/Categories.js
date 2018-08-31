import React from 'react';
import CardImage from './../../components/CardImage';
export default class Categories extends React.Component {

    render() {
        return (
            <div className='view div'>
                <div align='center'>
                    <h2> Atividades </h2>
                </div>
                <div className='input-group'>
                    <CardImage
                        id='card_autonomia'
                        title='Autonomia'
                        description='Para melhorar sua autonomia....'
                        image='autonomia'
                    />
                    <CardImage
                        id='card_cprazo'
                        title='Memória de curto prazo'
                        description='Para melhorar sua autonomia....'
                        image='curto_prazo'
                    />
                    <CardImage
                        id='card_lprazo'
                        title='Memória de longo prazo'
                        description='Para melhorar sua autonomia....'
                        image='longo_prazo'
                    />
                </div>
            </div>
        );
    }
}