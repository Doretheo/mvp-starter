import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

const Header = styled.div`
  display: block;
  width: 98.5%;
  top: 0;
  position: fixed;
  background-color: #fff;
  z-index: 3;
  padding: 10px;
  box-shadow: 5px black;
  color: black;
`;

const Text = styled.div`
  font-size: 15px;
`;

const Name = styled.div`
  text-align: center;
`;

const LinkTag = styled.div`
  text-align: right;
`;

class Toolbar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (

      <Header>
        <Row>
          <Col size={1}>
            <Text>Quick Tinder Meals</Text>
          </Col>
          <Col size={3}>
            <Name>Theodore Nguyen</Name>
          </Col>
          <Col size={1}>
            <LinkTag>linkedin.com/in/theodore-t-nguyen/</LinkTag>
          </Col>
        </Row>
      </Header>

    );
  }
}

export default Toolbar;
