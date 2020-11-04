const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/oneNightMeal');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const appSchema = mongoose.Schema({
  cheap: Boolean,
  cuisine: Array,
  dishTypes: Array,
  extendedIngredients: Array,
  healthScore: Number,
  id: Number,
  image: String,
  instructions: String,
  pricePerServing: Number,
  servings: Number,
  readyInMinutes: Number,
  summary: String,
  title: String,
  weightWatcherSmartPoints: Number,
  vegan: String,
  vegetarian: String,
});

const Recipes = mongoose.model('Recipes', appSchema);

module.exports = {
  Recipes,
};
