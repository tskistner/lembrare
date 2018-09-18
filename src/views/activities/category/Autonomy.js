import React from 'react';
import CategoryService from '../../../service/CategoryService';
import categories from '../ExcerciseTypeEnum';

export default class Autonomy extends React.Component {


    componentWillMount() {
        CategoryService.getCategoryLevel().then(res => {
            this.chooseRandomExcercise()
        });
    }

    render() {
        
    }
}