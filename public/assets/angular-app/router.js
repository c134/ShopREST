dashboard.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/categories', {
                templateUrl:'assets/html/categories.html',
                controller:'CategoriesController'
            }).
            when('/products', {
                templateUrl:'assets/html/products.html',
                controller:'ProductsController'
            }).
            when('/', {
                templateUrl:'assets/html/dashboard.html',
                controller:'DashboardController'
            })
    }
]);
