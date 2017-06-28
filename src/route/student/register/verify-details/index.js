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
        this.onPrintClick = this.onPrintClick.bind(this);
    }

    onPrintClick() {
        this.props.showToastr('success', "Student Form", "Please wait...     Preparing for printing");
        window.print();
    }

    render() {
        return (
            <Segment basic className="no-padding-segment">
                <div id="myDivToPrint">
                    <Label size="large" onClick={this.onPrintClick} as='a' color='red' corner='right' icon="print"/>
                    <Grid columns={2}>
                        <Grid.Column width={12}>
                            <Segment color="teal" raised>
                                <Label as='a' color='teal' ribbon>Basic Details</Label>
                                <Segment.Group horizontal>
                                    <Segment>
                                        <Label attached="top" color="blue"> First Name</Label>

                                        <div>Mudit</div>
                                    </Segment>
                                    <Segment>
                                        <Label attached="top" color="blue"> Last Name</Label>

                                        <div>Ojha</div>
                                    </Segment>
                                    <Segment>
                                        <Label attached="top" color="blue">DOB</Label>

                                        <div>22-Sep-1992</div>
                                    </Segment>
                                </Segment.Group>
                                <Segment.Group horizontal>
                                    <Segment>
                                        <Label attached="top" color="blue">Email</Label>

                                        <div>ojha.mudit@gmail.com</div>
                                    </Segment>
                                    <Segment>
                                        <Label attached="top" color="blue">Contact</Label>

                                        <div>+91-9876543210</div>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <Label attached="top" color="blue">Address</Label>

                                    <div>12, Prithviraj Nagar, Bundi, Rajasthan</div>
                                </Segment>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Divider hidden/>
                            <Image className='image-styles'
                                   shape="rounded" bordered
                                   src={USER_IMAGE}
                                   size="big"/>

                        </Grid.Column>
                    </Grid>

                    <Grid>
                        <Grid.Column>
                            <Segment color="teal" raised>
                                <Label as='a' color='teal' ribbon>Enrollment</Label>
                                <Segment.Group horizontal>
                                    <Segment basic>
                                        <Label attached="top" color="blue">Class</Label>

                                        <div>XI (A)</div>
                                    </Segment>
                                    <Segment basic>
                                        <Label attached="top" color="blue">Branch/Stream</Label>

                                        <div>Science-Maths</div>
                                    </Segment>
                                    <Segment basic>
                                        <Label attached="top" color="blue">Session</Label>

                                        <div>2017-2018</div>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid>

                    <Grid>
                        <Grid.Column>
                            <Segment color="teal" raised>
                                <Label as='a' color='teal' ribbon>Parent's Detail</Label>
                                <Segment.Group horizontal>
                                    <Segment basic>
                                        <Label attached="top" color="blue">Father</Label>
                                        <Grid columns={2} divided>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Name</span></Grid.Column>
                                                <Grid.Column width={10}>Nhi btaunga</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">DOB</span></Grid.Column>
                                                <Grid.Column width={10}>08-09-1964</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span
                                                    color="blue">Occupation</span></Grid.Column>
                                                <Grid.Column width={10}>Government Service</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span
                                                    color="blue">Qualification</span></Grid.Column>
                                                <Grid.Column width={10}>B.Com</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Email</span></Grid.Column>
                                                <Grid.Column width={10}>nhibtaunga1964@gmail.com</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Mobile</span></Grid.Column>
                                                <Grid.Column width={10}>9876543210</Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Segment>
                                    <Segment>
                                        <Label attached="top" color="blue">Mother</Label>
                                        <Grid columns={2} divided>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Name</span></Grid.Column>
                                                <Grid.Column width={10}>Bola na nhi btaunga</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">DOB</span></Grid.Column>
                                                <Grid.Column width={10}>08-09-1964</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span
                                                    color="blue">Occupation</span></Grid.Column>
                                                <Grid.Column width={10}>Government Service</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span
                                                    color="blue">Qualification</span></Grid.Column>
                                                <Grid.Column width={10}>B.Com</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Email</span></Grid.Column>
                                                <Grid.Column width={10}>g1966@gmail.com</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={6}><span color="blue">Mobile</span></Grid.Column>
                                                <Grid.Column width={10}>9876543210</Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Grid>
                        <Grid.Column>
                            <Segment color="teal" raised>
                                <Label as='a' color='teal' ribbon>Educational Details</Label>
                                <Segment.Group horizontal>
                                    <Label color="blue">X</Label>
                                    <Segment padded>-</Segment>
                                    <Segment padded>80%</Segment>
                                    <Segment padded>Rawat Sr. Sec. High School</Segment>
                                    <Segment padded>2017</Segment>
                                </Segment.Group>
                                <Segment.Group horizontal>
                                    <Label color="blue">IX</Label>
                                    <Segment padded>-</Segment>
                                    <Segment padded>70%</Segment>
                                    <Segment padded>Rawat Sr. Sec. High School</Segment>
                                    <Segment padded>2016</Segment>
                                </Segment.Group>
                                <Segment.Group horizontal>
                                    <Label color="blue">VIII</Label>
                                    <Segment padded>-</Segment>
                                    <Segment padded>75%</Segment>
                                    <Segment padded>Rawat Sr. Sec. High School</Segment>
                                    <Segment padded>2015</Segment>
                                </Segment.Group>
                                <Segment.Group horizontal>
                                    <Label color="blue">VII</Label>
                                    <Segment padded>-</Segment>
                                    <Segment padded>85%</Segment>
                                    <Segment padded>Dafodills Sr. Sec. High School</Segment>
                                    <Segment padded>2014</Segment>
                                </Segment.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </Segment>
        );
    }
}
export default Result;

