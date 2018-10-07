/**
*
* AuthLoadingScreen
*
*/

import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Item, Text, Button } from 'native-base';
import { View } from 'react-native';

class Exam1Screen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    result: 0
  }

  hendleFindX = (input = '3, 5, 9, 15, X') => {
    const replactInput = input.replaceAll(" ", "");
    const splitInput = replactInput.split(",");
    let result = 0
    const recursion = (index) => {
      if (index < splitInput.length - 1) {
        const positive = (index * 2) + 2
        result = positive + Number(splitInput[index])
        return recursion(index + 1);
      } else {
        return result;
      }
    };
    return recursion(0);
  }

  render () {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Item>
          <Text style={{ paddig: 20 }}>
            3, 5, 9, 15, X  - Please create new function for finding X
          </Text>
        </Item>
        <Text>
          X =
          {
            this.hendleFindX()
          }
        </Text>
        <Button
          full
          info
          onPress={() => this.props.navigation.navigate('Exam2Screen')}
        >
          <Text>next</Text>
        </Button>
      </View>
    );
  }
}

Exam1Screen.propTypes = {

};

export default Exam1Screen;
