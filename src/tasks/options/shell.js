module.exports = {
    options: {
        stderr: true
    },
    deploy: {
      command:[
          'cd ../../god-app',
          'ember build -prod',
          'cp -f dist/assets/vendor.js ../god-server/static/js',
          'cp -f dist/assets/god.js ../god-server/static/js',
          'cp dist/assets/semantic.min.js ../god-server/static/js',
          'cp -r dist/assets/themes ../god-server/static/css',
          'cp -r dist/assets/god.css ../god-server/static/css',
          'cp dist/assets/semantic.min.css ../god-server/static/css'
      ].join('&&')
    }
}