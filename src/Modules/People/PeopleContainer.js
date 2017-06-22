
// smart component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import People from './People';
import FooterApp from '../../Components/Footer';
import { 
  Container
} from 'native-base';


class PeopleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { searching: false };
    }

    static navigationOptions = {
      title: 'Welcome',
    };

    componentDidMount() {
        this.props.setActiveTab('People')
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
                <People {...this.props} searchPressed={this.searchPressed} searching={this.state.searching} />

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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
