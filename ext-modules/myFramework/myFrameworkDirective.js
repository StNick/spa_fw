"use strict";

angular.module("myFramework").directive("myFramework", function(){
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "myFrameworkController", 
        templateUrl: "ext-modules/myFramework/myFrameworkTemplate.html"
    }
});