import React ,{Component}  from 'react';
import { Button, Modal, Image, Header , Dropdown ,Label , Form, Message, Icon} from 'semantic-ui-react'
import RegisterStore from '../store';
import _ from 'lodash';
import {observable} from 'mobx';
import { observer } from 'mobx-react';

const classOptions = [
    {key: 'select', text: 'Choose class', value: "select"},
    {key: '1', text: '1', value: '1'},
    {key: '2', text: '2', value: '2'},
    {key: '3', text: '3', value: '3'},
    {key: '4', text: '4', value: '4'},
    {key: '5', text: '5', value: '5'},
    {key: '6', text: '6', value: '6'},
];
const sectionOptions = [
    {key: 'select', text: 'Choose section', value: "select"},
    {key: 'A', text: 'A', value: 'A'},
    {key: 'B', text: 'B', value: 'B'},
    {key: 'C', text: 'C', value: 'C'}
];
const sessionOptions = [
    {key: 'select', text: 'Select session', value: "select"},
    {key: '1', text: '2016-17', value: '2016-17'},
    {key: '2', text: '2017-18', value: '2017-19'},
    {key: '3', text: '2018-19', value: '2018-20'}
];
const branchOptions = [
    {key: 'select', text: 'Choose branch', value: "select"},
    {key: 'mathScience', text: 'Math Science', value: 'Math Science'},
    {key: 'commerce', text: 'Commerce', value: 'Commerce'},
    {key: 'arts', text: 'Arts', value: 'Arts'}
];

@observer
class SessionDataModal extends Component {
    @observable showError = false;

    constructor(props) {
        super(props);
        this.onDropdownValueChange = this.onDropdownValueChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    render() {
        return (
            <div>
                <Modal dimmer='blurring' open={this.props.open} size='small'
                       onClose={(e)=>{this.onClose(e)}}
                       closeOnEscape={false}
                       closeOnRootNodeClick={false}>
                    <Header icon="student" content="Select details" color="green"/>
                    <Modal.Content>
                        <Form>
                            <Form.Field error={!RegisterStore.student._class.valid}>
                                <Form.Dropdown required
                                               onChange={(e,value)=>{this.onDropdownValueChange(value,'_class')}}
                                               inline label="Class"
                                               value={RegisterStore.student._class.value ? RegisterStore.student._class.value : 'select'}
                                               options={classOptions}/>
                            </Form.Field>
                            <Form.Field error={!RegisterStore.student.section.valid}>
                                <Form.Dropdown required
                                               onChange={(e,value)=>{this.onDropdownValueChange(value,'section')}}
                                               inline label="Section"
                                               value={RegisterStore.student.section.value  ? RegisterStore.student.section.value : 'select'}
                                               options={sectionOptions}/>
                            </Form.Field>
                            <Form.Field error={!RegisterStore.student.session.valid}>
                                <Form.Dropdown required inline
                                               onChange={(e,value)=>{this.onDropdownValueChange(value,'session')}}
                                               label="Session applied for"
                                               value={RegisterStore.student.session.value  ? RegisterStore.student.session.value : 'select'}
                                               options={sessionOptions}/>
                            </Form.Field>
                            <Form.Field error={!RegisterStore.student.branch.valid}>
                                <Form.Dropdown required inline
                                               onChange={(e,value)=>{this.onDropdownValueChange(value,'branch')}}
                                               label="Branch"
                                               value={RegisterStore.student.branch.value  ? RegisterStore.student.branch.value : 'select'}
                                               options={branchOptions}/>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button secondary icon='trash outline' labelPosition='right' content="Clear"
                                onClick={this.clearForm}/>
                        <Button positive icon='checkmark' labelPosition='right'
                                content="Submit" onClick={(e)=>{this.onClose(e)}}/>
                    </Modal.Actions>
                    {this.showError &&
                    <Message warning>
                        <Icon name='help'/>
                        All fields are required
                    </Message>
                    }

                </Modal>

            </div>
        );
    }

    onDropdownValueChange(value, path) {
        RegisterStore.student[path].valid = value.value !== 'select';
        RegisterStore.student[path].value = value.value;
        this.validateForm();

    }

    clearForm() {
        RegisterStore.student._class.value = "";
        RegisterStore.student._class.valid = false;
        RegisterStore.student.section.value = '';
        RegisterStore.student.section.valid = false;
        RegisterStore.student.session.value = "";
        RegisterStore.student.session.valid = false;
        RegisterStore.student.branch.value = "";
        RegisterStore.student.branch.valid = false;
    }

    validateForm(e) {
        let fields = ['_class', 'section', 'session', 'branch'];
        _.each(fields, (field)=> {
            if (RegisterStore.student[field].value === '' || RegisterStore.student[field].value === 'select') {
                RegisterStore.student[field].valid = false;
            }
        });
        let invalidForm = _.some(fields, (field)=> {
            return RegisterStore.student[field].valid === false;
        });
        if (invalidForm) {
            this.showError = true;
            return false;
        }
        this.showError = false;
        return true;
    }

    onClose(e) {
        if (this.validateForm()) {
            this.props.onClose(e);
        }
    }
}

export default SessionDataModal;
