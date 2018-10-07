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

class Exam2Screen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  hendleFindY = (input = '( Y + 24) + (10 * 2) = 99') => {
    let replactInput = input.replaceAll(" ", "");
    replactInput = replactInput.replaceAll("(", "");
    replactInput = replactInput.replaceAll(")", "");
    replactInput = replactInput.replaceAll("Y", "0");
    const splitInput = replactInput.split("=")[0];
    const result = Number(replactInput.split("=")[1]);
    return result - eval(splitInput)
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
            (Y + 24)+(10 × 2) = 99  - Please create new function for finding Y
          </Text>
        </Item>
        <Text>
          X =
          {
            this.hendleFindY()
          }
        </Text>
        <Button
          full
          info
          onPress={() => this.props.navigation.navigate('Exam3Screen')}
        >
          <Text>next</Text>
        </Button>
      </View>
    );
  }
}

Exam2Screen.propTypes = {

};

export default Exam2Screen;
