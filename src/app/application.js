export class Application {
  constructor ($location) {
    'ngInject';
    var localApi = "http://localhost:8081";
    var liveApi = "http://badlibs-johnshenk.rhcloud.com"

    if ($location.host() === 'localhost'){
		this.apiHost = localApi;
	}else{
		this.apiHost = liveApi;
	}
	
    return this.apiHost
    }
}