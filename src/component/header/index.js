/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, { Component } from 'react';
import { Menu , Segment ,Input, Dropdown}  from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import {browserHistory} from 'react-router';
import UserImage from '../../assets/image/user.png';
import LogoImage from '../../assets/image/logo.png';

const options = [
    {key: 'profile', text: 'Profile', value: 'profile'},
    {key: 'changePassword', text: 'Change Password', value: 'changePassword'},
    {key: 'logout', text: 'Logout', value: 'logout'}
];

@observer
class Header extends Component {
    @observable
        active = "";

    constructor(props) {
        super(props);
        const activeTab = localStorage.getItem("activeTab");
        this.active = activeTab && activeTab !== "/" ? activeTab : "student";
        this.menuClicked = this.menuClicked.bind(this);
        this.dropdownMenuChanged = this.dropdownMenuChanged.bind(this);
    }

    menuClicked(event, tab) {
        let selectedTab = tab.name;
        if (tab.name === 'home') {
            selectedTab = "/";
            return;
        }
        this.active = tab.name;
        localStorage.setItem("activeTab", selectedTab)
        browserHistory.push("/" + selectedTab);
    }

    dropdownMenuChanged(event, data) {
        event.preventDefault();
        if (data.value === 'logout') {
            try {
                if (window.localStorage) {
                    localStorage.clear();
                }
                browserHistory.replace('/');
            } catch (err) {
                console.log('error occurred while logout', err);
            }
        }
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {showToastr: this.props.showToastr})
        );
        return (
            <div>
                <Segment>
                    <Menu secondary stackable color={"teal"}>
                        <Menu.Item name="home" onClick={this.menuClicked}>
                            <img alt="app-logo" src={LogoImage}/></Menu.Item>
                        <Menu.Item name="student" onClick={this.menuClicked} active={this.active === "student"}>
                        </Menu.Item>
                        <Menu.Item name="employee" onClick={this.menuClicked} active={this.active === "employee"}>
                        </Menu.Item>
                        <Menu.Item name="assets" onClick={this.menuClicked} active={this.active === "assets"}>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...'/>
                            </Menu.Item>
                            <Menu.Item name='logout'>
                                <span>
                                <img alt="user-pic" src={UserImage} height="35px" width="35px"/></span>
                                <Dropdown item text='user1'
                                          onChange={this.dropdownMenuChanged}
                                          options={options}>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
                { childrenWithProps }
            </div>
        )
    }


}
export default Header;
