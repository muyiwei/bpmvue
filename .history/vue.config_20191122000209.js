module.exports = {
    devServer: {
        proxy:{
            '^/Portal':{
                target:'http://47.94.151.244:8081//'
            }
        } 

      }
}