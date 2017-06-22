/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { Button, Form, Segment, Link, Icon, Input, Divider ,Label ,Dropdown } from 'semantic-ui-react'
import LogoLogin from '../../../assets/image/logo-login.png';
    import DatePicker from 'react-datepicker';
    import  '../../../../node_modules/react-datepicker/dist/react-datepicker.css';
    import { observable } from 'mobx';
    import {observer} from 'mobx-react';
    import Moment from 'moment';
    import {browserHistory} from 'react-router';

const options = [
    {key: 'Mr.', text: 'Mr.', value: 'Mr.'},
    {key: 'Ms.', text: 'Ms.', value: 'Ms.'},
    {key: 'Mrs.', text: 'Mrs.', value: 'Mrs.'}
];

@observer
class SignUp extends Component {

    @observable selectedDate;

    constructor(props) {
        super(props);
        this.handleDOBChange = this.handleDOBChange.bind(this);
    }

    handleDOBChange(a, b, c) {
        this.selectedDate = a
    }


    render() {
        return (
            <div className="signup-form-container">
                <Segment className={"login-box"}>
                    <img className="signup-logo" src={LogoLogin}/>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field width={6}>
                                <Input placeholder='First name' labelPosition='left' required
                                       label={<Dropdown defaultValue='Mr.' options={options}/>}/>
                            </Form.Field>
                            <Form.Input width={5} placeholder='Last name' required/>
                        </Form.Group>
                        <Form.Input fluid label='Email' placeholder='someone@example.com' required icon='mail'
                                    iconPosition='left'/>
                        <Form.Input fluid label='Contact' placeholder='Do not include country code like : +91-' required
                                    icon='tablet'
                                    iconPosition='left'/>
                        <Form.Input fluid type="password" label='New Password' placeholder='Create Password' required
                                    icon="lock"
                                    iconPosition='left'/>
                        <Form.Group>
                            <Form.Group inline>
                                <label>DOB</label>
                                <DatePicker required
                                            selected={this.selectedDate}
                                            onChange={this.handleDOBChange}
                                            isClearable={true}
                                            dateFormat="DD/MM/YYYY"
                                            maxDate={Moment()}
                                            isClearable={true}
                                            placeholderText="DD/MM/YY"
                                    />
                            </Form.Group>
                            <Form.Field>
                            <Divider hidden vertical/>
                                </Form.Field>
                            <Form.Group inline>
                                <label>Gender</label>
                                <Form.Radio label='Male'/>
                                <Form.Radio label='Female'/>
                            </Form.Group>
                            </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions'/>
                        <Form.Group inline widths='equal'>
                            <Button primary animated
                                    onClick={(event) => {
                                    event.preventDefault();
                                    localStorage.setItem('isUserLoggedIn',true);
                                    browserHistory.replace('/student')}
                                    }>
                                <Button.Content visible>Sign Up</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='right arrow'/>
                                </Button.Content>
                            </Button>
                            <a href onClick={(event) => {event.preventDefault(); browserHistory.replace('/')}}>
                                Already have an account ?
                            </a>
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        );
    }
}
export default SignUp;
