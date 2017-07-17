/**
 * Created by Yogesh Chaturvedi on 12-06-2017.
 */
import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react';

@observer
class SidebarLeftSlideAlong extends Component {
    render() {
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical
                             inverted>
                        {
                            this.props.menuItems.map((menuItem)=> {
                                return <Menu.Item key={menuItem.name} name={menuItem.name}>
                                    <Icon name={menuItem.icon}/>
                                </Menu.Item>
                            })
                        }
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            {this.props.content}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default SidebarLeftSlideAlong

