import app from './app';

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : 'components/items-needed/items-needed.html'
    })
    .when("/items-purchased", {
        templateUrl : "components/items-purchased/items-purchased.html"
    })
    .when("/items-needed", {
        templateUrl : "components/items-needed/items-needed.html"
    });
});