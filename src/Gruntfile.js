function config(name) {
  return require('./tasks/options/' + name);
}

module.exports = function(grunt) {

  var path = require('path');
  var md5File = require('md5-file')
  var js_source_path = '../static/js';
  var css_source_path = '../static/css';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    path: {
      js: js_source_path,
      css: css_source_path
    },
    pkg: pkg,
    meta: config('meta'),
    concat: config('concat'),
    uglify: config('uglify'),
    jshint: config('jshint'),
    less: config('less'),
    watch: config('watch'),
    copy: config('copy'),
    clean: config('clean'),
    shell: config('shell')
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');


  grunt.registerTask('updateVersion', 'update file version', function(){
      var css = {
          'god': '../static/css/god.css',
          'semantic.min': '../static/css/semantic.min.css',
      }

      var js = {
          'god': '../static/js/god.js',
          'semantic.min': '../static/js/semantic.min.js',
          'vendor': '../static/js/vendor.js',
      }
      var src = {js: js, css: css};
      config('version').update(grunt, src);
  });
  
  grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'less', 'copy', 'updateVersion', 'clean']);
  grunt.registerTask('dev', ['watch']);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('ember', ['shell', 'updateVersion']);
}
