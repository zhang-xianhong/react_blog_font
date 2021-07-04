## 一、前端开发环境的搭建
        1、安装服务器端渲染组件Next.js
        npm install -g create-next-app
        npx create-next-app blog
        npm run dev 进行测试
        2、更改index.js中的内容
        3、让Next支持CSS
            安装@zeit/next-css包
            npm install @zeit/next-css --save
            在blog根目录下，新建next.config.js文件，插入如下代码进行配置：
            const withCss = require('@zeit/next-css')
            if(typeof require !== 'undefined'){
                require.extensions['.css']=file=>{}
            }
            module.exports = withCss({})
        4、安装antd，并配置按需引入
        npm install --save antd
        安装babel-plugin-import
        npm install babel-plugin-import --save
        安装完成后，在项目根目录建立.babelrc文件，然后写入如下配置文件:
        {
            "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
            "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
                [
                    "import",
                    {
                        "libraryName":"antd"
                    }
                ]
            ]
        }
        在pages目录下，新建一个_app.js文件，然后把CSS进行全局引入.
            import App from 'next/app'
            import 'antd/dist/antd.css'
            export default App
        这样Ant Design就可以按需引入了
        在index.js加入一个按钮测试antd是否安装成功

## 二、制作博客公用头部组件
        使用antd内的相关组件，引入使用

## 三、制作两栏布局
        在index.js文件中，通过设置Row和Col并适配不同设备的占比，设计出两栏布局的效果

## 四、用List组件制作博客列表
        

# 中台（服务端）搭建——egg.js
        博客系统的服务端（或者叫做中台），采用Koa的上层框架egg.js，所谓上层框架就是在Koa的基础上，封装的框架。

## 一、认识egg.js框架
        egg.js是由阿里开源的面向企业级开发的Node.js服务端框架，目的就是帮助团队和开发人员降低开发和维护成本。需要说的是他的底层是Koa2来搭建的。
        Github地址：https://github.com/eggjs/egg

## 二、搭建开发环境
        1、进入项目的根文件夹下，新建一个service的文件夹
        2、全局安装egg.js的脚手架工具egg-init：
        命令： npm i egg-init -g
        3、安装完成后，用cd命令进入service文件夹。 用脚手架自动生成项目的基本结构，在终端中直接输入下面的命令。
        egg-init --type=simple
        4、使用命令安装egg项目所需要的所有依赖包
        命令： npm install 
        5、查看服务结果
        命令： npm run dev

## 三、egg.js目录结构和约定规范
        app文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
        config文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
        logs文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
        node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
        run文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
        test文件夹：测试使用的配合文件，这个在测试时会使用。
        .autod.conf.js: egg.js自己生成的配置文件，不需要进行修改。
        eslinttrc和eslintignore：代码格式化的配置文件。
        gitgnore：git设置忽略管理的配置文件。
        package.json： 包管理和命令配置文件，这个文件经常进行配置。
        比较重要的是app文件夹、config文件夹和package.json文件。
        
