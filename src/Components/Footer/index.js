import React, { Component } from 'react';
import { 
  Footer,
  FooterTab,
  Button,
  Icon 
} from 'native-base';
import { connect } from 'react-redux';

export default class FooterApp extends Component {

 renderButton(navigateTo = 'Home', title = 'home', icon = 'apps', currentTab = 'Home') {
    
    const { navigate } = this.props.navigation;
    
    if (navigateTo == currentTab) {
        return (
            <Button active
              onPress={() => navigate(`${navigateTo}`)}
              title={title}
            >
                <Icon name={icon} />
            </Button>
        )
    }

    return (
        <Button
          onPress={() => navigate(`${navigateTo}`)}
          title={title}
        >
            <Icon name={icon} />
        </Button>
    )

 }


  render() {
      return (
              <Footer >
                  <FooterTab>

                    {this.renderButton('Home', 'Home', 'apps', this.props.currentTab)}
                    {this.renderButton('People', 'People', 'people', this.props.currentTab)}
                    {this.renderButton('Map', 'Map', 'navigate', this.props.currentTab)}
                    {this.renderButton('User', 'User', 'person', this.props.currentTab)}

                  </FooterTab>
              </Footer>
      );
    }
}