# ngSeed

(Hopefully) A seed for all future ng apps.

## Basic commands

Installing dependencies:

```
npm install
```
This will also build all sources from `./source` into `./build` directory.


Running the application:

```
npm start
```
Which will run a local server and begin watching for file changes.


Tests:

```
npm test
```
This will rebuild whole app (removing all changes from `./build` dir) and start continuously running tests. They will be rerun with every file change.

## Tests

All tests should be written in Jasmine. Current config recognizes files that match `test/**/*_spec.js` pattern as test files.

## More commands

```
npm run build
```
Rebuilds.

You may also want to run gulp tasks. Available tasks in development are:

```
gulp build
gulp build-app
gulp build-vendor
gulp build-templates

gulp server
gulp watch
```

## Deployment

Everything in production enviroment should be run with `NODE_ENV='production'` prefix; this will cause different build path, along with minification and uglification of code.

Proper deployment command would be:

```
NODE_ENV='production' npm install
```
and then

```
NODE_ENV='production' npm tests
```
The tests will be run only once on PhantomJS headless browser.


