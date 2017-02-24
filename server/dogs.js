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


// curl -X POST --data-urlencode 'payload={"channel": "#general", "username": "WoofStack", "text": "${dog.name} is on campus! Please come to floor ${dog.floor} rub my ${dog.preferredPetting[0]}. Visit https://couarsytrd.localtunnel.me to see who else is on campus today!", "icon_emoji": ":ohmydog:"}' https://hooks.slack.com/services/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