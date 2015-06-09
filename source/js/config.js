angular.module("app").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
        .state("survey", {
            abstract: true,
            templateUrl: "app/views/layout.html"
        })
        .state("survey.questions", {
            url: "/",
            templateUrl: "questions/views/questions.html",
            controller: "QuestionsController",
            controllerAs: "ctrl"
        })
        .state("survey.result", {
            url: "/result",
            templateUrl: "questions/views/result.html",
            controller: "ResultController",
            controllerAs: "ctrl"
        });
});