export class CreateController {
  constructor ($scope, $route, LibService, $window, $rootScope, $location) {
    'ngInject';
    $scope.new_pos = false;
    $scope.user_pos = {};
    $scope.lib = {
        text: ''
    };

    if ($route.current.params.id !== undefined){
        LibService.find({_id: $route.current.params.id}).then((resp) => {
            if(resp.data.length < 1){
                return;
            }
            $scope.lib = resp.data[0];
        }, (err) => {
            $rootScope.$broadcast('error', err);
        });
    }

    //get pos
    LibService.findPartsOfSpeech({}).then((resp) => {
        $scope.pos = resp.data;
    }, (err) => {
        $rootScope.$broadcast('error', err);
    });

    //get ratings
    LibService.findRatings({}).then((resp) => {
        $scope.ratings = resp.data;
    }, (err) => {
        $rootScope.$broadcast('error', err);
    });

    //append & focus on textarea
    $scope.append = (pcode) =>{
        $scope.lib.text = $scope.lib.text.concat(' ' + pcode + ' ');
        let elem = $window.document.getElementById('libtext');
        elem.focus();
    };

    //save
    $scope.create_lib = () => {
        LibService.createLib($scope.lib).then(() => {
            $location.path('/');
        }, (err) => {
            $rootScope.$broadcast('error', err);
        });
    };

    $scope.update_lib = () => {
        LibService.updateLib($scope.lib).then(() => {
            $location.path('/');
        }, (err) => {
            $rootScope.$broadcast('error', err);
        });
    };

    //clear
    $scope.clear = () => {
        $scope.lib = {};
    };

    $scope.home = () => {
        $location.path('/');
    };

    $scope.create_pos = () => {
        let user_pos = $scope.user_pos;
        user_pos.value = user_pos.value.charAt(0).toUpperCase() + user_pos.value.slice(1);
        user_pos.code = '<' + user_pos.value.toLowerCase().replace(/ /g, '_') + '>';
        LibService.createPos(user_pos).then((resp) => {
            if ($scope.pos === null || $scope.pos === angular.isUndefined){
                $scope.pos = [];
            }
            $scope.pos.push(resp.data);
            $scope.new_pos = false;
        }, (err) => {
            $rootScope.$broadcast('error', err);
        });
    };

    $scope.cancel = () => {
        $scope.new_pos = false
    }
    

	}
}