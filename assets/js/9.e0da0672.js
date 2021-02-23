(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{416:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ts"}},[s._v("#")]),s._v(" 什么是 TS?")]),s._v(" "),a("ul",[a("li",[s._v("TypeScript 是 JavaScript 的一个"),a("mark",[s._v("超集")]),s._v(",所谓超集，可以从以下两个方面来理解。")])]),s._v(" "),a("ol",[a("li",[s._v("JS 中可以实现的事情，在 TS 实现中依旧可以实现。")]),s._v(" "),a("li",[s._v("在 JS 中没有的一些东西，在 TS 中存在。或者可以理解为 TS 是为了 JS 以后要实现的一些事。")])]),s._v(" "),a("ul",[a("li",[s._v("TS 可以通过一些插件实现无缝的转换成 JS，至于为什么需要转换，因为本质上浏览器是不可以直接解析 TS 的，浏览器能够识别的只有 HTML，CSS，JS。")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"为什么要使用-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-ts"}},[s._v("#")]),s._v(" 为什么要使用 TS?")]),s._v(" "),a("p",[s._v("其实从字面文字上已经可以找到答案,TypeScript 的核心就是 "),a("mark",[s._v("Type")]),s._v("，TS 中最主要的就是强调了类型。我们知道 JS 其实是一门弱类型的语言，对类型的概念非常不明显。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我是字符串"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//初始变量Str的类型为字符串,后续直接变成了数字")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("上边的代码如果是做过后端的朋友，应该知道这些在后端语言譬如 JAVA，C，C++中根本是不可能的事，程序会直接报错")])]),s._v(" "),a("p",[s._v("当然会有人觉得 JS 已经这么方便了，为什么还要强制使用强类型的 TS 来写代码呢，不是多此一举？可能结合实际生活更好理解一些。")]),s._v(" "),a("p",[s._v("假如你家里有一个杯子，理论上这个杯子里可以放任何东西，可以装水，装饮料，装果汁，甚至刷牙洗漱也可以用这个杯子等等。但是仔细想想，这样好像并不健康。")]),s._v(" "),a("p",[s._v("所以在 TS 中强调的就是分类，并指定当前容器具体是做什么。这样对于代码管理，整个当前应用的生态都会有比较好的效果。")]),s._v(" "),a("h2",{attrs:{id:"安装-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-ts"}},[s._v("#")]),s._v(" 安装 TS")]),s._v(" "),a("ol",[a("li",[s._v("命令行运行如下命令，全局安装 TypeScript：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g typescript\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("安装完成后，在控制台运行如下命令，检查安装是否成功(4.x)：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tsc -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.typescriptlang.org/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"小试牛刀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小试牛刀"}},[s._v("#")]),s._v(" 小试牛刀")]),s._v(" "),a("ol",[a("li",[s._v("新建一个 demo.ts 文件。写一些简单代码")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我是前端菜鸡"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("使用 tcs 命令 转换为 js 文件.")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tsc demo.ts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"自动转换-ts-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动转换-ts-文件"}},[s._v("#")]),s._v(" 自动转换 TS 文件")]),s._v(" "),a("h3",{attrs:{id:"使用配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用配置文件"}},[s._v("#")]),s._v(" 使用配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tsc --init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("运行命令后会自动生成 tsconfig.json 文件，之后只需要运行 tsc(后续不再跟文件名)，会自动把当前目录下所有 TS 文件转为 JS。")])]),s._v(" "),a("h3",{attrs:{id:"使用-vscode-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vscode-插件"}},[s._v("#")]),s._v(" 使用 VScode 插件")]),s._v(" "),a("ul",[a("li",[s._v("插件名称 Typescript Auto Compiler")])]),s._v(" "),a("p",[s._v("后续的操作中不需要再运行 tsc 命令")])])}),[],!1,null,null,null);t.default=r.exports}}]);