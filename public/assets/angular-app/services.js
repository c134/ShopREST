angular.module('dashboardServices', ['ngResource']).
    factory('Category', function ($resource) {
        return $resource('api/categories/:id', {}, {
            all: {method: "GET", isArray: true},
            update: {method: "PUT",
                params: {
                    id: "@id"
                }
            }
        })
    });