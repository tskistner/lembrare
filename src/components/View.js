import React from 'react';
import GridMode from './viewComponents/GridMode';

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