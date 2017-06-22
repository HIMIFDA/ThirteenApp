
// dump component

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions
} from 'react-native';
import { Container, Content, Text, Spinner } from 'native-base';
import HTMLView from 'react-native-htmlview';
import * as env from '../../config';

const { width } = Dimensions.get('window');

export default class Post extends Component {

    render() {
        const post = this.props.post;
        return (
            <Content>
                <Image style={styles.featuredImage} source={{ uri: `${env.FEATURED_IMAGE_URL}/${post.featured_image}` }} />                            

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        {post.title}
                    </Text>
                    <Text note style={styles.date}>{post.created_at}</Text>

                    <View style={styles.content}>
                        <HTMLView
                          value={post.content}
                        />
                    </View>
                </View>
            </Content>
        )
    }
}

const styles = {
    contentContainer: {
      marginTop: 8,
      marginLeft: 4,
      marginRight: 4,
      paddingBottom: 80
    },
    title: {
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        paddingLeft: 5,
    },
    content: {
        marginTop: 15
    },
    contentText: {
        paddingRight: 10,
        paddingLeft: 10
    },
    contentText2: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10
    },
    featuredImage: {
      resizeMode: 'cover',
      height: 200,
      width: width
    },
};
