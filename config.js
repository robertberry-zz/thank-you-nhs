System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "bean": "github:fat/bean@1.0.14",
    "bonzo": "github:ded/bonzo@2.0.0",
    "lodash-node": "npm:lodash-node@3.5.0",
    "qwery": "github:ded/qwery@4.0.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash-node@3.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

