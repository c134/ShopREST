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
        $scope.categories = Category.all({sorting:$scope.sorting.selectedOption.id});
    };
    $scope.showCreateCategory = function () {
        $scope.showForm = true;
        $scope.showCreateButton = true;
    };
    $scope.hideCreateCategory = function () {
        $scope.showForm = false;
    };

    $scope.showCategories = function () {

    };

    $scope.createCategory = function () {
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
    $scope.showEditCategoryForm = function (category) {
        $scope.showForm = true;
        $scope.showCreateButton = false;
        $scope.showEditButton = true;
        $scope.category.id = category.id;
        $scope.category.name = category.category_name;
        $scope.category.description = category.category_description;
    };
    $scope.editCategory = function (category) {
        Category.update(category, function () {
            $scope.categories = Category.all();
        }, function () {

        });
    };
    $scope.deleteCategory = function (category) {
        Category.delete({id: category.id}, function () {
            $scope.categories.splice($scope.categories.indexOf(category), 1);
        });
    }

});
dashboard.controller('ProductsController', function ($scope) {
    $scope.$parent.title = "Products";
    $scope.$parent.hash = "products";

});
dashboard.controller('DashboardController', function ($scope) {
    $scope.$parent.title = "Dashboard";
    $scope.$parent.hash = "dashboard";

});