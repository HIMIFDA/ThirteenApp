
// smart component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import FooterApp from '../../Components/Footer';
import { 
  Container, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Body
} from 'native-base';
import * as env from '../../config';

class PeopleContainer extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title: 'People',
    };

    componentDidMount() {
        this.props.setActiveTab('People')
    }

    render() {
        return (

            <Container>

                <Content>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem>
                      <Thumbnail square size={80} source={{ uri: `${env.FEATURED_IMAGE_URL}/Helicopter-Featured-Image-300x169.jpg`}} />
                      <Body>
                        <Text>Sankhadeep</Text>
                        <Text note>Its time to build a difference . .</Text>
                      </Body>
                    </ListItem>
                  </List>

                </Content>

                <FooterApp {...this.props} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
