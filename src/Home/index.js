import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = { searching: false }
    }
    
    searchPressed() {
        this.setState({ searching: true });
        this.props.fetchReferences(11).then( (res) => {
          this.setState({ searching: false })
        });
    }

    references() {
      return Object.keys(this.props.searchedReferences).map(key => this.props.searchedReferences[key])
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button danger onPress={() => this.searchPressed()} >
                        <Text>Search References</Text>
                    </Button>
                    { !this.state.searching &&
                        this.references().map((reference) => {
                            return (
                                 <Card style={{ flex: 1 }} key={reference.id}>
                                     <CardItem>
                                         <Left>
                                             <Body>
                                                 <Text>{reference.title}</Text>
                                                 <Text note>{reference.writer}</Text>
                                             </Body>
                                         </Left>
                                     </CardItem>
                                     <CardItem>
                                         <Body>
                                             <Image style={{ resizeMode: 'cover', height: 200, width: 360}} source={{ uri: reference.image }} />
                                             <Button transparent textStyle={{color: '#87838B'}}
                                                onPress={() => navigate('Detail', { book: reference })}
                                                title="Detail"
                                             >
                                                 <Text>Detail</Text>
                                                 <Icon name="arrow-forward" />
                                             </Button>
                                         </Body>
                                     </CardItem>
                                </Card>
                            );
                        })  
                    }
                    {this.state.searching ? <Text>Searching...</Text> : null }
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedReferences: state.searchedReferences
    }
}

export default connect(mapStateToProps)(Home);
