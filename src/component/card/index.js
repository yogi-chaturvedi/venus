/**
 * Created by Yogesh Chaturvedi on 18-06-2017.
 */

import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class Card extends Component {
    constructor(props) {

    }

    render() {
        return (
            <Card.Group>
                {
                    this.props.optionList.map((item)=> {
                        return <Card>
                            <Image src={item.image}/>
                            <Card.Content>
                                <Card.Header>
                                    {item.name}
                                </Card.Header>
                                <Card.Meta>
                                <span className='date'>
                                  {itme.desc}
                                </span>
                                </Card.Meta>
                                <Card.Description>
                                    {itme.detail}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user'/>
                                    {itme.total}
                                </a>
                            </Card.Content>
                        </Card>
                    })
                }

            </Card.Group>
        )
    }
}

export default Card;

