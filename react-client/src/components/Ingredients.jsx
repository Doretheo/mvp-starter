import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  width: inherit;
  height: 100%;
  line-height: 70px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Instructions = styled.div`
  text-align: start;
  color: black;
  padding-left: 30%;
`;

const ShowIngredients = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  top: 0;
  transition: fade-in linear 3s;
  overflow: auto;
  background-color: white;
`;

const Title = styled.div`
  font-size: 40px;
  color: black;

`;

const SmallText = styled.div`
  font-size: 40px;
  padding-bottom: 2%;
  color: black;
`;

const Space = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`;

const Detail = styled.div`
  display: relative;
  color: black;
`;

const Image = styled.div`
  width: inherit;
  align-content: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: opacity ease 2s;
  }
`;

const Color = styled.div`
  background-color: #89cff0;
`;

class Ingredients extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      instructions: [],
      ingredients: [],
      aisles: [],
    };
    this.organizeData = this.organizeData.bind(this);
  }

  componentDidMount() {
    this.organizeData();
  }

  organizeData() {
    const {
      ingredients, title, instructions,
    } = this.props;
    const instructionsList = [];
    const ingredientsList = [];
    const aisleList = [];

    const mapIngredients = ingredients.map((ingredient) => {
      const {
        aisle, name,
      } = ingredient;
      aisleList.push(aisle);
      ingredientsList.push(name);
    });

    const mapInstructions = instructions.split('.').map((step) => instructionsList.push(step));
    instructionsList.pop();

    this.setState({
      instructions: instructionsList,
      ingredients: ingredientsList,
      aisles: aisleList,
      title,
    });
  }

  render() {
    const {
      title, ingredients, instructions, aisles
    } = this.state;
    const { image } = this.props;
    return (
      <ShowIngredients>
        <Color>
          <Row>
            <Col size={1}>

              <div><Title>{title}</Title></div>
            </Col>
            <Col size={1}>
              <Image>
                <img src={image} alt="new" />
              </Image>
            </Col>
          </Row>
        </Color>
        <Space />
        <Color>
          <Row>
            <Col size={1}>
              <SmallText>Ingredients: </SmallText>
              {ingredients.map((item) => (
                <Detail>{item}</Detail>
              ))}
            </Col>
            <Col size={1}>
              <SmallText>Grocery Store Aisle: </SmallText>
              {aisles.map((aisle) => (
                <Detail>{aisle}</Detail>
              ))}
            </Col>
          </Row>
        </Color>
        <Space />
        <Color>
          <Row>
            <Col size={1}>
              <Title>Instructions</Title>
            </Col>
            <Col size={1}>
              <Instructions>
                {instructions.map((step) => (
                  <li>{step}</li>
                ))}
              </Instructions>
            </Col>
          </Row>
        </Color>

      </ShowIngredients>
    );
  }
}

export default Ingredients;
