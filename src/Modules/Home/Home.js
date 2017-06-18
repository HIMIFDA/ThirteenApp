
// dumb component

import React, { Component, PropTypes } from 'react';
import {
    Image
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Left, Body } from 'native-base';
import HomeList from './HomeList';

export default class Home extends Component {
    
    static propTypes = {
      searching: PropTypes.bool,
      searchedReferences: PropTypes.array,
      searchPressed: PropTypes.func
    };

    references() {
      return Object.keys(this.props.searchedReferences).map(key => this.props.searchedReferences[key])
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button danger onPress={() => this.props.searchPressed()} >
                        <Text>Search References</Text>
                    </Button>
                    { !this.props.searching &&
                        this.references().map((reference) => {
                            return (
                                 <HomeList
                                    key={reference.id}
                                    title={reference.title}
                                    writer={reference.writer}
                                    image={reference.image}
                                 />
                            );
                        })  
                    }
                    {this.props.searching ? <Text>Searching...</Text> : null }
                </Content>
            </Container>
        )
    }
}

