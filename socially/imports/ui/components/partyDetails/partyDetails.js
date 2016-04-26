import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './partyDetails.html';
import { Parties } from '../../../api/parties';

class PartiesDetail {
	constructor($stateParams, $scope, $reactive) {
		'ngInject';

		$reactive(this).attach($scope);

		this.subscribe('parties');
		this.subscribe('users');

		this.helpers({
			party() {
				return Parties.findOne({
					_id: $stateParams.partyId
				});
			},
			users() {
				return Meteor.users.find({});
			}
		});
	}

	save() {
		Parties.update({
			_id: this.party._id
		}, {
			$set: {
				name: this.party.name,
				description: this.party.description,
				public: this.party.public,
			}
		}, (error) => {
			if (error) {
				console.log('Unable to update the party.');
			} else {
				console.log('Done!');
			}
		});
	}
}

const name = 'partyDetails';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: PartiesDetail
}).config(config).run(run);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('partyDetails', {
		url: '/parties/:partyId',
		template: '<party-details></party-details>',
		resolve: {
			currentUser($q) {
				if (Meteor.userId() === null) {
					return $q.reject('AUTH_REQUIRED');
				} else {
					return $q.resolve();
				}
			}
		}
	});
}

function run($rootScope, $state) {
	'ngInject';

	$rootScope.$on('$stateChangeErroe', 
		(event, toState, toParams, fromState, fromParams, error) => {
			if (error === 'AUTH_REQUIRED') {
				$state.$go('parties');
			}
		}
	)
}