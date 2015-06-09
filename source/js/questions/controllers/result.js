angular.module("questions")
    .controller("ResultController", function(Score) {
        this.score = Score.score;
    });