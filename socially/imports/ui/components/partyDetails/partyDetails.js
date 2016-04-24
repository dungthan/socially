import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './partyDetails.html';
import { Parties } from '../../../api/parties';

class PartiesDetail {
	constructor($stateParams) {
		'ngInject';

		this.partyId = $stateParams.partyId;
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
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('partyDetails', {
		url: '/parties/:partyId',
		template: '<party-details></party-details>'
	});
}