angular.module("questions")
    .controller("QuestionsController", function(Questions, Score, $state) {

        var vm = this;

        vm.count = 0;
        vm.answer = function(selected) {
            if(Questions.questions[vm.current].correct === selected) {
                Score.increase();
            }
            vm.next();
        };

        vm.questions = Questions.questions;

        vm.next = function() {
            var curr = Questions.next();
            if(curr) {
                vm.count++;
                vm.current = curr;
            } else {
                $state.go("survey.result");
            }
        };

        vm.next();
    });