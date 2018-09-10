import React from 'react';
import CategoryService from '../../../service/CategoryService';

export default class Autonomy extends React.Component {

    constructor() {
        super();
        this.cs = new CategoryService();
    }

    componentWillMount() {
        this.cs.getCategoryLevel(res => {

        });
    }

    render() {
        
    }
}