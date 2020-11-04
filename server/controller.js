const model = require('../database-mongo');

const postData = (req, res) => {
  const recipe = req.body;
  model.Recipes.create(recipe)
    .then(() => res.status(200).send('Posted'))
    .catch((err) => res.status(400).send('Error posting', err));
};

const getRecipes = (req, res) => {
  const { cuisine } = req.params;

  model.Recipes.find({ cuisine })
    .then((recipes) => res.status(200).send(recipes))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  postData,
  getRecipes,
};
