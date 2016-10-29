"use strict";

angular.module("myFramework").controller("myFrameworkController", 
    ['$scope', '$rootScope', '$window', '$timeout', '$location', 
        function($scope, $rootScope, $window, $timeout, $location){

            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;

            $scope.$on('my-menu-item-selected-event', function(evt, data){
                $scope.routeString = data.route;
                $location.path(data.route);
                checkWidth();
                broadcastMenuState();
            });

            $scope.$on('my-menu-orientation-changed-event', function(evt, data){
                $scope.isMenuVertical = data.isMenuVertical;
                $timeout(function(){
                    $($window).trigger('resize');
                }, 0)
            })

            $($window).on('resize.myFramework', function(){
                $scope.$apply(function(){
                    checkWidth();
                    broadcastMenuState();
                })
            });

            $scope.$on('$destroy', function(){
                $($window).off('resize.myFramework');
            });

            var checkWidth = function(){
                var width = Math.max($($window).width(), $($window).innerWidth());
                $scope.isMenuVisible = (width > 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            }

            $scope.menuButtonClicked = function(){
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
            }

            var broadcastMenuState = function(){
                $rootScope.$broadcast('my-menu-show', 
                {
                    show: $scope.isMenuVisible, 
                    isVertical: $scope.isMenuVertical,
                    allowHorizontalToggle: !$scope.isMenuButtonVisible
                })
            }

            $timeout(function(){
                checkWidth();
            }, 0);
        }
    ]
);