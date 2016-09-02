"use strict";

angular.module('myMenu').directive('myMenu', function(){
    return {
        transclude: true,
        scope: {

        },
        templateUrl: 'ext-modules/myMenu/myMenuTemplate.html',
        controller: 'myMenuController',
        link: function(sceope, el, attr){

        }
    };
});