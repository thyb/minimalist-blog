Minimalist Blog is an opensource, lightweight, collaborative blog generator for Github Page. No database to maintain, all your article are hosted in `articles/` in markdown and/or html.

All your blog is configurable in conf.js where you can set / enable and disable all stuff you want.

 ```js
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
			"bio": "During (...) Have fun using it :)"
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
		"forkme.html",
		"follow.html",
		"tags.html"
	],
	"sortArticle": "desc",
	"limitPerPage": 5,
	"articles": [
		{
			"id": "welcome",
			"title": "Welcome to Minimalist Blog",
			"summary": "Minimalist Blog generator for Github Pages, you only have to add markdown files in <code>articles/</code> folder to create new articles like this one",
			"img": {
				"src": "",
				"pos": "center"
			},
			"date": "7-14-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["welcome"]
		},
		...
	]
}
 ```

Minimalist Blog use Github API to render your Markdown: [Github flavored markdown](https://help.github.com/articles/github-flavored-markdown)