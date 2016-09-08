"use strict";

angular.module('myMenu').controller('myMenuController', 
    ['$scope', '$rootScope', 
        function($scope, $rootScope){
            $scope.openMenuScope = null;
            $scope.showMenu = true;
            $scope.isVertical = true;
            $scope.allowHorizontalToggle = true;

            this.setActiveElement = function(el){
                $scope.activeElement = el;
            }

            this.getActiveElement = function(){
                return $scope.activeElement;
            }

            this.setRoute = function(route){
                $rootScope.$broadcast('my-menu-item-selected-event', { route: route });
            }

            this.isVertical = function(){
                return $scope.isVertical;
            }

            this.setOpenMenuScope = function (scope){
                $scope.openMenuScope = scope;
            }

            $scope.$on('my-menu-show', function(evt, data){
                $scope.showMenu = data.show;
                $scope.isVertical = data.isVertical;
                $scope.allowHorizontalToggle = data.allowHorizontalToggle;
            })

            $scope.toggleMenuOrientation = function (){
                if ($scope.openMenuScope)
                    $scope.openMenuScope.closeMenu();

                $scope.isVertical = !$scope.isVertical;

                $rootScope.$broadcast('my-menu-orientation-changed-event', { isMenuVertical: $scope.isVertical });
            };

            angular.element(document).bind('click', function (e){
                if ($scope.openMenuScope && !$scope.isVertical){
                    if ($(e.target).parent().hasClass('my-selectable-item'))
                        return;
                    $scope.$apply(function(){
                        $scope.openMenuScope.closeMenu();
                    });
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            
        }
    ]
);