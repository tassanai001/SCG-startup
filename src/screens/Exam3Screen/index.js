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

class Exam3Screen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  hendleFindY = (input = 5) => {
    const starter = 5
    let result = ''
    if (input && input === 1) {
      return starter
    } else {
      var countdown = (value) => {
        let newValue = value
          if (value > 0) {
              if (value === 1) {
                newValue = 5
              }
              result += `${newValue}`;
              return countdown(value - 1);
          } else {
            return result;
          }
      };
      return countdown(input);
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Item>
          <Text style={{ paddig: 20 }}>
            If 1 = 5 , 2 = 25 , 3 = 325 , 4 = 4325 Then 5 = X - Please create new function for finding X value
          </Text>
        </Item>
        <Text>
          Y =
          {
            this.hendleFindY()
          }
        </Text>
      </View>
    );
  }
}

Exam3Screen.propTypes = {

};

export default Exam3Screen;
