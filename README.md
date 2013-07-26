Minimalist Blog
===============

This is a minimalist generator blog for Github pages

Installing
----------

Fork it on a `gh-pages` branch to host it on github

then, you can pull your new repository and run it

 ```bash
git clone ...
cd minimalist-blog && npm install && grunt server
 ```

Configure conf.js
-----------------

All your blog is in a conf.js files which contains all parameters of your blog

 ```js
var blogConfig = {
	"name":"Minimalist blog", //name of your blog
	"description":"...", //description of your blog
	"email": "YOUR_EMAIL",
	"logo": "assets/gitblog.gif", //Your logo

	"theme": "default", //your can make your own theme defined a new folder in app/templates/
	"social": {
		"disqus": "...", //set your disqus id if you want to enable comments
		"twitter_account": "..." //set your twitter account if you want add some follow button,
		"github": { // TODO: not used yet
			"account": "thyb",
			"repository": "minimalist-blog"
		}
	},
	"authors": [
		{
			"username": "thyb",
			"fullname": "Thibaud Arnault",
			"email": "thyb@oauth.io",
			"gravatar": "4bda4cba273a73659a518e5ab26fc1bb", //The gravatar ID
			"job": "...",
			"bio": "..."
		}
	],
	"menu": [
		{
			"url": "#/",
			"text": "Home"
		},
		{
			"url": "#/pages/me", //You can link your menu to a custom page
			"text": "About me"
		}
		//...
	],
	"sidebar": [
		"tags.html", //include pages/tags.html in the first block
		"forkme.html",
		"follow.html"
		//...
	],
	"sortArticle": "desc", //asc or desc : define the order to display
	"limitPerPage": 5, //number of article displayed per page
	"articles": [ //define all your article here
		{
			"id": "welcome-to-my-blog", //take the articles/welcome-to-my-blog.md file
			"title": "Article title",
			"summary": "...", //the summary you want to display on the front page
			"img": { // TODO: not used yet
				"src": "assets/yourImage.png", //title image url
				"imgPosition": "center" //left right center
			}
			"date": "7-14-2013", //date of the post
			"author": "thyb", //the author id
			"format": "markdown", //can be `html̀` or `markdown`
			"tags": ["my-tag1", "my-tag2"] //set tags
		}
		//...
	]
}
 ```

All your articles are in ̀`articles/` folder. This will render a blog like this one: [DEMO](http://thyb.github.io/minimalist-blog)

Copyright & License
-------------------

Copyright 2013 Thibaud Arnault

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.