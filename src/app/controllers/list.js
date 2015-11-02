export class ListController {
  constructor ($scope, $route, LibService, $rootScope) {
    'ngInject';

		$scope.find_lib = {};


		var find_lib = () =>{
			LibService.find($scope.find_lib).then((resp) => {
				$scope.libs = resp.data;
			}, (err) => {
				$rootScope.$broadcast('error', err)
			});
		}
		find_lib();

		LibService.findRatings({}).then((resp) => {
			$scope.ratings = resp.data;
		}, (err) => {
			$rootScope.$broadcast('error', err)
		});
    
    }
}