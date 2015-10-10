'use strict';

import React from 'react-native';

import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import colors from './colors';

class Button extends React.Component {

  getInitialState () {
    return { active: false };
  }

  _onHighlight () {
    this.setState({ active: true });
  }

  _onUnhighlight () {
    this.setState({ active: false });
  }

  render () {

    var colorStyle = {
      color: this.state.active ? colors.cyan : colors.blue,
    };

    return (
      <TouchableHighlight
        onHideUnderlay={ this._onUnhighlight }
        onPress={ this.props.onPress }
        onShowUnderlay={ this._onHighlight }
        style={ [styles.button, this.props.style] }
        underlayColor="transparent">
          <Text style={ [styles.buttonText, colorStyle] }>{ this.props.children }</Text>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    height: 40
  },
  buttonText: {
    fontSize: 18
  }
});

module.exports = Button;
