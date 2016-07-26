// Karma configuration
module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
        'node_modules/moment/moment.js',
        'date-republicain.js',
        'test/*.spec.js'
    ],

    reporters: ['progress'],

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  })
};
