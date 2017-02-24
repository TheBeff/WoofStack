'use strict'

const axios = require('axios');

const db = require('APP/db')
const Dog = db.model('dogs')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

const changedPuppy = {id: 2, name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'absent'};

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
  .put('/:id', (req, res, next) => {
		Dog.findById(req.params.id)
		.then(dog => {
			var isHere = dog.attendance === 'present' ? 'absent' : 'present';
			return dog.update({
				attendance: isHere
			}, {returning: true});
		})
		.then((updated) => {
			var payload = {
				channel: '#woofstack',
				username: 'Woofstack',
				text: `${updated.name} is on campus! Please come to floor ${updated.floor} rub my ${updated.preferredPettings[0]}. Visit https://wpjjvhnzkz.localtunnel.me to see who else is on campus today!`
			};

			axios.post('https://hooks.slack.com/services/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', payload)
			.then(() => {
				Dog.findAll()
				.then(dogs => res.status(201).send(dogs));
			})
			.catch(next);
		})
		.catch(next);
	});
