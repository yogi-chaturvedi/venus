/**
 * Created by Yogesh Chaturvedi on 16-06-2017.
 */
import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'


class Steps extends Component {

    render() {
        const steps = this.props.steps;
        return (
            <div>
                <Step.Group ordered>
                    {
                        steps.map((step)=> {
                            return <Step active={step.active}
                                         icon={step.icon}
                                         title={step.title}
                                         description={step.description}
                                         completed={step.completed}
                                         link
                                         onClick={this.props.onStepClicked}
                                />
                        })
                    }
                </Step.Group>
            </div>
        )
    }
}

export default  Steps;
