/**
 * Created by Yogesh Chaturvedi on 11-06-2017.
 */
import React, {Component} from 'react';
import {observable} from 'mobx';
import { observer } from 'mobx-react';
import { Grid, Image, Label, Segment, Divider } from 'semantic-ui-react'
import USER_IMAGE from '../../../../assets/image/student_user_image.png';


@observer
class Result extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={12}>
                        <Segment raised>
                            <Label as='a' color='teal' ribbon>Basic Details</Label>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Label attached="top" color="teal"> First Name</Label>

                                    <div>Amit</div>
                                </Segment>
                                <Segment>
                                    <Label attached="top" color="teal"> Last Name</Label>

                                    <div>Sirohiya</div>
                                </Segment>
                                <Segment>
                                    <Label attached="top" color="teal">DOB</Label>

                                    <div>22-Sep-1992</div>
                                </Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Label attached="top" color="teal">Email</Label>

                                    <div>amitsirohiya22@gmail.com</div>
                                </Segment>
                                <Segment>
                                    <Label attached="top" color="teal">Contact</Label>

                                    <div>+918233229747</div>
                                </Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Label attached="top" color="teal">Father's Name</Label>

                                    <div>Rajesh Sirohiya</div>
                                </Segment>
                                <Segment>
                                    <Label attached="top" color="teal">Mothers's Name</Label>

                                    <div>Gayatri Sirohiya</div>
                                </Segment>
                            </Segment.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>

                            <Label as='a' color='blue' ribbon="right">Picture</Label>
                            <Image className='image-styles'
                                   shape="rounded" bordered
                                   src={USER_IMAGE}
                                   size="big"/>

                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <Segment>
                            <Label as='a' color='orange' ribbon>Educational Details</Label>
                                <Segment.Group horizontal>
                                    <Label color="orange">X</Label>
                                    <Segment padded>
                                       80%
                                    </Segment>
                                    <Segment padded>
                                       First Division
                                    </Segment>
                                    <Segment padded>
                                        I
                                    </Segment>
                                </Segment.Group>
                            <Segment.Group horizontal>
                                <Label color="orange">IX</Label>
                                <Segment padded>
                                    70%
                                </Segment>
                                <Segment padded>
                                    First Division
                                </Segment>
                                <Segment padded>
                                    III
                                </Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Label color="orange">VIII</Label>
                                <Segment padded>
                                    60%
                                </Segment>
                                <Segment padded>
                                    First Division
                                </Segment>
                                <Segment padded>
                                    XX
                                </Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Label color="orange">VII</Label>
                                <Segment padded>
                                    50%
                                </Segment>
                                <Segment padded>
                                    Second Division
                                </Segment>
                                <Segment padded>
                                    XXI
                                </Segment>
                            </Segment.Group>

                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}
export default Result;

