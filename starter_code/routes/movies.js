const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.model');

/*movies list*/
// router.get('/movies', (req, res, next) => {
//   Movie.find()
//   .then(movies => {
//     res.render('movies', { movies });
//   }).catch(error => next(error))
// })


module.exports = router;