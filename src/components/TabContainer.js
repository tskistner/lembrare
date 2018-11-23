import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class TabContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: this.props.firstTable
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {

        const tabsV = [];
        const tabsH = [];
        if (this.props.tabs) {
            for (let i = 0; i < this.props.tabs.length; i++) {
                const t = this.props.tabs[i];
                tabsH.push(
                    <NavItem key={i}>
                        <NavLink key={i}
                            className={classnames({ ativo: this.state.activeTab === t.id })}
                            onClick={() => { this.toggle(t.id); }}>
                            {t.title}
                        </NavLink>
                    </NavItem>
                );
                tabsV.push(
                    <TabPane tabId={t.id} key={i}>
                        <Row key={i}>
                            <Col sm="12" key={i}>
                                {t.modeV}
                            </Col>
                        </Row>
                    </TabPane>
                );
            }
        }

        return (
            <div>
                <Nav tabs className='nav-itens'>
                    {tabsH}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {tabsV}
                </TabContent>
            </div>
        );
    }
}