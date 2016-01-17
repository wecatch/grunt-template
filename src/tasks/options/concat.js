module.exports = {
  options: {
    separator: ''
  },
  dist: {
    src: [
      'js/selectize.js',
      'js/app.js'
    ],
    dest: '<%= path.js %>/<%= pkg.name %>.js'
  }
}