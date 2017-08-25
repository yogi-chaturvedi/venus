/**
 * Created by Amit on 24-08-2017.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Segment, Label, Icon, Dropdown, Input, Card, Image, Menu} from 'semantic-ui-react'
import EmployeeStore from '../store';
import images from "../constant"
import './styles.css';


@observer
class EmployeeList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Segment basic color="teal" className="no-padding-segment">
                    <Segment>
                        <Label as='a' size="large" color='teal' ribbon>Employees List</Label>
                        <Input
                            className="search-box"
                            icon='search'
                            iconPosition='left'
                            placeholder='Search....'
                        />
                        <Segment basic>
                            <Card.Group itemsPerRow={3}>
                                {
                                    EmployeeStore.employees.map((employee) => {
                                        return <Card color="teal" key={employee.id}>
                                            <Card.Content>
                                                <Image floated='right' size='mini' src={images.employee}/>
                                                <Card.Header>
                                                    {employee.name}
                                                </Card.Header>
                                                <Card.Meta>
                                                    {employee.age}, {employee.designation}
                                                </Card.Meta>
                                                <Card.Description>
                                                    {employee.address}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    })
                                }
                            </Card.Group>
                        </Segment>
                    </Segment>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                            <Icon name='left chevron'/>
                        </Menu.Item>
                        <Menu.Item as='a' color="teal" selected active>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                            <Icon name='right chevron'/>
                        </Menu.Item>
                    </Menu>
                </Segment>
            </div>
        );
    }
}
export default EmployeeList;