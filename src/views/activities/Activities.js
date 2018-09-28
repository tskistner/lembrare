import React from 'react';
import Categories from './Categories';
import Excercise from './Exercise';

export default class View extends React.Component {

    constructor(props) {
        super(props);
        this.handleActivitieClick = this.handleActivitieClick.bind(this);
        this.handleExitActivitieClick = this.handleExitActivitieClick.bind(this);
        this.state = { isPlaying: false };
    }

    handleActivitieClick(id) {
        this.setState({ isPlaying: true, category: {id} });
    }

    handleExitActivitieClick(id) {
        this.setState({ isPlaying: false });
    }

    render() {
        const isPlaying = this.state.isPlaying;
        let mode;

        if (isPlaying) {
            const idCat = this.state.category.id;
            mode = <Excercise handleClick={this.handleExitActivitieClick} category={idCat}/>;
        } else {
            mode = <Categories handleClick={this.handleActivitieClick} />
        }

        return (
            <div className='view div'>
                {mode}
            </div>
        );
    }
}