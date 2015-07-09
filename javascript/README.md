GrowAsPeople JavaScript Coding Style Standard
==============================================

Basic Rules
------------
1. It is **necessary** to follow rules written in JSHint configuration file.
2. **Hopefully** follow rules written in JSCS configuration files, but it is **not mandatory**. (JSCS configuration has so strict rules. It is not good idea to care about such small issues too much.)

Database
--------
- You must not write raw SQL query but ORM functions, except when ORM function reduce performance issue.
	- Contribution to the ORM library is very welcome.

Libraries
---------
- [lodash](http://lodash.com/) is preferrable utility libraries. You should not use [underscore](http://underscorejs.org/) (including its related libraries such as [underscore.string](http://epeli.github.io/underscore.string/)) and [utilities](https://github.com/mde/utilities/) except when no desired function in lodash but those libraries.
- [fetch](https://fetch.spec.whatwg.org/) is preferrable HTTP download libraries. You should use [Github's polyfill](https://github.com/github/fetch) for frontend and [@bitinn's node-fetch](https://github.com/bitinn/node-fetch) for backend. You should not use [superagent](http://visionmedia.github.io/superagent/) and [aja.js](http://krampstudio.com/aja.js/).
