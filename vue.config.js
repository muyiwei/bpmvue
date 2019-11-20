module.exports = {
    devServer: {
        proxy:{
            '^/Portal':{
                target:'http://47.98.49.203:8085/'
            }
        } 

      }
}