import React from 'react';
import CategoryService from '../../../service/CategoryService';
import categories from '../ExcerciseTypeEnum';

export default class Autonomy extends React.Component {

    constructor() {
        super();
        this.cs = new CategoryService();
    }


    componentWillMount() {
        this.cs.getCategoryLevel().then(res => {
            this.chooseRandomExcercise()
        });
    }

    render() {
        
    }
}