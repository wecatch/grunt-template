module.exports = {
    production: {
        options: {
            paths: ["css"],
            compress: true
        },
        files: {
            "<%= path.css %>/<%= pkg.name %>.css": "css/base.less"
        }
    }
}