import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  Dimensions
} from 'react-native';
import { 
  Content,
  Container
} from 'native-base';
import FooterApp from '../../Components/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

const { height, width } = Dimensions.get('window');

const LATITUDE = -6.2302379;
const LONGITUDE = 106.9243849;
const LATITUDE_DELTA = 0.0222;
const LONGITUDE_DELTA = 0.0201;

class MapContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Map`,
  });
  
  componentWillMount() {
      this.props.setActiveTab('Map');
  }

  render() {
      return (
          <Container>
              <Content>
                <MapView
                  style={{width: width, height: height}}
                  initialRegion={{latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA}}
                  >
                    <MapView.Marker
                      coordinate={{latitude: -6.2302379, longitude: 106.9243849}}
                      title={'UNSADA'}
                      description={'UNIVERSITAS DARMA PERSADA'}
                    />
                </MapView>
              </Content>

              <FooterApp {...this.props} />
          </Container>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        currentTab: state.currentTab
    } 
}, mapDispatchToProps)(MapContainer);