#ES6 Experiments

##Install this walking-skeleton

    npm install
    bower install

##Transpile ES6 Javascript to ES5
        
    traceur --out public/js/app/app-build.js public/js/app/*.js public/js/app/**/*.js --modules=inline

##Use it

You have to put this in your `index.html` file:

    <script src="bower_components/traceur-runtime/traceur-runtime.js"></script>
    
    <script src="js/app/app-build.js"></script>

##Run it
    
type: `gulp`, the watcher transpiles files at each changes
    
type: `node app.js` to run the webapp
    