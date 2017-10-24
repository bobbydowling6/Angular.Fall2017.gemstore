var gems = [{
name: 'Dodecahedron',
price: 2.95,
description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
canPurchase: true,
outOfStock: false,
image: 'images/gem-01.gif'
}, {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "The origin of the pentagonal gem is unknown.",
        canPurchase: true,
        outOfStock: true,
        image: 'images/gem-02.gif'
    }, {
        name: "Triangular Gem",
        price: 3.95,
        description: "The origin of the Triangular gem is that is's over 5,000 years old.",
        canPurchase: true,
        outOfStock: false,
        image: 'images/gem-03.gif'
    }, {
        name: "Triangular Gem",
        price: 3.95,
        description: "The origin of the Triangular gem is that it's over 5,000 years old.",
        canPurchase: true,
        outOfStock: false,
        image: 'images/gem-03.gif'
    }, {
        name: "Tricubal Gem",
        price: 6.95,
        description: "The origin of the Tricubal gem is that it's over 3,000 years old.",
        canPurchase: true,
        outOfStock: true,
        image: 'images/gem-04.gif'
    }, {
        name: "Cubal Gem",
        price: 7.95,
        description: "The origin of the Cubal gem is that it's over 5,000 years old.",
        canPurchase: true,
        outOfStock: false,
        image: 'images/gem-05.gif'
    }
];

//Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module. In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
var app = angular.module("myApp", []);
//Once I have a reference to the app module, I can add other services, controllers, filters, and directives to it using built-in functions.  In this case, passing two arguments to the controller method will create a new controller
app.controller("myController", function ($scope) {
    $scope.Initialized = function () {
        $scope.models = gems;
    }
});

app.directive("storePanels", function() {
    var directiveObject = {
        templateUrl: "templates/store-panels.html",
        controller: function($scope){
            $scope.SelectTab = function(tab){
                $scope.tab = tab;
            }
        }
    };
    return directiveObject;
})


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
