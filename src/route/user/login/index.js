/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import { Button, Form, Segment, Link, Icon, Divider } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import '../styles.css';
import LogoLogin from '../../../assets/image/logo-login.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn(e) {
        e.preventDefault();
        this.props.showToastr('success', 'Login Successful !', 'User user1 has been logged in');
        localStorage.setItem("isUserLoggedIn", true);
        browserHistory.push('/student');
    }

    render() {
        return (
            <div className="login-form-container">
                <Segment className={"login-box"}>
                    <img className="login-logo" src={LogoLogin}/>
                    <Form>
                        <Form.Input fluid label='User name' placeholder='User name' icon="user" iconPosition='left'/>
                        <Form.Input fluid type="Password" label='Password' placeholder='Password' icon="lock"
                                    iconPosition='left'/>
                        <Form.Field>
                            <a href onClick={(event) => {event.preventDefault(); browserHistory.push('/verify-user')}}>
                                Forgot Password ?
                            </a>
                        </Form.Field>
                        <Button.Group vertical className="login-buttons-container">
                            <Button positive animated fluid onClick={ (e) => this.handleSignIn(e) }>
                                <Button.Content visible>Sign In</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='right arrow'/>
                                </Button.Content>
                            </Button>
                            <Divider horizontal>Or</Divider>
                            <Button secondary animated fluid
                                    onClick={ (e) => { e.preventDefault(); browserHistory.push('/signup')}}>
                                <Button.Content visible>Sign Up</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='compose'/>
                                </Button.Content>
                            </Button>
                        </Button.Group>
                    </Form>
                </Segment>
            </div>
        );
    }
}
export default Login;
