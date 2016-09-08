"use strict";

angular.module('myMenu').directive('myMenu', ['$timeout', function($timeout){
    return {
        transclude: true,
        scope: {

        },
        templateUrl: 'ext-modules/myMenu/myMenuTemplate.html',
        controller: 'myMenuController',
        link: function(scope, el, attr){
            $timeout(function(){
                var item = el.find('.my-selectable-item:first');
                item.trigger('click');
            });
        }
    };
}]);