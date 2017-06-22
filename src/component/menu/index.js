/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { Menu,Icon ,Divider}  from 'semantic-ui-react';
import { observer } from 'mobx-react';

@observer
class Student extends Component {

    render() {
        return (
            <div>
                <Menu icon="labeled" vertical pointing size="small"
                      icon='labeled'>
                    {
                        this.props.menuItems.map((item)=> {
                            return <Menu.Item key={item.name} name={item.name} color='teal'
                                              active={this.props.active === item.name}
                                              onClick={this.props.onSelect}>
                                <Icon name={item.icon} color={this.props.active === item.name ? "teal" :'white'}/>
                                {item.name}
                            </Menu.Item>
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default Student;
