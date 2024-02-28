# Blog Source

This blog is currently generated by Eleventy (https://www.11ty.dev/docs/get-started/)

See the get started guide to start

* Get started vid: https://www.youtube.com/watch?v=BKdQEXqfFA0 
* Quick template walkthrough: https://www.mikeaparicio.com/template-talk/ 

This blog is based on the template:
https://github.com/NikitaZanella/11ty-SASS

# Pre-requisite
Node.js

First time:
* npm install

To build locally:
* npm run build

To start (serve):
* npm run start

To deploy built site to github pages (done with the npm package [gh-pages](https://www.npmjs.com/package/gh-pages)):
* npm run deploy

For more commands see the scripts field in package.json

Global config file: .eleventy.js

# Notes
The pair of --- --- in every template / document is called the "front matter": https://www.11ty.dev/docs/data-frontmatter/

## Add both last modified and published dates
Taking inspirations from this answer: https://github.com/11ty/eleventy/issues/869#issuecomment-767986086

With some help from MS copilot, I installed the child_process npm package, to use git in a shell command to get the last commit and first commit date.

I also decided to use a filter instead of shortcode, for easier chaining with further filters.