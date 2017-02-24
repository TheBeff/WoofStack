'use strict'

const db = require('APP/db')
const Dog = db.model('dogs')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Dog.findAll()
		.then(dogs => res.json(dogs))
		.catch(next))
	.post('/', (req, res, next) =>
		Dog.create(req.body)
		.then(dog => res.status(201).json(dog))
		.catch(next)
  )
  .put('/:id', (req, res, next) => 
		Dog.findById(req.params.id)
		.then(dog => {
      var isHere = dog.attendance === 'present' ? 'absent' : 'present'
      dog.update({
        attendance: isHere
      })
    })
      .then( () => {
        // slackbot request
      })
		  .catch(next)
    )


