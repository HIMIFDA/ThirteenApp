
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
        this.state = { searching: false };
    }

    static navigationOptions = {
      title: 'Welcome',
    };

    componentWillMount() {
        this.props.setActiveTab('Home')
    }

    searchPressed = () => {
        this.setState({ searching: true });
        this.props.fetchReferences(11).then( (res) => {
          this.setState({ searching: false })
        });
    }

    render() {
        return (
            <Container>
                <Home {...this.props} searchPressed={this.searchPressed} searching={this.state.searching} />

                <FooterApp {...this.props} />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchedReferences: state.searchedReferences,
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
