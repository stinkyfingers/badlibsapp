export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/templates/main.html',
      controller: 'ListController',
      controllerAs: 'list'
    })
    .when('/play', {
      templateUrl: 'app/templates/play.html',
      controller: 'PlayController',
      controllerAs: 'play'
    })
    .when('/create', {
      templateUrl: 'app/templates/create.html',
      controller: 'CreateController',
      controllerAs: 'create'
    })
    .otherwise({
      redirectTo: '/'
    });
}
