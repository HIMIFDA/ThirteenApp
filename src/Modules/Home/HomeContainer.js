
// smart component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Home from './Home';
import FooterApp from '../../Components/Footer';
import { 
  Container
} from 'native-base';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    static navigationOptions = {
      title: 'Welcome',
    };

    componentWillMount() {
        this.props.setActiveTab('Home');
        this.fetchData();
    }

    fetchData = () => {
        this.setState({ loading: true });
        this.props.fetchPostsList().then( () => {
            this.setState({ loading: false })
        });
    }

    render() {
        return (
            <Container>
                <Home {...this.props} loading={this.state.loading} />

                <FooterApp {...this.props} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
