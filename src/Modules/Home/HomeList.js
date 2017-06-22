
// dumb component

import React, { Component, PropTypes } from 'react';
import {
    Image,
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Left, Body, Right, Icon } from 'native-base';
import * as env from '../../config';

export default class HomeList extends Component {
    
    static propTypes = {
      id: PropTypes.number,
      title: PropTypes.string,
      featured_image: PropTypes.string
    };

    render() {
        const { navigate } = this.props.navigation;
        const { id, title, content, featuredImage, createdAt } = this.props;
        return (
            <TouchableHighlight
              onPress={() => navigate('Post', { postId: id })}
              title="Post"
            >
               <Card style={styles.cardContainer}>
                <CardItem>
                  <Image style={styles.featuredImage} source={{ uri: `${env.FEATURED_IMAGE_URL}/${featuredImage}` }} />
                  <View style={styles.title}>
                    <Text>{title}</Text>
                  </View>
                  <Right>
                    <Icon style={styles.arrowRed} name="arrow-forward" />
                  </Right>
                 </CardItem>
               </Card>
            </TouchableHighlight>
        );
    }
}

const styles = {
    cardContainer: {
      marginTop: 2,
      marginBottom: 2
    },
    title: {
      width: 210,
      marginLeft: 10
    },
    featuredImage: {
      resizeMode: 'cover',
      height: 100,
      width: 100
    },
    arrowRed: {
      color: 'red',
    },
};

