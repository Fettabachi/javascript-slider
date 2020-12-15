# JavaScript Slider

This slider was forked from [this repo](https://github.com/codebubb/javascript-slider) and was modified to use SVGs for the prev/next buttons and to stop auto play when a prev/next button or a pager is clicked.

View the slider [here](https://fettabachi.github.io/javascript-slider/).

### Description

This slider features prev/next buttons, autoplay and pagers to skip between slides. It was built using a javascript class making it easy to use in other applications. It's made very flexible by allowing you to pass configuration details to the slider.

### Automation
This project utilizes webpack to run the dev server and build to generate the dist(docs) directory. I chose docs so I could publish the page on GitHub.

Running dev utilizes hot reloading so it's not necessary to refresh the browser whenever a HTML, CSS, or JavaScript file is saved.

Running build minifies the HTML, CSS, and JavaScript and injects the stylesheet and script into index.html with a cache busting hash. I've also setup an [automated deploy](https://infallible-morse-fc10a7.netlify.app/) with Netlify just for fun.

It uses PostCSS and allows you to create variables, mixins and nesting styles which is helpful since I used the BEM methodology for class names.
  
### Installation
This app requires Node.js to run.
Clone the repo to your local machine
```sh
$ git clone https://github.com/Fettabachi/javascript-slider.git
```
Install dependencies
```sh
$ npm install
```
Start the server
```sh
$ npm run dev
```
View the app in your favorite browser.
```sh
http://localhost:3000
```
![](magic-giphy.gif)

Build the dist(docs) package
```sh
$ npm run build
```
