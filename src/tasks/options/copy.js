var path = require('path');

module.exports = {
    libjs: {
        src: 'lib/**/*.js',
        dest: '<%= path.js %>/',
        expand: true,
        filter: 'isFile',
        flatten: true
    }
};