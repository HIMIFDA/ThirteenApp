
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
        this.state = { currentTab: 'Home' };
    }

    static navigationOptions = {
      title: 'Welcome',
    };

    componentWillMount() {
        this.props.setActiveTab('Home')
    }

    render() {
        return (
            <Container>
                <Home {...this.props}/>

                <FooterApp {...this.props} />
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {} 
}, mapDispatchToProps)(HomeContainer);
