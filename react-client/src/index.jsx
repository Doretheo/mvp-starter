/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
// import { generateMedia } from 'styled-media-query';
import ToolBar from './components/Toolbar';
import Images from './components/Images';
import stars from '../../images/stars.png';

// const media = generateMedia({
//   xs: '250px',
//   sm: '450px',
//   md: '768px',
//   lg: '1200px',
// });

const id1 = Math.floor((Math.random() * (750000 - 700000)) + 670000);
const id2 = id1 + 1;
const id3 = id1 + 2;
const id4 = id1 + 3;

const MainPage = styled.div`
  display: flex;
  height: 100%;
  font-family: 'Sorts Mill Goudy', serif;
  overflow: auto;
  background-image: url(${stars});
  background-size: cover;
  color: white;
`;

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.grabApiData = this.grabApiData.bind(this);
  }

  // componentDidMount() {
  //
  // }

  grabApiData() {
    axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=f581eb286bca45079c218cb064acc112&ids=${id1},${id2},${id3},${id4}`)
      .then((res) => res.data)
      .then((response) => {
        response.map((recipe) => axios.post('/api/spoonacular', {
          cheap: recipe.cheap,
          cuisine: recipe.cuisine,
          dishTypes: recipe.dishTypes,
          extendedIngredients: recipe.extendedIngredients,
          healthScore: recipe.healthScore,
          id: recipe.id,
          image: recipe.image,
          instructions: recipe.instructions,
          pricePerServing: recipe.pricePerServing,
          servings: recipe.servings,
          readyInMinutes: recipe.readyInMinutes,
          summary: recipe.summary,
          title: recipe.title,
          weightWatcherSmartPoints: recipe.weightWatcherSmartPoints,
          vegan: recipe.vegan,
          vegetarian: recipe.vegetarian,
        }));
      })
      .catch();
  }

  render() {
    return (
      <MainPage>
        <ToolBar />
        <Grid>
          <Images />
        </Grid>
      </MainPage>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
