"use strict";

angular.module("myFramework").directive("myFramework", function(){
    return {
        transclude: true,
        scope: {

        },
        controller: "myFrameworkController", 
        templateUrl: "ext-modules/myFramework/myFrameworkTemplate.html"
    }
});