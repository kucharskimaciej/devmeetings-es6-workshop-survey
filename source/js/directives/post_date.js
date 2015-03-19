(function() {
    angular.module('directives').directive('postDate', function() {
        return {
            scope: {
                date: "="
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'directives/post_date.tpl.html'
        };
    });

}).call(this);
