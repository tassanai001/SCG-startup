/**
*
* Header
*
*/

import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

class HeaderCMP extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const pop = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

HeaderCMP.propTypes = {

};

export default HeaderCMP;
