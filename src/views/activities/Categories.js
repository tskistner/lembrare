import React from 'react';
import CardImage from './../../components/CardImage';
import CategoryService from './../../service/CategoryService';

export default class Categories extends React.Component {

    constructor(props) {
        super(props);
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
                <div align='center' className='view title'>
                    <h2> Atividades </h2>
                </div>
                <div>
                    {categories}
                </div>
            </div>
        );
    }
}