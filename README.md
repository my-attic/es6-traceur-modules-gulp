#ES6 Experiments

##Install this walking-skeleton

    npm install
    bower install

##Transpile ES6 Javascript to ES5
        
    traceur --out public/js/app/app-build.js public/js/app/*.js public/js/app/**/*.js --modules=inline

##Use it

You have to put this in your `index.html` file:

    <script src="bower_components/traceur-runtime/traceur-runtime.js"></script>
    <script src="bower_components/es6-module-loader/dist/es6-module-loader.min.js"></script>
    <script src="bower_components/system.js/dist/system-production-csp.min.js"></script>
    
    <script src="js/app/app-build.js"></script>

**Caution:** you need `system-production-csp.min.js` instead of `system.min.js` (otherwise you'll nedd `traceur.js` instead of `traceur-runtime.js`)

##Run it

    node app.js