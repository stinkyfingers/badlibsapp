/******/!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i,r,a,o,l,s,c,u,p,d,f,g,b,h=(i=n(1),i&&i.__esModule&&i||{"default":i}).config,m=(r=n(2),r&&r.__esModule&&r||{"default":r}).routerConfig,v=(a=n(3),a&&a.__esModule&&a||{"default":a}).runBlock,_=(o=n(4),o&&o.__esModule&&o||{"default":o}).MainController,$=(l=n(5),l&&l.__esModule&&l||{"default":l}).GithubContributorService,w=(s=n(6),s&&s.__esModule&&s||{"default":s}).WebDevTecService,y=(c=n(7),c&&c.__esModule&&c||{"default":c}).NavbarDirective,C=(u=n(8),u&&u.__esModule&&u||{"default":u}).MalarkeyDirective,S=(p=n(9),p&&p.__esModule&&p||{"default":p}).PlayController,j=(d=n(10),d&&d.__esModule&&d||{"default":d}).ListController,k=(f=n(11),f&&f.__esModule&&f||{"default":f}).CreateController,x=(g=n(12),g&&g.__esModule&&g||{"default":g}).LibService,M=(b=n(13),b&&b.__esModule&&b||{"default":b}).Application;angular.module("badlibsapp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngRoute","mm.foundation","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(h).config(m).run(v).service("githubContributor",$).service("webDevTec",w).service("LibService",x).controller("MainController",_).controller("PlayController",S).controller("CreateController",k).controller("ListController",j).factory("Application",M).directive("acmeNavbar",y).directive("acmeMalarkey",C)},function(t,e){"use strict";function n(t){"ngInject";t.html5Mode(!0)}Object.defineProperties(e,{config:{get:function(){return n}},__esModule:{value:!0}}),n.$inject=["$locationProvider"]},function(t,e){"use strict";function n(t){"ngInject";t.when("/",{templateUrl:"app/templates/main.html",controller:"ListController",controllerAs:"list"}).when("/play",{templateUrl:"app/templates/play.html",controller:"PlayController",controllerAs:"play"}).when("/create",{templateUrl:"app/templates/create.html",controller:"CreateController",controllerAs:"create"}).otherwise({redirectTo:"/"})}Object.defineProperties(e,{routerConfig:{get:function(){return n}},__esModule:{value:!0}}),n.$inject=["$routeProvider"]},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}Object.defineProperties(e,{runBlock:{get:function(){return n}},__esModule:{value:!0}}),n.$inject=["$log"]},function(t,e){"use strict";Object.defineProperties(e,{MainController:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e,n){"ngInject";this.awesomeThings=[],this.classAnimation="",this.creationDate=1446318833792,this.toastr=n,this.activate(t,e)};n.$inject=["$timeout","webDevTec","toastr"],$traceurRuntime.createClass(n,{activate:function(t,e){var n=this;this.getWebDevTec(e),t(function(){n.classAnimation="rubberBand"},4e3)},getWebDevTec:function(t){this.awesomeThings=t.getTec(),angular.forEach(this.awesomeThings,function(t){t.rank=Math.random()})},showToastr:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}},{})},function(t,e){"use strict";Object.defineProperties(e,{GithubContributorService:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e){"ngInject";this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"};n.$inject=["$log","$http"],$traceurRuntime.createClass(n,{getContributors:function(t){var e=this;return t||(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}},{})},function(t,e){"use strict";Object.defineProperties(e,{WebDevTecService:{get:function(){return n}},__esModule:{value:!0}});var n=function(){"ngInject";this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Traceur)",url:"https://github.com/google/traceur-compiler",description:"A JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today.",logo:"traceur.png"}]};$traceurRuntime.createClass(n,{getTec:function(){return this.data}},{})},function(t,e){"use strict";function n(){"ngInject";var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:i,controllerAs:"vm",bindToController:!0};return t}Object.defineProperties(e,{NavbarDirective:{get:function(){return n}},__esModule:{value:!0}});var i=function(){"ngInject"};$traceurRuntime.createClass(i,{},{})},function(t,e){"use strict";function n(t){"ngInject";function e(e,n,i,r){var a,o=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){o.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){o.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:i,controllerAs:"vm"};return n}Object.defineProperties(e,{MalarkeyDirective:{get:function(){return n}},__esModule:{value:!0}}),n.$inject=["malarkey"];var i=function(t,e){"ngInject";this.$log=t,this.contributors=[],this.activate(e)};i.$inject=["$log","githubContributor"],$traceurRuntime.createClass(i,{activate:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})},getContributors:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}},{})},function(t,e){"use strict";Object.defineProperties(e,{PlayController:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e,n,i){"ngInject";t.word_array=[],t.lib={},n.find({_id:e.current.params.id}).then(function(e){e.data.length<1||(t.lib=e.data[0],n.findPartsOfSpeech({}).then(function(e){t.pos=e.data,t.parseLib()},function(t){i.$broadcast("error",t)}))},function(t){i.$broadcast("error",t)}),t.parseLib=function(){t.lib_array=[];var e=t.lib.text.match(/<[A-Za-z_-]*>/gi),n=function(n){var i=t.lib.text.replace(e[n],function(){return"@"+n});t.lib.text=i;for(var r in t.pos)t.pos[r].code===e[n]&&t.lib_array.push(t.pos[r])};for(var i in e)n(i)},t.submitPos=function(){for(var e in t.word_array)t.lib.text=t.lib.text.replace("@"+e,t.word_array[e].user_word);t.completed_lib=t.lib.text},t.clear=function(){t.completed_lib=null,e.reload()}};n.$inject=["$scope","$route","LibService","$rootScope"],$traceurRuntime.createClass(n,{},{})},function(t,e){"use strict";Object.defineProperties(e,{ListController:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e,n,i,r){"ngInject";t.find_lib={};var a=function(){n.find(t.find_lib).then(function(e){t.libs=e.data},function(t){i.$broadcast("error",t)})};a(),n.findRatings({}).then(function(e){t.ratings=e.data},function(t){i.$broadcast("error",t)}),t["goto"]=function(t){r.url("/create?id="+t)}};n.$inject=["$scope","$route","LibService","$rootScope","$location"],$traceurRuntime.createClass(n,{},{})},function(t,e){"use strict";Object.defineProperties(e,{CreateController:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e,n,i,r,a){"ngInject";t.new_pos=!1,t.user_pos={},t.lib={text:""},void 0!==e.current.params.id&&n.find({_id:e.current.params.id}).then(function(e){e.data.length<1||(t.lib=e.data[0])},function(t){r.$broadcast("error",t)}),n.findPartsOfSpeech({}).then(function(e){t.pos=e.data},function(t){r.$broadcast("error",t)}),n.findRatings({}).then(function(e){t.ratings=e.data},function(t){r.$broadcast("error",t)}),t.append=function(e){t.lib.text=t.lib.text.concat(" "+e+" ");var n=i.document.getElementById("libtext");n.focus()},t.create_lib=function(){n.createLib(t.lib).then(function(){a.path("/")},function(t){r.$broadcast("error",t)})},t.update_lib=function(){n.updateLib(t.lib).then(function(){a.path("/")},function(t){r.$broadcast("error",t)})},t.clear=function(){t.lib={}},t.home=function(){a.path("/")},t.create_pos=function(){var e=t.user_pos;e.value=e.value.charAt(0).toUpperCase()+e.value.slice(1),e.code="<"+e.value.toLowerCase().replace(" ","_")+">",n.createPos(e).then(function(e){(null===t.pos||t.pos===angular.isUndefined)&&(t.pos=[]),t.pos.push(e.data),t.new_pos=!1},function(t){r.$broadcast("error",t)})},t.cancel=function(){t.new_pos=!1}};n.$inject=["$scope","$route","LibService","$window","$rootScope","$location"],$traceurRuntime.createClass(n,{},{})},function(t,e){"use strict";Object.defineProperties(e,{LibService:{get:function(){return n}},__esModule:{value:!0}});var n=function(t,e,n){"ngInject";this.$log=t,this.$http=e,this.apiHost=n};n.$inject=["$log","$http","Application"],$traceurRuntime.createClass(n,{find:function(t){return this.$http({method:"post",url:this.apiHost+"/lib/find",data:t})},findPartsOfSpeech:function(t){return this.$http({method:"post",url:this.apiHost+"/partsofspeech/find",data:t})},findRatings:function(t){return this.$http({method:"post",url:this.apiHost+"/ratings/find",data:t})},createLib:function(t){return this.$http({method:"post",url:this.apiHost+"/lib/create",data:t})},updateLib:function(t){return this.$http({method:"post",url:this.apiHost+"/lib/update",data:t})},createPos:function(t){return this.$http({method:"post",url:this.apiHost+"/partsofspeech/create",data:t})}},{})},function(t,e){"use strict";Object.defineProperties(e,{Application:{get:function(){return n}},__esModule:{value:!0}});var n=function(t){"ngInject";var e="http://localhost:8081",n="http://badlibs-johnshenk.rhcloud.com";return"localhost"===t.host()?this.apiHost=e:this.apiHost=n,this.apiHost};n.$inject=["$location"],$traceurRuntime.createClass(n,{},{})}]),angular.module("badlibsapp").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/templates/create.html",'<h2>Create a BabLib</h2><form name="libForm" class="textForm" ng-if="!new_pos" novalidate=""><label for="title">Title: <input type="text" name="title" ng-model="lib.title" required=""></label> <label for="text">Text: <textarea name="text" ng-model="lib.text" id="libtext" required=""></textarea></label> <label for="rate">Rating:<select name="rate" ng-model="lib.rating" ng-options="rating.value as rating.value for rating in ratings" required=""></select></label></form><div class="partsOfSpeech textForm"><label>Parts of Speech:</label> <button ng-repeat="p in pos" ng-click="append(p.code)" ng-if="!new_pos">{{p.value}}</button> <button class="warning" ng-click="new_pos = true">Add New Part Of Speech</button></div><form class="textForm" ng-if="new_pos"><label for="value">Name: <input type="text" name="value" ng-model="user_pos.value"></label> <button ng-click="create_pos()">Save</button> <button ng-click="cancel()">Cancel</button></form><div class="submit textForm" ng-if="!new_pos"><label>Save/Start Over:</label> <button class="std" ng-if="!lib._id" ng-click="create_lib(lib)" ng-disabled="libForm.$invalid">Save</button> <button class="std" ng-if="lib._id" ng-click="update_lib(lib)" ng-disabled="libForm.$invalid">Save</button> <button class="std alert" ng-click="clear()">Clear</button> <button class="std warning" ng-click="home()">Cancel</button></div>'),t.put("app/templates/main.html",'<div class="ratingSelect"><label>Filter by rating:</label><select name="rate" ng-model="lib_filter.rating" ng-options="rating.value as rating.value for rating in ratings | orderBy: \'sort\'"><option value="">Please select...</option></select><button ng-click="lib_filter = undefined">Clear</button></div><ul class="libsList" ng-if="(libs | filter:lib_filter).length > 0"><h3>Select a BadLib to play:</h3><li ng-repeat="lib in libs | filter: lib_filter"><div class="row"><div class="large-6 columns"><a href="play?id={{lib._id}}">{{lib.title}}</a></div><div class="large-2 columns"><span ng-if="lib.rating">(Rated: {{lib.rating}})</span></div><div class="large-4 columns"><span><button ng-click="goto(lib._id)">Edit</button></span></div></div></li></ul><h3 ng-if="(libs | filter:lib_filter).length === 0">No BadLibs with that rating</h3>'),t.put("app/templates/play.html",'<h2 class="center">{{lib.title}}</h2><h6 class="center">Rated: {{lib.rating}}</h6><form name="playLibForm" ng-if="!completed_lib"><ul class="libPlay"><h3>Enter the parts of speech below:</h3><li ng-repeat="word in lib_array track by $index"><label for="user_word">{{word.value}}:</label> <input type="text" name="user_word" class="partsOfSpeechInput" ng-model="word_array[$index].user_word" required=""></li></ul><button ng-click="submitPos()" class="std">Submit</button></form><div ng-if="completed_lib" class="completedLib">{{completed_lib}}<div><button ng-click="clear()" class="std">Start Over</button></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/stinkyfingers/badlibs">BadLibs</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li><a ng-href="/">Home</a></li><li><a ng-href="/create">Create</a></li></ul></section></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-215fea5d67.js.map
