"use strict";

angular.module('myMenu').directive('myMenuGroup', function(){
    return {
        require: '^myMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/myMenu/myMenuGroupTemplate.html',
        link: function(scope, el, attr, ctrl){
            scope.isOpen = false;
            
            scope.closeMenu = function(){
                scope.isOpen = false;
            };

            scope.clicked = function(){
                scope.isOpen = !scope.isOpen;

                if (el.parents('.my-subitem-section').length == 0)
                    scope.setSubmenuPosition();

                ctrl.setOpenMenuScope(scope);
            };

            scope.isVertical = function(){
                return ctrl.isVertical() || el.parents('.my-subitem-section').length > 0;
            };

            scope.setSubmenuPosition = function(){
                var pos = el.offset();
                $('.my-subitem-section').css({'left': pos.left + 20, 'top': 36});
            };
        }
    };
});