import React from 'react';
import { ButtonImage } from './../../../components';

export default class FormIdentification extends React.Component {

    

    render() {

        const idValueUp = 1;
        const image = [[0,1,0,0,1,0],
                       [0,0,0,0,0,0],
                       [0,1,0,0,1,0],
                       [0,1,1,1,1,0]];

        let lines = [];
        for (let i = 0; i < image.length; i++) {
            let l = [];
            for (let j = 0; j < image[i].length; j++) {
                l.push(<ButtonImage idIconImage={i.toString().concat(j)} value={image[i][j]} idValueUp={idValueUp} />);
            }
            lines.push(<div> {l} </div>);
        }

        return <div>{lines}</div>;
    }

}
