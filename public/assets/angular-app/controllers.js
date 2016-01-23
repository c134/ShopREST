dashboard.controller('CategoriesController', function ($scope, Category, $http) {
    $scope.$parent.title = "Categories";
    $scope.$parent.hash = "categories";
    $scope.showForm = false;
    $scope.showCreateButton = false;
    $scope.showEditButton = false;
    $scope.category = {};
    $scope.sorting = {
        availableOptions: [
            {id: 'asc', name: 'ASC'},
            {id: 'desc', name: 'DESC'}
        ],
        selectedOption: {id: 'asc', name: 'ASC'}
    };
    $scope.categories = Category.all({sorting: $scope.sorting.selectedOption.id});
    $scope.selectSort = function () {
        $scope.categories = Category.all({sorting: $scope.sorting.selectedOption.id});
    };
    $scope.showCreateForm = function () {
        $scope.showForm = true;
        $scope.showCreateButton = true;
    };
    $scope.hideCreateForm = function () {
        $scope.showForm = false;
        $scope.showCreateButton = false;
    };

    $scope.create = function () {
        Category.save({
            category_name: $scope.category.name,
            category_description: $scope.category.description
        }, function (responce) {
            $scope.categories.push(responce.created_category);
            $scope.category.name = null;
            $scope.category.description = null;
        }, function (responce) {

        });
    };
    $scope.showEditForm = function (category) {
        $scope.showForm = true;
        $scope.showCreateButton = false;
        $scope.showEditButton = true;
        $scope.category.id = category.id;
        $scope.category.name = category.category_name;
        $scope.category.description = category.category_description;
    };
    $scope.edit = function (category) {
        Category.update(category, function () {
            $scope.categories = Category.all();
        }, function () {

        });
    };
    $scope.delete = function (category) {
        Category.delete({id: category.id}, function () {
            $scope.categories.splice($scope.categories.indexOf(category), 1);
        });
    }

});
dashboard.controller('ProductsController', function ($scope, Product, Category, $q) {
    $scope.$parent.title = "Products";
    $scope.$parent.hash = "products";
    $scope.showForm = false;
    $scope.showCreateButton = false;
    $scope.showEditButton = false;

    Category.all({sorting: "asc"})
        .$promise.then(function (categories) {
            $scope.categories = {
                availableOptions: categories
            };
        });
    $scope.product = {};
    $scope.sorting = {
        availableOptions: [
            {id: 'asc', name: 'ASC'},
            {id: 'desc', name: 'DESC'}
        ],
        selectedOption: {id: 'asc', name: 'ASC'}
    };
    $scope.products = Product.all({sorting: $scope.sorting.selectedOption.id});
    $scope.selectSort = function () {
        $scope.products = Product.all({sorting: $scope.sorting.selectedOption.id});
    };
    $scope.showCreateForm = function () {
        $scope.showForm = true;
        $scope.showCreateButton = true;
    };
    $scope.hideCreateForm = function () {
        $scope.showForm = false;
        $scope.showCreateButton = false;
    };
    $scope.test = {};
    $scope.create = function () {
        Product.save({
            product_name: $scope.product.name,
            product_description: $scope.product.description,
            product_category: $scope.product.category.id,
            product_category_name: $scope.product.category.category_name,
            product_price: $scope.product.price
        }, function (responce) {
            $scope.created_product = {
                category: {
                    id: responce.category_id,
                    category_name: responce.category_name
                },
                product_name: responce.created_product.product_name,
                product_description: responce.created_product.product_description,
                product_price: responce.created_product.product_price,
                id: responce.created_product.id

            };
            $scope.products.push($scope.created_product);
            $scope.product = {};
        }, function (responce) {

        });
    };
    $scope.showEditForm = function (product) {
        $scope.showForm = true;
        $scope.showCreateButton = false;
        $scope.showEditButton = true;
        $scope.product.id = product.id;
        $scope.product.name = product.product_name;
        $scope.product.description = product.product_description;
        $scope.product.category = product.category;
        $scope.product.price = product.product_price;
    };
    $scope.edit = function (product) {
        Product.update(product, function () {
            $scope.products = Product.all();
        }, function () {

        });
    };
    $scope.delete = function (product) {
        Product.delete({id: product.id}, function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
    }
});
dashboard.controller('OverviewController', function ($scope, Product) {
    $scope.$parent.title = "Overview";
    $scope.$parent.hash = "overview";
    $scope.sorting = {
        availableOptions: [
            {id: 'asc', name: 'ASC'},
            {id: 'desc', name: 'DESC'}
        ],
        selectedOption: {id: 'asc', name: 'ASC'}
    };
    $scope.products = Product.all({sorting: $scope.sorting.selectedOption.id});
    $scope.selectSort = function () {
        $scope.products = Product.all({sorting: $scope.sorting.selectedOption.id});
    };
});