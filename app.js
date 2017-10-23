//Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module. In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
var app = angular.module("myApp", []);
//Once I have a reference to the app module, I can add other services, controllers, filters, and directives to it using built-in functions.  In this case, passing two arguments to the controller method will create a new controller
app.controller("myController", function(){
    console.log("mycontroller run");

    this.Initialized = function(){
    console.log("myController Initialized")
    }

    this.ButtonClick = function (){
        this.ClickCount++;
    }
})

app.directive("myDirective", function (){
    var directObject = {
        template: "<div>This is a template directive</div>"
    };
    return directObject;
})

//A better template directive
app.directive("myOtherDirective", function(){
    var directiveObject = {
        templateUrl: "template.html"
    };
    return directiveObject;
});
