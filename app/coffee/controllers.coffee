# ===========================================================
# Copyright 2012 Thibaud Arnault
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ===========================================================

IndexCtrl = ($rootScope, $scope, $location)->
	$rootScope.menuSelected = $location.path()
	theme = blogConfig.theme || "default"
	layout = blogConfig.layout || "default"
	$scope.blog = blogConfig

	$scope.template =
		header: "app/templates/" + theme + "/header.html"
		footer: "app/templates/" + theme + "/footer.html"

	if $scope.blog.sidebar != false
		for i of $scope.blog.sidebar
			page = $scope.blog.sidebar[i]
			$scope.blog.sidebar[i] = "pages/" + page

BlogCtrl = ($scope, $rootScope, $location) ->
	$rootScope.menuSelected = $location.path()
	$scope.blog = blogConfig
	$scope.pagination =
			nbPerPage: blogConfig.limitPerPage
			nbPages: Math.ceil(blogConfig.articles.length / blogConfig.limitPerPage)
			current: 1
			max: 3

ArticleCtrl = ($routeParams, $scope, $location, $rootScope, BlogService, $disqus) ->
	$rootScope.menuSelected = $location.path()
	if blogConfig.social.disqus
		$disqus.shortname blogConfig.social.disqus

	$scope.id = $routeParams.id
	BlogService.getArticle $routeParams.id, ((data, article) ->
		$scope.article = data
		$scope.articleMeta = article
		# article = blogConfig.articles.find ((d) ->
		# 	return d.id == $routeParams.id
		# )
		# $scope.article = article
	), (error) ->
		console.log error

PageCtrl = ($routeParams, $scope, $rootScope, $location) ->
	$rootScope.menuSelected = $location.path()
	$scope.page = "pages/" + $routeParams.page + ".html"

TagCtrl = ($scope, $routeParams, $location, $rootScope) ->
	if not $routeParams.tag
		$location.path "/404"

	$rootScope.menuSelected = $location.path()

	$scope.articlesTag = []
	for article in blogConfig.articles
		console.log article
		for tag in article.tags
			if tag == $routeParams.tag
				$scope.articlesTag.push article

	$scope.pagination =
			nbPerPage: blogConfig.limitPerPage
			nbPages: Math.ceil($scope.articlesTag.length / blogConfig.limitPerPage)
			current: 1
			max: 3


TagsCtrl = ($scope, $location, $rootScope) ->
	$rootScope.menuSelected = $location.path()

	$scope.tags = []
	for article in blogConfig.articles
		for tag in article.tags
			t = $scope.tags.find (n) ->
				return n['name'] == tag
			if not t
				$scope.tags.push name: tag, count: 1
			else
				t.count++

NotFoundCtrl = ($scope, $routeParams) ->
	$scope.errorGif = '/img/404/' + (Math.floor(Math.random() * 2) + 1) + '.gif'