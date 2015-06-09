# DevMeetings survey for ES6 workshop

## Installation

```
npm install
```
This will also build all sources from `./source` into `./build` directory.

## Deployment

Everything in production enviroment should be run with `NODE_ENV='production'` prefix; this will cause different build path, along with minification and uglification of code.

Proper deployment command would be:

```
NODE_ENV='production' npm install
```



