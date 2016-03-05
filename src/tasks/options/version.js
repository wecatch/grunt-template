var md5File = require('md5-file');

module.exports = {
    update:function(grunt, src, target) {
        /*
         src = {
            css: {
                god: '../static/css/god.css',
                vendor: '../static/css/vendor.css',
            },
            js: {
                god: '../static/js/god.js',
                vendor: '../static/css/vendor.js',
            }
         }

         target = {
            css: '../templates/assets_css.html',
            js: '../templates/assets_js.html',
            css_path: '/static/css/',
            js_path: '/static/js/'
         }
        */

        var css_html_target = target && target.css || '../templates/assets_css.html';
        var js_html_target = target && target.js || '../templates/assets_js.html';
        var css_path_target = target && target.css_path || '/static/css/';
        var js_path_target = target && target.js_path || '/static/js/';

        var js_html = '';
        var css_html = '';

        for(var name in src.css){
            if(src.css.hasOwnProperty(name)){
                var file = src.css[name];
                var version = md5File(file).slice(0, 8);
                css_html += '<link rel="stylesheet" href="'+css_path_target+name+'.css?v='+version+'">';
            }
        }


        for(var name in src.js){
            if(src.js.hasOwnProperty(name)){
                var file = src.js[name];
                var version = md5File(file).slice(0, 8);
                js_html += '<script src="'+js_path_target+name+'.js?v='+version+'"></script>';
            }
        }    
        grunt.file.write(js_html_target, js_html);
        grunt.file.write(css_html_target, css_html);
    }
}