<!DOCTYPE html>
<html lang="en" data-ng-app="dashboard">
<head>
    <meta charset="UTF-8">
    <title>ShopREST</title>
    <link rel="stylesheet" href="{{URL::asset("/bower_resources/bootstrap/dist/css/bootstrap.min.css")}}">
</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/#/">ShopREST</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a href="#categories">Categories</a></li>
            <li><a href="#products">Products</a></li>
        </ul>
    </div>
</nav>
<div class="row">
    <div class="col-md-12" ng-view>
        <!-- Content here -->
    </div>
</div>
<script src="{{URL::asset("/bower_resources/jquery/dist/jquery.min.js")}}"></script>
<script src="{{URL::asset("/bower_resources/bootstrap/dist/js/bootstrap.min.js")}}"></script>
<script src="{{URL::asset("/bower_resources/angular/angular.min.js")}}"></script>
<script src="{{URL::asset("/bower_resources/angular-route/angular-route.min.js")}}"></script>
<script src="{{URL::asset("/bower_resources/angular-resource/angular-resource.min.js")}}"></script>
{{--<script src="{{URL::asset("/bower_resources/angular-ui-bootstrap/angular-resource.min.js")}}"></script>--}}
<script src="{{URL::asset("/assets/angular-app/app.js")}}"></script>
<script src="{{URL::asset("/assets/angular-app/services.js")}}"></script>
<script src="{{URL::asset("/assets/angular-app/controllers.js")}}"></script>
<script src="{{URL::asset("/assets/angular-app/router.js")}}"></script>
</body>
</html>