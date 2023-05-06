(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{647:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Webapck 的实现原理，及打包过程")])]),t._v(" "),a("h2",{attrs:{id:"_1-webpack中的module是指什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack中的module是指什么？"}},[t._v("#")]),t._v(" 1. Webpack中的Module是指什么？")]),t._v(" "),a("p",[t._v("webpack 支持 "),a("code",[t._v("ESModule")]),t._v(", "),a("code",[t._v("CommonJS")]),t._v(", "),a("code",[t._v("AMD")]),t._v(", "),a("code",[t._v("Assets")]),t._v(".(image, font, video, audio, json)")]),t._v(" "),a("h4",{attrs:{id:"_1-esm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-esm"}},[t._v("#")]),t._v(" 1. ESM")]),t._v(" "),a("h4",{attrs:{id:"_2-commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-commonjs"}},[t._v("#")]),t._v(" 2. CommonJS")]),t._v(" "),a("h3",{attrs:{id:"所以webpack-modules-如何表达自己的各种依赖关系？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所以webpack-modules-如何表达自己的各种依赖关系？"}},[t._v("#")]),t._v(" 所以webpack modules, 如何表达自己的各种依赖关系？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ESM import 语句")])]),t._v(" "),a("li",[a("p",[t._v("CommonJS require")])]),t._v(" "),a("li",[a("p",[t._v("AMD define require")])]),t._v(" "),a("li",[a("p",[t._v("css/sass/less @import.")])])]),t._v(" "),a("h3",{attrs:{id:"⭐️我们常说的-chunk-和-bundle-的区别是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⭐️我们常说的-chunk-和-bundle-的区别是什么？"}},[t._v("#")]),t._v(" ⭐️我们常说的 chunk 和 bundle 的区别是什么？")]),t._v(" "),a("h4",{attrs:{id:"_1-chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-chunk"}},[t._v("#")]),t._v(" 1. Chunk")]),t._v(" "),a("p",[t._v("Chunk 是 webpack 打包过程中Modules的集合，是***打包过程中***的概念")]),t._v(" "),a("p",[t._v("Webpack 的打包是一个入口模块开始，入口模块引用其他模块，其他模块引用其他模块……")]),t._v(" "),a("p",[t._v("Webpack 通过引用关系逐个打包模块，这些module就形成了一个chunk.")]),t._v(" "),a("p",[t._v("如果有多个入口模块，可能会产出多条打包路径。每条路径都会形成一个chunk.")]),t._v(" "),a("h4",{attrs:{id:"_2-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-bundle"}},[t._v("#")]),t._v(" 2. Bundle")]),t._v(" "),a("p",[t._v("是我们最终输出的一个或者多个打包好的文件。")]),t._v(" "),a("h4",{attrs:{id:"_3-chunk-和-bundle-的关系是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-chunk-和-bundle-的关系是什么？"}},[t._v("#")]),t._v(" 3. Chunk 和 Bundle 的关系是什么？")]),t._v(" "),a("p",[t._v("大多数情况下，一个chunk会生产一个bundle。但是也有例外。")]),t._v(" "),a("p",[t._v("但是如果加了sourcemap，一个entry，一个chunk 对应两个bundle。")]),t._v(" "),a("p",[t._v("Chunk 是过程中代码块，Bundle 是打包结果输出的代码块。Chunk在构建完成就呈现为Bundle。")]),t._v(" "),a("h4",{attrs:{id:"_4-split-chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-split-chunk"}},[t._v("#")]),t._v(" 4. Split Chunk")]),t._v(" "),a("h4",{attrs:{id:"_5-这段配置会产生几个chunk？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-这段配置会产生几个chunk？"}},[t._v("#")]),t._v(" 5. 这段配置会产生几个Chunk？")]),t._v(" "),a("blockquote",[a("p",[t._v("Runtime：在浏览器运行时，webpack用来连接模块化的应用程序的所有代码。runtime包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    extry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        other"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/other.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//devtool: 'source-map', //会产生sourcemap源文件")]),t._v("\n    optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        runtimeChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        splitChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cacheGroups"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n                 * 公共的chunk\n                 * minChunks——如果至少被2个模块用到，可以提取成一个公共的chunk\n                 * minSize——如果未达到最小的size，则不提取\n                 */")]),t._v("\n                commons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不限制")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n                 * 打包第三方包\n                 */")]),t._v("\n                vendor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可正则匹配")]),t._v("\n                    chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vendor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"plugin和loader分别是做什么的？怎么工作的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin和loader分别是做什么的？怎么工作的？"}},[t._v("#")]),t._v(" Plugin和Loader分别是做什么的？怎么工作的？")]),t._v(" "),a("h4",{attrs:{id:"_1-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-loader"}},[t._v("#")]),t._v(" 1. Loader")]),t._v(" "),a("blockquote",[a("p",[t._v("模块转换器，将非js模块转化为webpack能识别的js模块。")]),t._v(" "),a("p",[t._v("本质上，webpack loader将所有类型的文件，转换为应用程序的"),a("strong",[t._v("依赖图")]),t._v("可以直接引用的模块。")])]),t._v(" "),a("h4",{attrs:{id:"_2-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-plugin"}},[t._v("#")]),t._v(" 2.  Plugin")]),t._v(" "),a("blockquote",[a("p",[t._v("扩展插件，webpack 运行的各个阶段，都会广播出对应的事件，插件去监听对应的事件。")])]),t._v(" "),a("h4",{attrs:{id:"_3-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-compiler"}},[t._v("#")]),t._v(" 3. Compiler")]),t._v(" "),a("blockquote",[a("p",[t._v("是个对象，包含了webpack环境的所有配置信息。包括options loader,plugins.")]),t._v(" "),a("p",[t._v("webpack 启动的时候实例化，它在全局是唯一的。可以把它理解为webpack的实例。")])]),t._v(" "),a("h4",{attrs:{id:"_4-compliation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-compliation"}},[t._v("#")]),t._v(" 4.  Compliation")]),t._v(" "),a("blockquote",[a("p",[t._v("包含了当前的模块资源，编译生成资源。")]),t._v(" "),a("p",[t._v("webpack 在开发模式下运行的时候，每当检测到一个文件变化，就会创建一次新的 Compliation.")])]),t._v(" "),a("h3",{attrs:{id:"能简单描述一下webpack的打包过程吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能简单描述一下webpack的打包过程吗？"}},[t._v("#")]),t._v(" 能简单描述一下webpack的打包过程吗？")]),t._v(" "),a("h5",{attrs:{id:"_1-初始化参数：shell-webpack-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化参数：shell-webpack-config-js"}},[t._v("#")]),t._v(" 1. 初始化参数：shell webpack.config.js")]),t._v(" "),a("h5",{attrs:{id:"_2-开始编译：初始化一个compiler对象，加载所有的配置，开始执行编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始编译：初始化一个compiler对象，加载所有的配置，开始执行编译"}},[t._v("#")]),t._v(" 2. 开始编译：初始化一个Compiler对象，加载所有的配置，开始执行编译")]),t._v(" "),a("h5",{attrs:{id:"_3-确定入口：根据entry中的配置，找出所有的入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-确定入口：根据entry中的配置，找出所有的入口文件"}},[t._v("#")]),t._v(" 3. 确定入口：根据entry中的配置，找出所有的入口文件")]),t._v(" "),a("h5",{attrs:{id:"_4-编译模块：从入口文件开始，调用所有的loader，再去递归的找依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译模块：从入口文件开始，调用所有的loader，再去递归的找依赖"}},[t._v("#")]),t._v(" 4. 编译模块：从入口文件开始，调用所有的loader，再去递归的找依赖")]),t._v(" "),a("h5",{attrs:{id:"_5-完成模块编译：得到每个模块被翻译后的最终内容以及它们之间的依赖关系（依赖图）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-完成模块编译：得到每个模块被翻译后的最终内容以及它们之间的依赖关系（依赖图）"}},[t._v("#")]),t._v(" 5. 完成模块编译：得到每个模块被翻译后的最终内容以及它们之间的依赖关系（依赖图）")]),t._v(" "),a("h5",{attrs:{id:"_6-输出资源：根据得到的依赖关系，组装成一个个包含多个module的chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-输出资源：根据得到的依赖关系，组装成一个个包含多个module的chunk"}},[t._v("#")]),t._v(" 6. 输出资源：根据得到的依赖关系，组装成一个个包含多个module的chunk")]),t._v(" "),a("h5",{attrs:{id:"_7-输出完成：根据配置，确定要输出的文件名以及文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-输出完成：根据配置，确定要输出的文件名以及文件路径"}},[t._v("#")]),t._v(" 7.输出完成：根据配置，确定要输出的文件名以及文件路径")]),t._v(" "),a("h2",{attrs:{id:"手写webpack打包工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写webpack打包工具"}},[t._v("#")]),t._v(" 手写webpack打包工具")]),t._v(" "),a("blockquote",[a("p",[t._v("本质上，webpack是一个现代js应用程序的静态模块打包器。")]),t._v(" "),a("p",[t._v("当webpack处理应用程序的时候，它会递归的构建一个依赖关系图，其中包含应用程序需要的每个模块。然后将所有这些模块打包成一个或多个bundle。")])]),t._v(" "),a("h4",{attrs:{id:"_1-esmodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-esmodule"}},[t._v("#")]),t._v(" 1. ESModule")]),t._v(" "),a("h5",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),a("ol",[a("li",[t._v("找到一个入口文件")]),t._v(" "),a("li",[t._v("解析这个入口文件，提起他的依赖")]),t._v(" "),a("li",[t._v("解析入口文件依赖的依赖，递归的去创建一个文件间的依赖图，描述所有文件的依赖关系")]),t._v(" "),a("li",[t._v("把所有文件打包成一个文件")])]),t._v(" "),a("h5",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("新建几个js源文件")])]),t._v(" "),a("li",[a("p",[t._v("肉眼观察几个文件的依赖关系")])]),t._v(" "),a("li",[a("p",[t._v("开始编写自己的打包工具")])]),t._v(" "),a("li",[a("p",[t._v("分析AST，思考如何能够解析出依赖")]),t._v(" "),a("ul",[a("li",[t._v("File -> program")]),t._v(" "),a("li",[t._v("program -> body 里面是我们各种语法的描述")]),t._v(" "),a("li",[t._v("ImportDeclaration 引入的声明")]),t._v(" "),a("li",[t._v("ImportDeclaration source 属性，source.value 就是引入文件的地址。")])])]),t._v(" "),a("li",[a("p",[t._v("生成 AST")]),t._v(" "),a("p",[t._v("babylon 一个基于babel的js解析工具。")])]),t._v(" "),a("li",[a("p",[t._v("基于AST，找到文件的ImportDeclaration Node")]),t._v(" "),a("p",[t._v("babel-traverse 可以像遍历对象一样遍历语法树。")])]),t._v(" "),a("li",[a("p",[t._v("获取依赖")])]),t._v(" "),a("li",[a("p",[t._v("优化createAsset，使其能够区分文件。")]),t._v(" "),a("p",[t._v("因为要获取所有文件的依赖，所以咱们需要一个id来标识所有文件。")]),t._v(" "),a("p",[t._v("这里咱们用一个简单的自增number，这样遍历的每个文件id就唯一了。")]),t._v(" "),a("p",[t._v("先获取到文件的id filename 以及dependencies")])]),t._v(" "),a("li",[a("p",[t._v("我们获取到单个文件的依赖了，接下来尝试建立依赖图")]),t._v(" "),a("p",[t._v("新增一个函数createGraph，把createAsset调用移入creatGraph.")]),t._v(" "),a("p",[t._v("文件的路径需要是动态的，所以createGraph接收一个参数entry")])]),t._v(" "),a("li",[a("p",[t._v("上面存储的都是相对路径，想办法把他们转为绝对路径，有了绝对路径，我们才能获取到各个文件的asset")])]),t._v(" "),a("li",[a("p",[t._v("我们需要一个map，记录depend中的相对路径 和 childAsset的对应关系。")]),t._v(" "),a("p",[t._v("因为我们后面要做的依赖的引入，需要这样的一个对应关系。")])]),t._v(" "),a("li",[a("p",[t._v("遍历所有文件")])]),t._v(" "),a("li",[a("p",[t._v("依赖图完成后，新增一个方法bundle")])]),t._v(" "),a("li",[a("p",[t._v("创建整体的结果代码（因为它需要接受参数，且需要立即执行，所以用一个自执行函数来包裹）")]),t._v(" "),a("p",[t._v("自执行函数接收的参数是—module，是每一个文件模块")])]),t._v(" "),a("li",[a("p",[t._v("编译源代码")]),t._v(" "),a("p",[t._v("npm i babel-core")]),t._v(" "),a("p",[t._v("npm i babel-preset-env 告诉babel转成什么格式")])]),t._v(" "),a("li",[a("p",[t._v("把编译后的代码加入result中")]),t._v(" "),a("p",[t._v("module变量代表当前模块，这个变量是一个对象")]),t._v(" "),a("p",[t._v("它的exports属性是对外的接口，module.exports，加载某个模块，其实就是加载该模块的module.exports属性。")]),t._v(" "),a("p",[t._v("require方法用于加载模块")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babylon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babylon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" traverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-traverse'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babylon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dependencies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ImportDeclaration")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 16.编译所有源代码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformFromAst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGraph")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mainAsset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allAsset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mainAsset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" asset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" allAsset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapping "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("relativePath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" absolutePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" childAsset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("creatAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absolutePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("relativePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" childAsset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n\n            allAsset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childAsset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" allAsset\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("graph")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\n    graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(":[\n             function(require,module,exports){\n                 ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n             }\n             ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(",\n        ],")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现 require 方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n        (function(modules){\n            function require(id){\n                const [fn, mapping] = modules[id]\n                \n                function localRequire(relativePath){\n                    return require(mapping[relativePath])\n                }\n\n                const module = { exports: {} }\n                \n                fn(localRequire, module , module.exports)\n\n                return module.exports\n            }\n            require(0)\n        })(")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("modules"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(")\n        ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graph "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGraph")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./source/entry.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);