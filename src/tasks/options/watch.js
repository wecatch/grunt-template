module.exports = {
    css: {
        files: 'css/**/*.less',
        tasks: ['less', 'copy'],
        options: {
            event: ['changed']
        }
    },
    app: {
        files: 'js/**/*.js',
        tasks: ['jshint', 'concat', 'uglify', 'copy', 'clean', 'updateVersion'],
        options: {
            event: ['changed']
        }
    }
}
