/**
 * Created by Amit on 24-08-2017.
 */

import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import {Segment} from "semantic-ui-react";

@observer
class VerifyDetails extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Segment className="step-container"></Segment>
        );
    }
}

export default VerifyDetails;