import React from 'react';
import { TabPanel, DropDownMenu} from './menuComponents/';

export default class TabContainer extends React.Component {
    render() {
        const tabsPanel = [];
        if (this.props.tabs) {
            for (let i = 0; i < this.props.tabs.length; i++) {
                if (this.props.tabs[i].type === 'dropdown') {
                    tabsPanel.push(<DropDownMenu key={i}
                        tabName={this.props.tabs[i].tabName}
                        options={this.props.tabs[i].options} />);
                } else {
                    tabsPanel.push(<TabPanel key={i}
                        tabName={this.props.tabs[i].tabName}
                        index={i}
                        link={this.props.tabs[i].link} />);
                }
            }
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand menu-title">Lembrare</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {React.createElement('ul', { className: 'navbar-nav mr-auto' }, tabsPanel)}
                </div>
            </nav>
        );
    }
}