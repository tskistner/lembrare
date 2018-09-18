import React from 'react';
import CardImage from './../../components/CardImage';
import CategoryService from './../../service/CategoryService';

export default class Categories extends React.Component {

    constructor() {
        super();
        this.categories = null;
        this.state = { categories: null };
    }

    componentWillMount() {
        CategoryService.getCategories().then(response => {
            this.setState({ categories: response.data });
        }, err => console.log(err));
    }

    render() {
        let categories = [];
        const cat = this.state.categories;
        if (cat) {
            for (let i = 0; i < cat.length; i++) {
                categories.push(
                    <CardImage
                        key={i}
                        id={'cat_' + cat[i].id_categoria}
                        title={cat[i].nm_categoria}
                        description={cat[i].ds_categoria}
                        bgColor={cat[i].ds_cor}
                        handleClick={this.props.handleClick}
                    />
                );
            }
        }
        return (
            <div>
                <div align='center'>
                    <h2> Atividades </h2>
                </div>
                <div className='input-group'>
                    {categories}
                </div>
            </div>
        );
    }
}

/*
<CardImage
                        id='card_autonomy'
                        title='Autonomia'
                        description='Para melhorar sua autonomia....'
                        image='autonomia'
                        bgColor='pink'
                        handleClick={this.props.handleClick}
                    />
                    <CardImage
                        id='card_short'
                        title='Memória de curto prazo'
                        description='Para melhorar sua autonomia....'
                        image='curto_prazo'
                        bgColor='blue'
                        handleClick={this.props.handleClick}
                    />
                    <CardImage
                        id='card_long'
                        title='Memória de longo prazo'
                        description='Para melhorar sua autonomia....'
                        image='longo_prazo'
                        bgColor='purple'
                        handleClick={this.props.handleClick}
                    />
*/