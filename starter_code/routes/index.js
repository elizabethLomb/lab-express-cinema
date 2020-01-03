const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// movie list
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies });
  }).catch(error => next(error))
})

// movie detail
router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id
	if(!mongoose.Types.ObjectId.isValid(id)){
		next(createError(404));
	}

  Movie.findById(id)
  .then(movie => {
    res.render('detail', { movie })
    console.log('console----->', movie)
  }).catch(error => next(error))
})

module.exports = router;
