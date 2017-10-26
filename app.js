//For now, just hard-coding a model!
//Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "Fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module.  In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
var app = angular.module("myApp", ["storeProducts", "ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    //$location.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"
    }).when("/page1", {
        templateUrl: "templates/page1.html"
    }).when("/page2", {
        templateUrl: "templates/page2.html"
        }).when("/login", {
        templateUrl: "templates/login.html"
    });
});

function myController($scope, $http) {
    $scope.Initialized = function () {
        $http.get("gems.json").then($scope.gemDataReceived);

        }
        $scope.gemDataReceived = function (result){
            $scope.models = result.data;
        }

    }
app.controller("myController", ['$scope', '$http', myController]);

app.controller("bodyController", function($scope){

    $scope.register = function(email, password) {   firebase.auth().createUserWithEmailAndPassword(email, password)

    }

    $scope.login = function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    $scope.logout = function(){
        firebase.auth().signOut()
    };

    $scope.onAuthStateChanged = firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

        $scope.user = user;
        $scope.$apply();
    }
    else {
        $scope.user = null;
        $scope.$apply();
    }
});

})

//I can also attach directives to modules:
//app.directive("myDirective", function(){
//    var directiveObject = {
//        template: "<div>This is a template directive.</div>"
//    };
//    return directiveObject;
//});
//A better template directive
//app.directive("myOtherDirective", function(){
//    var directiveObject = {
//        templateUrl: "template.html"
//    };
//    return directiveObject;
//});

//app.directive("myDirective", function (){
//var directObject = {
// template: "<div>This is a template directive</div>"
// };
//return directObject;
// })

//A better template directive
//app.directive("myOtherDirective", function(){
// var directiveObject = {
//    templateUrl: "template.html"
// };
//return directiveObject;
//});
