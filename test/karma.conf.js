// Karma configuration
// Generated on Fri Jul 22 2016 21:48:04 GMT+0200

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

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  })
};
