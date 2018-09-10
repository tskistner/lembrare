import React from 'react';
import ListItem from './ListItem';

export default class GridMode extends React.Component {

    render() {
        let head = [];
        let body = [];
        if (this.props.levels) {
            let i = 0;
            for (let j = 0; j < this.props.levels.length; j++) {
                const cols = this.props.levels[j].columns;
                if (cols) {
                    if (this.props.levels[j].type === 'head') {
                        const hCols = cols.map(c => {return <th scope='col' key={i++}>{c.desc}</th>});
                        head.push(
                            <thead key={i++}>
                                <tr key={i++}>
                                    <th></th>
                                    {hCols}
                                </tr>
                            </thead>
                        );
                    } else {
                        body.push(<ListItem cols={cols} click={this.props.handleClick} id={i++} key={i} />);
                    }
                }
                i += 20;
            }

        }

        const table =
            <table className='table table-hover'>
                {head}
                <tbody>{body}</tbody>
            </table>

        return (
            <div>
                {table}
            </div>
        );
    }
}