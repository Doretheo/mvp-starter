/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Recipes from './Recipes';

import asianImg from '../../../images/chinese2.jpg';
import frenchImg from '../../../images/french.jpg';
import italianImg from '../../../images/italian.jpg';
import dessertImg from '../../../images/dessert.jpg';
import sideDishImg from '../../../images/sideDish.jpg';
import logoImg from '../../../images/logo.jpg';

const Grid = styled.div`
  position: relative;
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

const Title = styled.div`
  font-size: 40px;
  font-family: 'Sorts Mill Goudy', serif;
  z-index: 1;
  width: 100vw;
  color: white;
  box-sizing: border-box;
  padding-top: 4vw;
  padding-bottom: 3vw;
  pointer-events: auto;
  text-align: center;
`;

const Text = styled.div`
  position: absolute;
  height: 10%;
  width: 50%;
  text-align: center;
  transform: translate(0px, -400px);
  font-size: 60px;
  opacity: 0;
  z-index: 0;
`;

const Image = styled.div`
  padding: 3% 0% 0% 3%;

`;

const Container = styled.div`
  align-content: center;
  justify-content: center;
  overflow: auto;
  z-index: 1;
  &:hover {
    ${Image} {
      opacity: 0.3;
      transition: opacity ease 2s;
    }
    ${Text} {
      opacity: 1;
      transition: opacity ease 200ms;
    }
  }
`;

class Images extends Component {
  constructor() {
    super();
    this.state = {
      cuisineRecipes: [],
      showRecipes: false,
    };
    this.GetRecipes = this.GetRecipes.bind(this);
    this.cuisineSelection = this.cuisineSelection.bind(this);
    this.returnMainPage = this.returnMainPage.bind(this);
  }

  GetRecipes(cuisine) {
    axios.get(`/recipes/${cuisine}`)
      .then((res) => res.data)
      .then((data) => this.setState({
        cuisineRecipes: data,
        showRecipes: true,
      }))
      .catch((err) => err);
  }

  cuisineSelection(event) {
    const cuisine = event.target.alt;
    this.GetRecipes(cuisine);
  }

  returnMainPage() {
    this.setState({
      showRecipes: false,
    });
  }

  render() {
    const { showRecipes, cuisineRecipes } = this.state;
    return (
      <Grid>
        <Row>
          <Col size={1}>
            <Title onClick={() => this.returnMainPage()}>
              One Night Meal
            </Title>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={sideDishImg}
                  alt="Side dish"
                  height="100%"
                  width="100%"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">Side Dish</Text>
            </Container>
          </Col>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={frenchImg}
                  alt="French"
                  height="100%"
                  width="100%"
                  name="French"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">French</Text>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={italianImg}
                  alt="Italian"
                  height="100%"
                  width="100%"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">Italian</Text>
            </Container>
          </Col>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={logoImg}
                  alt="American"
                  height="100%"
                  width="100%"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">American</Text>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={dessertImg}
                  alt="Dessert"
                  height="100%"
                  width="100%"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">Dessert</Text>
            </Container>
          </Col>
          <Col size={1}>
            <Container>
              <Image>
                <img
                  src={asianImg}
                  alt="Asian"
                  height="100%"
                  width="100%"
                  onClick={(event) => { this.cuisineSelection(event); }}
                />
              </Image>
              <Text className="text">Asian</Text>
            </Container>
          </Col>
        </Row>
        {
          showRecipes
          && (
          <Recipes
            showRecipes={showRecipes}
            cuisineRecipes={cuisineRecipes}
          />
          )
        }
      </Grid>
    );
  }
}
export default Images;
