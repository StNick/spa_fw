"use strict";

angular.module('myMenu').directive('myMenuItem', function(){
    return {
        require: '^myMenu',
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/myMenu/myMenuItemTemplate.html',
        link: function(sceope, el, attr, ctrl){
            
        }
    };
});