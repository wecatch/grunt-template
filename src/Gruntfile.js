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
    clean: config('clean')
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('updateVersion', 'update file version', function(){
    var code = new Date().getTime();
    var css_version = md5File('../static/css/'+pkg.name+'.css').slice(0, 8);
    var js_version = md5File('../static/js/'+pkg.name+'.min.js').slice(0, 8);

    var js_html = '<script src="/static/js/'+pkg.name+'.min.js?v='+ js_version +'"></script>';
    var css_html = '<link rel="stylesheet" href="/static/css/'+pkg.name+'.css?v='+css_version+'">';
    
    grunt.file.write('../templates/assets_js.html', js_html);
    grunt.file.write('../templates/assets_css.html', css_html);
  });

  grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'less', 'copy', 'updateVersion', 'clean']);
  grunt.registerTask('dev', ['watch']);

  grunt.registerTask('default', ['build']);
}
