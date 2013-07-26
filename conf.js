var blogConfig = {
	"adminMode": "false", //put true for development (add features for admin)

	"name":"Minimalist Blog",
	"description":"Minimalist Blog generator for Github Page",
	"email": "thibaud.arnault@gmail.com",
	"logo": "assets/gitblog.gif",

	"theme": "default",
	"social": {
		"disqus": "oauthioblog",
		"twitter_account": "thibaud_arnault"
	},
	"authors": [
		{
			"username": "thyb",
			"fullname": "Thibaud Arnault",
			"email": "thyb@oauth.io",
			"gravatar": "4bda4cba273a73659a518e5ab26fc1bb",
			"job": "CEO & Co-founder of Webshell.io & OAuth.io",
			"bio": "During a week end, I wanted to make a blog easy to configure, easy to spread, with awesome collaboration tools. What could be better than a blog on top of Github using Github pages? I think it's a new simple way for developers to blog. Now, you can use versionning, collaboration and hosting efficiently with Github & Github pages for your blog. I just made a kind of skeleton. Have fun using it :)"
		}
	],
	"menu": [
		{
			"url": "#/",
			"text": "Home"
		},
		{
			"url": "#/pages/me",
			"text": "About me"
		}
	],
	"sidebar": [
		"tags.html",
		"forkme.html",
		"follow.html"
	],
	"sortArticle": "desc",
	"limitPerPage": 5,
	"articles": [
		{
			"id": "welcome",
			"title": "Welcome to Minimalist Blog",
			"summary": "Minimalist Blog generator for Github Page, you only have to add markdown files to create new articles like this one",
			"img": {
				"src": "",
				"pos": "center"
			},
			"date": "7-14-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["welcome"]
		},
		{
			"id": "features",
			"title": "Features available",
			"summary": "Minimalist Blog is really small and full of feature: articles, pages, menu, sidebar, theme",
			"date": "7-25-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["welcome"]
		},
		{
			"id": "install-github",
			"title": "Install your blog in 1 minute on your Github account",
			"summary": "To install this blog on your account, you just have to fork this repository in <code>gh-pages</code> branch",
			"date": "7-25-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["install"]
		},
		{
			"id": "install-local",
			"title": "Install in local using Jekyll",
			"summary": "You can clone this repository and modify it as your need and host it using <code>grunt server</code> command. Then you can access your blog on <a href=\"http://localhost:4000\">http://localhost:4000</a>",
			"date": "7-25-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["install"]
		}
	]
}