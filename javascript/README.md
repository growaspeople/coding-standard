GrowAsPeople JavaScript Coding Style Standard
==============================================

Principle
------------
Follow ESLint rules.

- Errors **MUST NOT** be ignored and do not deploy code without fixing them.
- Warnings can be ignored for a while, but they must be fixed in the future.

Database
--------
- You must not write raw SQL query but ORM functions, except when ORM function reduce performance issue.
	- Contribution to the ORM library is very welcome.

Libraries
---------
- [lodash](http://lodash.com/) is preferrable utility libraries. You should not use [underscore](http://underscorejs.org/) (including its related libraries such as [underscore.string](http://epeli.github.io/underscore.string/)) and [utilities](https://github.com/mde/utilities/) except when no desired function in lodash but those libraries.
- [fetch](https://fetch.spec.whatwg.org/) is preferrable HTTP download libraries. You should use [Github's polyfill](https://github.com/github/fetch) for frontend and [@bitinn's node-fetch](https://github.com/bitinn/node-fetch) for backend. You should not use [superagent](http://visionmedia.github.io/superagent/) and [aja.js](http://krampstudio.com/aja.js/).
