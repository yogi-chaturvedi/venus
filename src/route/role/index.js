/**
 * Created by Yogesh Chaturvedi on 12-06-2017.
 */
import React, {Component} from 'react';

import {observable} from 'mobx';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import MenuConstants from '../../constants/menu';
import Employee from '../employee';
import Student from '../student';
import Assets from '../assets';
import Menu from '../../component/menu';
import { browserHistory } from 'react-router';

@observer
class Role extends Component {
    @observable activeMenuItem = '';
    @observable menuItems = [];
    @observable role = '';

    constructor(props) {
        super(props);
        const activeTab = localStorage.getItem("activeTab");
        this.role = activeTab && activeTab !== '' ? activeTab : 'student';
        this.menuItems = MenuConstants[this.role];
        this.activeMenuItem = this.menuItems[0].name;
    }

    componentWillReceiveProps(props) {
        this.role = localStorage.getItem("activeTab");
        this.menuItems = MenuConstants[this.role];
        this.activeMenuItem = this.menuItems[0].name;
    }

    getBaseContent() {
        switch (this.role) {
            case 'student' :
                return <Student activeMenuItem={this.activeMenuItem}/>;
                break;
            case 'employee':
                return <Employee/>;
                break;
            case 'assets' :
                return <Assets/>;
                break;
            default :
                return <Student/>;
        }
    }

    onMenuItemSelected(event, key) {
        this.activeMenuItem = key;
        //this.props.onMenuItemSelected(key);
    }

    render() {
        return (
            <div>
                <Grid stackable  columns={2} style={{flex: 1, margin: 0}}>
                    <Grid.Column width={3}>
                        <Menu menuItems={this.menuItems}
                              active={this.activeMenuItem}
                              onSelect={(e,key)=>this.onMenuItemSelected(e, key.name)}/>
                    </Grid.Column>

                <Grid.Column width={13} style={{overflow: "auto"}}>
                    { this.getBaseContent() }
                </Grid.Column>
                </Grid>
            </div>
        );
    }

}
export default Role;
