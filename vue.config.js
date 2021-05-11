const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path');
const fs = require('fs');
const mockDir = path.resolve(__dirname, './mock');
function unUse(app, path,fn){
  app.use(path,function(){});
  let length = app._router.stack.length;
  let regstr = app._router.stack[length-1].regexp;
   app._router.stack.forEach((v,i)=>{
    if(v.regexp==regstr)
    {
      v.handle = fn;
    }
  })

  
}

module.exports = {
    devServer: {
        proxy:{
            '^/Portal':{
                target:'http://47.94.151.244:8081/'
            }
        },
        host:"127.0.0.1" ,
        before:(app) => {
            console.log("before...........................................................................................................................................................");
            (function setMock(mockDir) {
              fs.readdirSync(mockDir).forEach(function (file) {
                let filePath = path.resolve(mockDir, file);
                console.log( filePath );
                let mocks;
                if (fs.statSync(filePath).isDirectory()) {
                  setMock(filePath)
                } else {
                  mocks = require(filePath);
                  
                  mocks.forEach((mock) => {
                    app.use(mock.api, mock.response1);
                    debugger;
                    app.use(mock.api, mock.response1);
                  });
                  fs.watchFile(filePath,function(){
                    console.log("change");
                    mocks = require(filePath);
      
                    mocks.forEach((mock) => {
                      unUse(app, mock.api,mock.response1);
                    });
                    console.log(app._router);
                  })
                }
              })
            })(mockDir)
            console.log(app._router.stack); 
        }

      },
      configureWebpack:{
          plugins:[ 
        new ManifestPlugin()
    ]
    }
}