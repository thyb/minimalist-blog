var ArticleCtrl, BlogCtrl, IndexCtrl, NotFoundCtrl, PageCtrl, TagCtrl, TagsCtrl;

IndexCtrl = function($rootScope, $scope, $location) {
  var i, layout, page, theme, _results;
  $rootScope.menuSelected = $location.path();
  theme = blogConfig.theme || "default";
  layout = blogConfig.layout || "default";
  $scope.blog = blogConfig;
  $scope.template = {
    header: "app/templates/" + theme + "/header.html",
    footer: "app/templates/" + theme + "/footer.html"
  };
  if ($scope.blog.sidebar !== false) {
    _results = [];
    for (i in $scope.blog.sidebar) {
      page = $scope.blog.sidebar[i];
      _results.push($scope.blog.sidebar[i] = "pages/" + page);
    }
    return _results;
  }
};

BlogCtrl = function($scope, $rootScope, $location) {
  $rootScope.menuSelected = $location.path();
  $scope.blog = blogConfig;
  return $scope.pagination = {
    nbPerPage: blogConfig.limitPerPage,
    nbPages: Math.ceil(blogConfig.articles.length / blogConfig.limitPerPage),
    current: 1,
    max: 3
  };
};

ArticleCtrl = function($routeParams, $scope, $location, $rootScope, BlogService, $disqus) {
  $rootScope.menuSelected = $location.path();
  if (blogConfig.social.disqus) {
    $disqus.shortname(blogConfig.social.disqus);
  }
  $scope.id = $routeParams.id;
  return BlogService.getArticle($routeParams.id, (function(data, article) {
    $scope.article = data;
    return $scope.articleMeta = article;
  }), function(error) {
    return console.log(error);
  });
};

PageCtrl = function($routeParams, $scope, $rootScope, $location) {
  $rootScope.menuSelected = $location.path();
  return $scope.page = "pages/" + $routeParams.page + ".html";
};

TagCtrl = function($scope, $routeParams, $location, $rootScope) {
  var article, tag, _i, _j, _len, _len1, _ref, _ref1;
  if (!$routeParams.tag) {
    $location.path("/404");
  }
  $rootScope.menuSelected = $location.path();
  $scope.articlesTag = [];
  _ref = blogConfig.articles;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    article = _ref[_i];
    console.log(article);
    _ref1 = article.tags;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      tag = _ref1[_j];
      if (tag === $routeParams.tag) {
        $scope.articlesTag.push(article);
      }
    }
  }
  return $scope.pagination = {
    nbPerPage: blogConfig.limitPerPage,
    nbPages: Math.ceil($scope.articlesTag.length / blogConfig.limitPerPage),
    current: 1,
    max: 3
  };
};

TagsCtrl = function($scope, $location, $rootScope) {
  var article, t, tag, _i, _len, _ref, _results;
  $rootScope.menuSelected = $location.path();
  $scope.tags = [];
  _ref = blogConfig.articles;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    article = _ref[_i];
    _results.push((function() {
      var _j, _len1, _ref1, _results1;
      _ref1 = article.tags;
      _results1 = [];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        tag = _ref1[_j];
        t = $scope.tags.find(function(n) {
          return n['name'] === tag;
        });
        if (!t) {
          _results1.push($scope.tags.push({
            name: tag,
            count: 1
          }));
        } else {
          _results1.push(t.count++);
        }
      }
      return _results1;
    })());
  }
  return _results;
};

NotFoundCtrl = function($scope, $routeParams) {
  return $scope.errorGif = '/img/404/' + (Math.floor(Math.random() * 2) + 1) + '.gif';
};
