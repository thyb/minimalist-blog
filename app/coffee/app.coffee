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

app = angular.module 'blog', ['ui.bootstrap', 'ngDisqus']

app.config([
	'$routeProvider'
	'$locationProvider'
	($routeProvider, $locationProvider) ->
		$routeProvider.when '/',
			templateUrl: 'app/templates/' + blogConfig.theme + '/blog.html'
			controller: 'BlogCtrl'

		$routeProvider.when '/articles/:id',
			templateUrl: 'app/templates/' + blogConfig.theme + '/article.html'
			controller: 'ArticleCtrl'

		$routeProvider.when '/pages/:page',
			templateUrl: 'app/templates/' + blogConfig.theme + '/page.html'
			controller: 'PageCtrl'

		$routeProvider.when '/tags/:tag',
			templateUrl: 'app/templates/' + blogConfig.theme + '/tag.html'
			controller: 'TagCtrl'

		$routeProvider.when '/404',
			templateUrl: 'app/templates/404.html'
			controller: 'NotFoundCtrl'

		$routeProvider.otherwise redirectTo: '/404'

]).config ['$httpProvider', ($httpProvider) ->
]