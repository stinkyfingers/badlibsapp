export class LibService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://localhost:8080';
  }
		find (lib){
			return this.$http({
				method:'post',
				url: this.apiHost + '/lib/find',
				data: lib
			});
		}

		findPartsOfSpeech (partOfSpeech){
			return this.$http({
				method:'post',
				url: this.apiHost + '/partsofspeech/find',
				data: partOfSpeech
			});
		}

		findRatings (rating){
			return this.$http({
				method:'post',
				url: this.apiHost + '/ratings/find',
				data: rating
			});
		}

		createLib (lib){
			return this.$http({
				method:'post',
				url: this.apiHost + '/lib/create',
				data: lib
			});
		}

		createPos (pos){
			return this.$http({
				method:'post',
				url: this.apiHost + '/partsofspeech/create',
				data: pos
			});
		}

}