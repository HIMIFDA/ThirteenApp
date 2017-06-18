
// dumb component

import React, { Component, PropTypes } from 'react';
import {
    Image
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';

export default class HomeList extends Component {
    
    static propTypes = {
      title: PropTypes.string,
      writer: PropTypes.string,
      image: PropTypes.string
    };

    render() {
        const { id, title, writer, image } = this.props;
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>{title}</Text>
                            <Text note>{writer}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image style={{ resizeMode: 'cover', height: 200, width: 360}} source={{ uri: image }} />
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

