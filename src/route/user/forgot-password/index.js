/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { Button, Form, Segment, Link, Icon, Divider } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import LogoLogin from '../../../assets/image/logo-login.png';
import Message from '.././../../component/message';

class VerifyUser extends Component {
    constructor(props) {
        super(props);
        this.handleVerifyUSer = this.handleVerifyUSer.bind(this);
        this.onCancelClicked = this.onCancelClicked.bind(this);
    }

    handleVerifyUSer(e) {
        e.preventDefault();
        this.props.showToastr('success', 'Email Verify', 'An email containing password sent to register email address');
        browserHistory.push('/');
    }

    onCancelClicked(e) {
        e.preventDefault();
        if (e.target.type === "submit") {
            return;
        }
        console.log(e.target.key);
        browserHistory.replace("/")
    }

    render() {
        return (
            <div className="verify-user-form-container">
                <Segment className={"login-box"}>
                    <img className="verify-user-logo" src={LogoLogin}/>
                    <Form>
                        <Form.Input label='Email' fluid type='email' placeholder='Email' icon="mail"
                                    iconPosition='left'/>
                        <Divider hidden/>
                        <Form.Group>
                            <Button.Group fluid>
                                <Button animated
                                        onClick={ (e) => {this.onCancelClicked(e)} }>
                                    <Button.Content visible>Cancel</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='cancel'/>
                                    </Button.Content>
                                </Button>
                                <Button.Or />
                                <Button positive primary animated onClick={ (e) => this.handleVerifyUSer(e) }>
                                    <Button.Content visible>Verify</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='checkmark'/>
                                    </Button.Content>
                                </Button>
                            </Button.Group>
                        </Form.Group>
                    </Form>
                </Segment>
            </div >
        );
    }
}

export default VerifyUser;
