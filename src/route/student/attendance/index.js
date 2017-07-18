/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Button, Form, Segment, Input, Divider, Label, Dropdown, Grid, Image, Header, Table, Icon, Radio, Checkbox } from 'semantic-ui-react'
import classDetails from '../../../constants/class-details';
import dateConstants from '../../../constants/date-constants';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import _ from 'lodash';

@observer
class Attendance extends Component {

    @observable results = [
        { id : '1', class : 'X', rollNo : '101', name : 'Dharmendra Nagda', attendanceStatus : 'Present'},
        { id : '2', class : 'X', rollNo : '102', name : 'Dharmendra Nagda', attendanceStatus : 'Present'},
        { id : '3', class : 'X', rollNo : '103', name : 'Dharmendra Nagda', attendanceStatus : 'Present'},
        { id : '4', class : 'X', rollNo : '104', name : 'Dharmendra Nagda', attendanceStatus : 'Absent'},
        { id : '5', class : 'X', rollNo : '105', name : 'Dharmendra Nagda', attendanceStatus : 'Present'},
        { id : '6', class : 'X', rollNo : '106', name : 'Dharmendra Nagda', attendanceStatus : 'Present'}
    ];

    constructor(props) {
        super(props);
        this.state = {
            editingAttendance : {},
            days : [],
            dateFilter : '', monthFilter : '', yearFilter : '',
            classFilter: '', sectionFilter: '', branchFilter: '', sessionFilter: ''
        }
    }

    editAttendance(id){
        let edit = { editingAttendance : {}};
        edit.editingAttendance[id] = true;
        this.setState( edit );
    }

    changeAttendanceStatus(status, result){
        let matchedResult = _.find(this.results, { id : result.id});
        if(matchedResult){
            matchedResult.attendanceStatus = status;
            let edit = { editingAttendance : {}};
            edit.editingAttendance[result.id] = false;
            this.setState(edit);
        }
    }

    onDropdownValueChange(value, filterName) {
        let filter = {};
        filter[filterName] = value.value;
        this.setState(filter) ;
        if(filterName === 'monthFilter' && value.value !== ""){
            let noOfDays = dateConstants.daysInMonth[value.value];
            let days = _.range(1, noOfDays + 1);
            // TODO : Handling of leap year : Feb will have 29 days
            this.setState({
                days : _.map(days, function (day) {
                    return {key : day, text : day, value : day}
                }),
                dateFilter : ''
            });
        }
    }

    getFilterLabel(filterName){
        switch(filterName){
            case 'date' :
                return _.find(this.state.days, { value : this.state.dateFilter }).text;
            case 'month':
            case 'year':
                return _.find(dateConstants[filterName +'s'], { value : this.state[filterName + 'Filter']}).text;
            case 'class':
            case 'branch':
                return _.find(classDetails[filterName + 'es'], { value : this.state[filterName + 'Filter']}).text;
        }
    }

    resetFilter(filterName){
        let filter = {};
        filter[filterName + 'Filter'] = "";
        this.setState(filter);
    }

    clearFilters(e){
        this.setState({
            dateFilter : '', monthFilter : '', yearFilter : '',
            classFilter: '', sectionFilter: '', branchFilter: '', sessionFilter: ''
        });
    }


    getOptions(filter){
        //return (<Dropdown.Item key={'df'} value={'dsf'}>c.text</Dropdown.Item>)
        return classDetails.classes.map((c, index) => {
            return (<Dropdown.Item key={c.key} value={c.value} onClick={(e)=>{this.onDropdownValueChange(c.value,'classFilter')}}>{c.text}</Dropdown.Item>)
        })
    }

    render() {
        return (
                <Segment color='teal' raised>
                    <Label as='a' color='teal' ribbon>Attendance</Label>
                    <Segment basic>
                        <Form>
                            <Form.Group >
                                <Form.Field >
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select month"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'monthFilter')}}
                                                   label="Month"
                                                   value={this.state.monthFilter}
                                                   options={dateConstants.months}/>
                                </Form.Field>
                                <Form.Field width={3}>
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select Date"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'dateFilter')}}
                                                   label="Date"
                                                   disabled={!this.state.monthFilter}
                                                   value={this.state.dateFilter}
                                                   options={this.state.days}/>
                                </Form.Field>
                                <Form.Field >
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select Year"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'yearFilter')}}
                                                   label="Year"
                                                   value={this.state.yearFilter}
                                                   options={dateConstants.years}/>
                                </Form.Field>
                                {/*<Form.Field width={4}>
                                    <Form.Dropdown selection search 
                                                   labeled
                                                   placeholder="Select Session"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'sessionFilter')}}
                                                   label="Session"
                                                   value={this.state.sessionFilter}
                                                   options={classDetails.sessions}/>
                                </Form.Field>*/}

                                <Form.Field >
                                    {/*<Form.Dropdown
                                     value={this.state.classFilter}>
                                     <Dropdown.Menu>
                                     <Dropdown.Item onClick={(e,value)=>{this.onDropdownValueChange('','classFilter')}}>Select</Dropdown.Item>
                                     {
                                     classDetails.classes.map((c, index) => {
                                     return (<Dropdown.Item key={c.key} value={c.value} onClick={(e)=>{this.onDropdownValueChange(c,'classFilter')}}>{c.text}</Dropdown.Item>)
                                     })
                                     }
                                     </Dropdown.Menu>
                                     </Form.Dropdown>*/}
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select Class"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'classFilter')}}
                                                   label="Class"
                                                   value={this.state.classFilter}
                                                   options={classDetails.classes}/>
                                </Form.Field>
                                {/*<Form.Field >
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select Section"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'sectionFilter')}}
                                                   label="Section"
                                                   value={this.state.sectionFilter}
                                                   options={classDetails.sections}/>
                                </Form.Field>*/}
                                <Form.Field >
                                    <Form.Dropdown selection search
                                                   labeled
                                                   placeholder="Select Branch"
                                                   onChange={(e,value)=>{this.onDropdownValueChange(value,'branchFilter')}}
                                                   label="Branch"
                                                   value={this.state.branchFilter}
                                                   options={classDetails.branches}/>
                                </Form.Field>
                            </Form.Group>
                        </Form>

                        <Segment>
                            <Grid columns={2}>
                                <Grid.Column width={12}>
                                    <Label.Group tag>
                                        { this.state.dateFilter &&
                                        <Label size="medium" as='a'
                                               onClick={() => this.resetFilter('date')}>{this.getFilterLabel('date')}
                                            <Icon name='close'/>
                                        </Label>
                                        }
                                        { this.state.monthFilter &&
                                        <Label size="medium" as='a'
                                               onClick={() => this.resetFilter('month')}>{this.getFilterLabel('month')}
                                            <Icon name='close'/>
                                        </Label>
                                        }
                                        { this.state.yearFilter &&
                                        <Label size="medium" as='a'
                                               onClick={() => this.resetFilter('year')}>{this.getFilterLabel('year')}
                                            <Icon name='close'/>
                                        </Label>
                                        }
                                        { this.state.classFilter &&
                                        <Label size="medium" as='a'
                                               onClick={() => this.resetFilter('class')}>{this.getFilterLabel('class')}
                                            <Icon name='close'/>
                                        </Label>
                                        }
                                        { this.state.branchFilter &&
                                        <Label size="medium" as='a'
                                               onClick={() => this.resetFilter('branch')}>{this.getFilterLabel('branch')}
                                            <Icon name='close'/>
                                        </Label>
                                        }

                                    </Label.Group>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button floated="right" icon="close"
                                            content="Clear All"
                                            onClick={(e)=>this.clearFilters(e)}
                                            size="mini"
                                            inverted color='red'/>
                                </Grid.Column>
                            </Grid>
                        </Segment>


                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Class</Table.HeaderCell>
                                    <Table.HeaderCell>Roll No.</Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.results.map((result) => {
                                        return <Table.Row key={result.id}>
                                            <Table.Cell>{result.class}</Table.Cell>
                                            <Table.Cell>{result.rollNo}</Table.Cell>
                                            <Table.Cell>{result.name}</Table.Cell>
                                            <Table.Cell width={4} active={this.state.editingAttendance[result.id]}>
                                                {
                                                    this.state.editingAttendance[result.id] ?
                                                        <Form>
                                                            <Form.Group inline>
                                                                <Form.Field>
                                                                    <Checkbox
                                                                        radio
                                                                        label='Present'
                                                                        name='attendanceRadioGroup'
                                                                        value='Present'
                                                                        checked={result.attendanceStatus === 'Present'}
                                                                        onChange={(e) => this.changeAttendanceStatus('Present', result)}
                                                                        />
                                                                </Form.Field>
                                                                <Form.Field>
                                                                    <Checkbox
                                                                        radio
                                                                        label='Absent'
                                                                        name='attendanceRadioGroup'
                                                                        value='Absent'
                                                                        checked={result.attendanceStatus === 'Absent'}
                                                                        onChange={(e) => this.changeAttendanceStatus('Absent', result)}
                                                                        />
                                                                </Form.Field>
                                                            </Form.Group>
                                                        </Form>
                                                        :
                                                        <div>
                                                            {result.attendanceStatus === 'Present' ?
                                                                <Icon color='green' name='checkmark'/> :
                                                                <Icon color='red' name='close'/>}
                                                            {result.attendanceStatus}
                                                            <Button floated="right" icon="pencil"
                                                                    onClick={()=>this.editAttendance(result.id)}
                                                                    circular size="mini"
                                                                    inverted color='teal'/>
                                                        </div>
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    })
                                }
                                {/*<Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>101</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='green' name='checkmark'/>Present
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>102</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='red' name='close'/>Absent
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>103</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='green' name='checkmark'/>Present
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>104</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='green' name='checkmark'/>Present
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>105</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='green' name='checkmark'/>Present
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Class X</Table.Cell>
                                    <Table.Cell>106</Table.Cell>
                                    <Table.Cell>Dharmendra Nagda</Table.Cell>
                                    <Table.Cell><Icon color='green' name='checkmark'/>Absent
                                        <Button floated="right" icon="pencil"
                                                onClick={(e)=>this.onModalClose(true)}
                                                circular size="mini"
                                                inverted color='teal'/>
                                    </Table.Cell>
                                </Table.Row>*/}
                            </Table.Body>
                            </Table>
                        </Segment>
                </Segment>
        );
    }
}
export default Attendance;

