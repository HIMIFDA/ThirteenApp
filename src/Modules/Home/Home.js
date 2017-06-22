
// dumb component

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Left, Body, Icon, Right, Spinner } from 'native-base';
import HomeList from './HomeList';

export default class Home extends Component {
    
    static propTypes = {
    };

    posts() {
      return Object.keys(this.props.posts).map(key => this.props.posts[key])
    }


    render() {
        return (
            <Container>
                <Content>
                    { this.posts().map((post) => {
                            return (
                                <HomeList
                                  key={post.id}
                                  id={post.id}
                                  title={post.title}
                                  content={post.content}
                                  createdAt={post.created_at}
                                  featuredImage={post.featured_image}
                                  {...this.props}
                                />
                            );
                        })  
                    }
                    {this.props.loading ? <Spinner color='red' /> : null }
                </Content>
            </Container>
        )
    }
}
