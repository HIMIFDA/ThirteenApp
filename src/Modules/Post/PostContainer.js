
// percobaan {nyicil}

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Dimensions
} from 'react-native';
import { Container, Content, Text, Spinner } from 'native-base';
import FooterApp from '../../Components/Footer';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Post from './Post';

const { width } = Dimensions.get('window');

class PostContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    static navigationOptions = {
      title: 'HIMIFDA BLOG',
    };

    componentDidMount() {
        let postId = this.props.navigation.state.params.postId;
        this.fetchData(postId);
    }

    fetchData = (postId) => {
        this.setState({ loading: true });
        this.props.fetchPost(postId).then( () => {
            this.setState({ loading: false })
        });
    }

    render() {
        const post = this.props.post;
        return (
            <Container style={{backgroundColor: 'white'}}>

                {!this.state.loading ? <Post {...this.props} /> 
                : <Spinner color='red' />}    

                <FooterApp {...this.props}/>

            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
