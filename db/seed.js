const db = require('APP/db')

const seedDogs = () => db.Promise.map([
	{name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'present'},
	{name: 'Bam Bam', imageURL: '/images/Bambam.jpg', parentName: 'Menaka', preferredPettings: ['head'], okToFeed: 'Don\'t feed cereal', notes: '', floor: '11', cohort: '1701-FS-NY', breed: 'Black Lab', age: 7, attendance: 'absent'},
	{name: 'Tulsi', imageURL: '/images/graysweatshirt.jpg', parentName: 'Anna', preferredPettings: ['head'], okToFeed: 'Yes!', notes: 'Please pet me!', floor: '25', cohort: '1610-GH-NY', breed: 'Chiweenie', age: 3, attendance: 'present'},
	{name: 'Bubba', imageURL: '/images/Bubba.jpg', parentName: 'David', preferredPettings: ['head'], okToFeed: 'Come get some treats to give to Bubba!', notes: 'Please don\'t rile me up too much!', floor: '11', cohort: '1610-FS-NY', breed: 'Bulldog', age: 2, attendance: 'absent'},
	{name: 'Sweetpea', imageURL: '/images/orangecoat.jpg', parentName: 'Kat', preferredPettings: ['head'], okToFeed: 'I\'m very delicate, please ask first', notes: 'Kat\'s baby', floor: '11', cohort: '1609-GH-NY', breed: 'Hot Dog', age: 7, attendance: 'absent'},
	{name: 'Rover', imageURL: '/images/patternedcoat.jpg', parentName: 'Robbyn', preferredPettings: ['belly'], okToFeed: 'I like bones', notes: 'Feel free to take me for walks', floor: '11', cohort: '1610-FS-NY', breed: 'Mutt', age: 3, attendance: 'absent'}
], dog => db.model('dogs').create(dog));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedDogs)
  .then(dogs => console.log(`Seeded ${dogs.length} dogs OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
// Add Comment Collapse
