import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Modules/Home/HomeContainer';
import MapScreen from '../Modules/Map/MapContainer';

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: {screen: MapScreen},
});

export default Routes;