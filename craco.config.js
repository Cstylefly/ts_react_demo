// 配置主题色:方案一（见官方文档）

// const CracoAntDesignPlugin = require('craco-antd')

// module.exports = {
//     plugins:[
//         {
//             plugin:CracoAntDesignPlugin,
//             options:{
//                 customizeTheme:{
//                     '@primary-color':'#1DA57A'
//                 }
//             }
//         }
//     ]
// }

//配置主题色:方案二 （见官方文档）

const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins:[
        {
            plugin:CracoLessPlugin,
            options:{
                lessLoaderOptions: {
                    lessOptions: {
                      modifyVars: { '@primary-color': '#1DA57A' },
                      javascriptEnabled: true
                    }
                  }
            }
        }
    ]
}