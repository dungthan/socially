import { Meteor } from 'meteor/meteor';
import '../imports/api/parties';

Meteor.startup(() => {
	// if (Parties.find().count() === 0) {
	// 	const parties = [{
	// 		name: 'Dubstep-Free Zone',
	// 		description: 'Fast just got faster with Nexus S.'
	// 	}, {
	// 		name: 'All dubstep all the time',
	// 		description: 'Get it on!'
	// 	}, {
	// 		name: 'Savage lounging',
	// 		description: 'Leisure suit required. And only fiercest manners.'
	// 	}];

	// 	parties.forEach((party) => {
	// 		party.owner = Meteor.userId();
	// 		console.log(party);
	// 		//party.owner = Meteor.user()._id;
	// 		//Parties.insert(party);
	// 	})
	// }
});