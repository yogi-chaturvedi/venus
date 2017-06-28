/**
 * Created by Yogesh Chaturvedi on 16-06-2017.
 */

import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import Steps from '../../../component/steps';
import _ from 'lodash';
import './styles.css';
import Basic from './basic';
import Educational from './educational';
import VerifyDetails from './verify-details';
import { Button, Icon } from 'semantic-ui-react'

@observer
class RegisterStudent extends Component {
    @observable
        steps = [
            {key: 0, index: 0, completed: false, active: false, title: 'Basic', description: 'Fill the basic details'},
            {
                index: 1,
                completed: false,
                active: false,
                title: 'Education Details',
                description: 'Enter the previous education details'
            },
            {
                index: 2,
                completed: false,
                active: false,
                title: 'Verify',
                description: 'Verify the details once and submit it'
            }
        ];

    constructor(props) {
        super(props);
        this.onStepClicked = this.onStepClicked.bind(this);
        this.getSubComponent = this.getSubComponent.bind(this);
        this.nextButtonClicked = this.nextButtonClicked.bind(this);
        this.backButtonClicked = this.backButtonClicked.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getActiveStep = this.getActiveStep.bind(this);
        // Make the Basic as default active component
        this.steps[0].active = true;
    }

    onStepClicked(e, selectedStep) {
        this.steps = _.map(this.steps, (step)=> {
            step.active = selectedStep.title === step.title;
            return step;
        });
    }

    getActiveStep() {
        return _.find(this.steps, (step)=> {
            return step.active;
        });
    }

    nextButtonClicked(e) {
        e.preventDefault();
        let activeStep = this.getActiveStep();
        if (activeStep.index !== this.steps.length - 1) {
            this.steps[activeStep.index].active = false;
            this.steps[activeStep.index].completed = true;
            this.steps[activeStep.index + 1].active = true;
        }
        else {
        }
        e.target.blur();
        e.target.focus();
    }

    backButtonClicked(e) {
        let activeStep = this.getActiveStep();
        if (activeStep.index !== 0) {
            this.steps[activeStep.index].active = false;
            this.steps[activeStep.index - 1].active = true;
        }
        else {
        }
    }

    submitForm(e) {
        alert("Form Submitted");
    }


    getSubComponent() {
        let activeSubComponent = _.find(this.steps, (step)=> {
            return step.active;
        });
        switch (activeSubComponent.title) {
            case "Basic" :
                return <Basic showToastr={ this.props.showToastr }
                              nextButtonClicked={this.nextButtonClicked}/>;
            case "Education Details" :
                return <Educational showToastr={ this.props.showToastr }
                                    nextButtonClicked={this.nextButtonClicked}
                                    backButtonClicked={this.backButtonClicked}/>
            case "Verify" :
                return <VerifyDetails showToastr={ this.props.showToastr }
                                      nextButtonClicked={this.nextButtonClicked}
                                      backButtonClicked={this.backButtonClicked}/>
            default:
                return <Basic showToastr={ this.props.showToastr }
                              nextButtonClicked={this.nextButtonClicked}/>;
        }
    }

    render() {
        return (
            <div>
                <Steps steps={this.steps} onStepClicked={this.onStepClicked}/>
                {this.getSubComponent()}
                {this.getActiveStep().index === 0 ?
                    null :
                    <Button secondary animated floated="left"
                            onClick={(event) => {this.backButtonClicked(event)}}>
                        <Button.Content visible>Back</Button.Content>
                        <Button.Content hidden>
                            <Icon name='left arrow'/>
                        </Button.Content>
                    </Button>
                }
                <Button positive animated floated="right"
                        onClick={(event) => {this.nextButtonClicked(event)}}>
                    <Button.Content
                        visible>{this.getActiveStep().index === this.steps.length - 1 ? "Submit" : "Next" }</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow'/>
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default RegisterStudent;

