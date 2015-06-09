angular.module('questions')
    .factory('Score', function() {
        var _score = 0;
        return {
            get score () {
                return _score;
            },
            increase: function() {
                _score++;
            }
        };

    });