import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './navigation.html'

const name = 'navigation';

export default angular.module(name, [
	angularMeteor
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
})