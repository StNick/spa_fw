"use strict";

angular.module('myDashboard').directive('myDashboard', function(){
    return {
        templateUrl: 'ext-modules/myDashboard/myDashboardTemplate.html',
        link: function(scope, element, attrs){
            scope.addNewWidget = function(widget){
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }
        }
    };
});