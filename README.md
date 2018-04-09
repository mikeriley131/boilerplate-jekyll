# boilerplate-jekyll
Pyrographic Design's HTML/CSS boilerplate for builds using Jekyll

## Getting Started
1. Clone the repo to your local machine
2. In your terminal, run the following:
    1. `npm install`
    3. `grunt`
3. Get developing

## Folder Structure
root
+-- _assets
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- css (compiled on build)
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- images
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- js (compiled on build)
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- src
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- js
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- partials
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _boilerplate.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _fonts.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _footer.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _forms.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _global.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _header.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _helpers.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _home.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _html-linter.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _interior.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _mixins.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _mq-helper.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _normalize.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _susy.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _variables.scss
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- main.scss
+-- _config
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- .sass-lint.yml
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- .sass-lint-output.html (compiled on build)
+-- _includes
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- _components
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- footer-bottom.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- footer-top-home.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- footer-top-interior.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- head.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- header-content.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- header-home.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- header-interior.html
+-- _layouts
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- home.html
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- interior.html
+-- _pages
+-- _plugins
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- strip.rb
+-- _site (compiled on build)
+-- .gitignore
+-- _config.yml
+-- Gruntfile.js
+-- index.html
+-- package.json
+-- README.md
+-- to-do.md