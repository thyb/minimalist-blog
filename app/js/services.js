app.factory('BlogService', function($http, $rootScope) {
  return {
    getArticle: function(id, success, error) {
      var article, ext;
      article = blogConfig.articles.find((function(d) {
        return d.id === id;
      }));
      if (!article) {
        error('404');
      }
      if (article.format === 'markdown') {
        ext = 'md';
      } else {
        ext = 'html';
      }
      return $http({
        method: "GET",
        url: "articles/" + id + "." + ext
      }).success((function(data) {
        if (ext === 'md') {
          return $http({
            method: "POST",
            url: "https://api.github.com/markdown",
            data: JSON.stringify({
              text: data,
              mode: "markdown"
            })
          }).success(function(data) {
            return success(data, article);
          });
        } else {
          return success(data);
        }
      }));
    }
  };
});
