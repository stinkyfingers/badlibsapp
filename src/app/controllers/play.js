export class PlayController {
  constructor ($scope, $route, LibService, $rootScope) {
    'ngInject';
    $scope.word_array = [];
    $scope.lib = {};

    LibService.find({_id: $route.current.params.id}).then((resp) =>{
		if (resp.data.length < 1 ){
			return; 
		}
		$scope.lib = resp.data[0];
		LibService.findPartsOfSpeech({}).then((resp) => {
			$scope.pos = resp.data;
			$scope.parseLib();
		}, (err) => {
			$rootScope.$broadcast('error', err);
		});
    }, (err) =>{
		$rootScope.$broadcast('error', err);
    });


//TODO capitalization (by flag?)

    $scope.parseLib = () => {
		$scope.lib_array = [];
		let lib_array = $scope.lib.text.match(/<[A-Za-z_-]*>/gi);
		for (let i in lib_array){
			let temp = $scope.lib.text.replace(lib_array[i], () =>{
				return '@' + i;
			});
			$scope.lib.text = temp;
			for (let j in $scope.pos){
				if ($scope.pos[j].code === lib_array[i]){
					$scope.lib_array.push($scope.pos[j])
				}
			}
		}
    };


    $scope.submitPos = () =>{
		for (let i in $scope.word_array){
			$scope.lib.text = $scope.lib.text.replace('@' + i, $scope.word_array[i].user_word);
		}
		$scope.completed_lib = $scope.lib.text;
    };

    $scope.clear = () => {
		$scope.completed_lib = null;
		$route.reload();
    };
		

	}
}