"use strict";

angular.module('myMenu').directive('myMenuItem', function(){
    return {
        require: '^myMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/myMenu/myMenuItemTemplate.html',
        link: function(scope, el, attr, ctrl){

            scope.isActive = function(){
                return el === ctrl.getActiveElement();
            }

            scope.isVertical = function(){
                return ctrl.isVertical() || el.parents('.my-subitem-section').length > 0;
            }

            el.on('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function(){
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            })
        }
    };
});