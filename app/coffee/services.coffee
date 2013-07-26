app.factory 'BlogService', ($http, $rootScope) ->
	getArticle: (id, success, error) ->
		article = blogConfig.articles.find ((d) ->
			return d.id == id
		)
		if not article
			error('404')
		if article.format == 'markdown'
			ext = 'md'
		else
			ext = 'html'

		$http(
			method: "GET"
			url: "articles/" + id + "." + ext
		).success ((data) ->
			if (ext == 'md')
				$http(
					method: "POST"
					url: "https://api.github.com/markdown"
					data: JSON.stringify
						text: data
						mode: "markdown"
				).success (data) ->
					success data, article
			else
				success data
		)