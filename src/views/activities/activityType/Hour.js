import React from 'react';
import CategoryService from './../../../service/CategoryService';

export default class Hour extends React.Component {

    componentWillMount() {
        CategoryService.getImageExcercise(8).then(res => {
            document.getElementById("ItemPreview").src = "data:image/png;base64," + res.data;
        }, err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Hour</h1>
                <img id="ItemPreview" src="" />
            </div>
        );
    }

}