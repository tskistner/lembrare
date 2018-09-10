import React from 'react';
import CardImage from './../../components/CardImage';
export default class Categories extends React.Component {

    render() {
        return (
            <div>
                <div align='center'>
                    <h2> Atividades </h2>
                </div>
                <div className='input-group'>
                    <CardImage
                        id='card_autonomia'
                        title='Autonomia'
                        description='Para melhorar sua autonomia....'
                        image='autonomia'
                        bgColor='pink'
                        handleClick={this.props.handleClick}
                    />
                    <CardImage
                        id='card_cprazo'
                        title='Memória de curto prazo'
                        description='Para melhorar sua autonomia....'
                        image='curto_prazo'
                        bgColor='blue'
                        handleClick={this.props.handleClick}
                    />
                    <CardImage
                        id='card_lprazo'
                        title='Memória de longo prazo'
                        description='Para melhorar sua autonomia....'
                        image='longo_prazo'
                        bgColor='purple'
                        handleClick={this.props.handleClick}
                    />
                </div>
            </div>
        );
    }
}