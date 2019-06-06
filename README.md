# WebCV

This is a very minimal project that aims at creating a web version of a Curriculum Vitae.
You update the `.json` file and the CI will take care of the deployment and publishing.


## Why?
Updating my CV has always been painful.
I wanted to solve this in a clever way that would have allowed me to do it in seconds, easily and, possibly, would have published it automatically.


## How does it work?
The project is composed by 2 main source files:
  - `resume.hbs` that contains the HTML structure of the CV
  - `resume.json` that contains the actual data that will be displayed

Every time some changes are committed, the WebCV is re-generated and, thanks to the the Gitlab CI, is published automatically.

Technically we have a simple [Handlebars] template that renders some JSON that contains all our informations. Committing and pushing the changes triggers the CI that runs the [Grunt] task for generating the static page and publishes it.

[Handlebars]: https://handlebarsjs.com/
[Grunt]: https://gruntjs.com/


## Do you want your WebCV?
Easy, especially on [Gitlab] (because of the integrated CI capability).
    - clone, fork or download this repo
    - make sure to have `nodejs` and `grunt-cli` installed
    - type `npm install` in the project directory
    - type `grunt` to build the project and verify it's all fine
    - modify your `resume.json` and push it

[Gitlab]: https://gitlab.com/


## Thanks to
The idea of this WebCV evolved (added some fields, removed others) from the nice project [JSON resume].
The design of the webpage was strongly inspired by [this](https://github.com/phoinixi/jsonresume-theme-spartan) and [this](https://github.com/phoinixi/jsonresume-theme-stackoverflow) themes.
The CSS of the theme has been built over the beautiful [Milligram] foundation.

[JSON resume]: http://jsonresume.org/
[Milligram]: https://milligram.io/
