var app;

app = angular.module('blog', ['ui.bootstrap', 'ngDisqus']);

app.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/templates/' + blogConfig.theme + '/blog.html',
      controller: 'BlogCtrl'
    });
    $routeProvider.when('/articles/:id', {
      templateUrl: 'app/templates/' + blogConfig.theme + '/article.html',
      controller: 'ArticleCtrl'
    });
    $routeProvider.when('/pages/:page', {
      templateUrl: 'app/templates/' + blogConfig.theme + '/page.html',
      controller: 'PageCtrl'
    });
    $routeProvider.when('/tags/:tag', {
      templateUrl: 'app/templates/' + blogConfig.theme + '/tag.html',
      controller: 'TagCtrl'
    });
    $routeProvider.when('/404', {
      templateUrl: 'app/templates/404.html',
      controller: 'NotFoundCtrl'
    });
    return $routeProvider.otherwise({
      redirectTo: '/404'
    });
  }
]).config(['$httpProvider', function($httpProvider) {}]);
