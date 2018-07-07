app.config(function($routeProvider) {
    //$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        template : '<items-needed></items-needed>'
    })
    .when("/items-purchased", {
        template : "<items-purchased></items-purchased>"
    })
    .when("/items-needed", {
        template : "<items-needed></items-needed>"
    })    
    .otherwise({
        template : "<h1>404 Page Not Found</h1>"
    });;
});