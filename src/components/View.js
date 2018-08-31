import React from 'react';

export default class View extends React.Component {

    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleGridClick = this.handleGridClick.bind(this);
        this.state = { isEditting: false };
    }

    handleEditClick() {
        this.setState({ isEditting: true });
    }

    handleGridClick() {
        this.setState({ isEditting: false });
    }

    componentDidMount() {
        const isEditting = this.state.isEditting;
        if (isEditting) {
            document.getElementById(this.props.button).onclick = this.handleGridClick;
        }
    }

    render() {
        const isEditting = this.state.isEditting;
        let mode;

        if (isEditting && this.props.modeV) {
            mode = this.props.modeV;
        } else {
            mode = <div>
                <GridMode
                    handleClick={this.handleEditClick}
                    levels={[
                        {
                            type: 'head',
                            columns: [
                                { desc: '#' },
                                { desc: 'First' },
                                { desc: 'Last' }
                            ]
                        },
                        {
                            type: 'body',
                            columns: [
                                { desc: '1' },
                                { desc: 'Mark' },
                                { desc: 'Otto' }
                            ]
                        }
                    ]}
                />
            </div>
        }

        return (
            <div className='col-12 view div'>
                {this.props.header}
                {mode}
            </div>
        );
    }
}

function GridMode(props) {
    let head = [];
    let body = [];
    if (props.levels) {
        let i = 0;
        for (let j = 0; j < props.levels.length; j++) {
            const cols = props.levels[j].columns;
            if (cols) {
                if (props.levels[j].type === 'head') {
                    head.push(
                        <thead key={i++}>
                            <tr key={i++}>
                                <th></th>
                                {cols.map(c => <th key={i++} scope='col'>{c.desc}</th>)}
                            </tr>
                        </thead>
                    );
                } else {
                    body.push(
                        <tr key={i++}>
                            <th key={i++}>
                                <button key={i++} className='btn btn-light' id={'btn_' + i} onClick={props.handleClick}>
                                    <img key={i++} src={require('./../icons/edit.svg')} alt='edit' />
                                </button>
                            </th>
                            {cols.map(c => <td key={(i++)}>{c.desc}</td>)}
                        </tr>
                    );
                }
            }
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