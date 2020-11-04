/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Ingredients from './Ingredients';
import gradient from '../../../images/gradient.jpg';

const ShowRecipes = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  top: 150px;
  background-image: url(${gradient});
  background-size: cover;
  transition: fade-in linear 3s;
  overflow: auto;
`;

const Grid = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  width: inherit;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 40px;
  color: black;
`;

const Details = styled.div`
  width: inherit;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding-top: 2vh;
  color: black;
`;

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      showRecipes: false,
      showIngredients: false,
      ingredients: [],
      cuisineRecipes: [],
      image: '',
      title: '',
      instructions: '',
    };
    this.displayIngredients = this.displayIngredients.bind(this);
  }

  componentDidMount() {
    const { showRecipes, cuisineRecipes } = this.props;
    this.setState({
      showRecipes,
      cuisineRecipes,
    });
  }

  displayIngredients(data, image, title, instructions) {
    console.log(data);
    this.setState({
      showIngredients: true,
      ingredients: data,
      image,
      title,
      instructions,
    });
  }

  render() {
    const {
      showIngredients, ingredients, image, title, instructions,
    } = this.state;
    const { showRecipes, cuisineRecipes } = this.props;
    const recipes = cuisineRecipes.map((recipe) => {
      const {
        cheap,
        cuisine,
        dishTypes,
        extendedIngredients,
        id,
        image,
        instructions,
        pricePerServing,
        servings,
        readyInMinutes,
        summary,
        title,
        weightWatcherSmartPoints,
        vegan,
        vegetarian,
      } = recipe;

      return (
        <Grid>
          <Row>
            {/* column 1 */}
            <Col size={1}>
              <img src={image} alt="new" />
            </Col>
            {/* column 2 */}
            <Col size={2}>
              {/* Title Row */}
              <Row>
                <Col size={1}>
                  <Title
                    onClick={() => this.displayIngredients(
                      extendedIngredients, image, title, instructions,
                    )}
                  >
                    {title}
                  </Title>
                  <Row>
                    <Col size={1}>
                      <Row>
                        <Col size={0.7}>
                          <Details>Vegan</Details>
                          <Details>Vegetarian</Details>
                          <Details>Preparation Time</Details>
                          <Details>Price</Details>
                          <Details>Servings</Details>
                          <Details>Weight Watcher Points</Details>
                        </Col>
                        <Col size={0.1}>
                          <Details>{vegan}</Details>
                          <Details>{vegetarian}</Details>
                          <Details>{readyInMinutes}</Details>
                          <Details>${pricePerServing}</Details>
                          <Details>{servings}</Details>
                          <Details>{weightWatcherSmartPoints}</Details>
                        </Col>
                      </Row>
                    </Col>
                    <Col size={1}>
                      <Details>Summary:</Details>
                      <Details>{summary}</Details>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      );
    });




    return (
      <ShowRecipes>
        <Grid>
          {recipes}
          {
          showIngredients
          && (
            <Ingredients
              ingredients={ingredients}
              image={image}
              title={title}
              instructions={instructions}
            />
          )
          }
          {/* <Ingredients /> */}
        </Grid>
      </ShowRecipes>
    );
  }
}

export default Recipes;
