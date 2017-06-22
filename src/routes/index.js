import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Modules/Home/HomeContainer';
import MapScreen from '../Modules/Map/MapContainer';
import PeopleScreen from '../Modules/People/PeopleContainer';
import PostScreen from '../Modules/Post/PostContainer';

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Map: {screen: MapScreen},
  People: {screen: PeopleScreen},
  Post: {screen: PostScreen},
});

export default Routes;