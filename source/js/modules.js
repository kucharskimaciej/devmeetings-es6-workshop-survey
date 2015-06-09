angular.module('templates', []);
angular.module('questions', [ 'templates' ]);

angular.module('app', [
    'templates',
    'ui.router',
    'questions'
]);