/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { Segment,Table,Menu,Label,Icon,Dropdown, Input } from 'semantic-ui-react'
import StaticStudentList from '../../../constants/StudentStaticList';
import './styles.css';

@observer
class List extends Component {

    componentWillMount() {
        this.setState({
            studentList: StaticStudentList
        });
    }

    render() {
        return (
            <Segment basic color="teal" className="no-padding-segment">
                <Segment>
                    <Label as='a' size="large" color='teal' ribbon>Student List</Label>
                    <Input
                        className="search-box"
                        action={<Dropdown button basic floating options={[{key:0,value:"All",text:"All"},{key:1,value:"1",text:"1"},{key:2,value:"2",text:"2"},{key:3,value:"3",text:"3"},{key:4,value:"4",text:"4"}]} defaultValue='All' />}
                        icon='search'
                        iconPosition='left'
                        placeholder='Search...'
                        />
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Registration Number</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Father's Name</Table.HeaderCell>
                            <Table.HeaderCell>Class/Section</Table.HeaderCell>
                            <Table.HeaderCell>Branch</Table.HeaderCell>
                            <Table.HeaderCell>Contact</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.state.studentList.map((student, index)=> {
                                return <Table.Row key={index}>
                                    <Table.Cell>{student.regId}</Table.Cell>
                                    <Table.Cell>{student.name}</Table.Cell>
                                    <Table.Cell>{student.fatherName}</Table.Cell>
                                    <Table.Cell>{student.class + " / " + student.section}</Table.Cell>
                                    <Table.Cell>{student.branch}</Table.Cell>
                                    <Table.Cell>{student.contact}</Table.Cell>
                                    <Table.Cell color="red">
                                        <Dropdown color="teal" text='Select'>
                                            <Dropdown.Menu >
                                                <Dropdown.Item icon={<Icon name="eye" color="blue"/>} text='View'/>
                                                <Dropdown.Item icon={<Icon name="compose" color="blue"/>} text='Edit'/>
                                                <Dropdown.Item icon={<Icon name="trash" color="red"/>} text='Delete'/>
                                            </Dropdown.Menu>
                                        </Dropdown></Table.Cell>
                                </Table.Row>
                            })
                        }


                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7'>
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
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                </Segment>
            </Segment>
        );
    }
}
export default List;

