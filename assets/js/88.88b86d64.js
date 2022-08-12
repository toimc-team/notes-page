(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{529:function(t,s,a){t.exports=a.p+"assets/img/image-20210501164344335.8825a1b2.png"},978:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"贡献规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献规范"}},[t._v("#")]),t._v(" 贡献规范")]),t._v(" "),s("p",[t._v("在参与贡献之前，请先熟读本规范。")]),t._v(" "),s("h2",{attrs:{id:"必备的知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必备的知识"}},[t._v("#")]),t._v(" 必备的知识")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("必须要会使用MarkDown语法，并遵循 "),s("a",{attrs:{href:"./01-%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83"}},[t._v("编写规范")])])]),t._v(" "),s("li",[s("p",[t._v("学习vuepress的使用，参考"),s("RouterLink",{attrs:{to:"/course/vuepress/"}},[t._v("文档")])],1)]),t._v(" "),s("li",[s("p",[t._v("需要了解 Github 的PR方式，并按照如下要求提交Commit，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("格式: [todo] message\n\ntodo: A - ADD, U - UPDATE, D - DELETE, F - FIX BUGS\n")])])]),s("p",[t._v("参考"),s("RouterLink",{attrs:{to:"/course/update-logs/"}},[t._v("链接")])],1)])]),t._v(" "),s("h2",{attrs:{id:"贡献流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献流程"}},[t._v("#")]),t._v(" 贡献流程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("下载仓库代码，本地安装，并使用"),s("code",[t._v("npm run dev")]),t._v("运行项目；")])]),t._v(" "),s("li",[s("p",[t._v("明确自己更新的文章或者内容的范畴。")]),t._v(" "),s("ul",[s("li",[t._v("如果是大的篇章，需要更新"),s("code",[t._v("config.js")]),t._v("中的目录；")]),t._v(" "),s("li",[t._v("如果是小更新，只需要在先前别人的文章基础之上进行修订即可")])])]),t._v(" "),s("li",[s("p",[t._v("新建"),s("code",[t._v("xxx.md")]),t._v("文章")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("如果是根目录，则需要创建一个README.md的文件")])]),t._v(" "),s("p",[t._v("系列文章的目录需要按照如下要求进行命名：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(529),alt:"image-20210501164344335"}})]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("保证文章列表的顺序：文章以"),s("code",[t._v("0")]),t._v("或者不加"),s("code",[t._v("0")]),t._v("，从1开始，子篇章使用"),s("code",[t._v(".")]),t._v("进行扩展")]),t._v(" "),s("li",[t._v("文章内，不要设置"),s("code",[t._v("sidebar: auto")])]),t._v(" "),s("li",[t._v("文章内的一级标题与文件名同名，并去除标号，如："),s("code",[t._v("1-搭建开发环境.md")]),t._v("的一级标题应该是"),s("code",[t._v("搭建开发环境")])]),t._v(" "),s("li",[t._v("所有.md的文件的图片，存放在相对目录的"),s("code",[t._v("assets")]),t._v("目录中")])])]),t._v(" "),s("li",[s("p",[t._v("配置"),s("code",[t._v("config.js")]),t._v("添加自定义目录")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sidebar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小程序'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("collapsable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genSidebarConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project/community-miniapp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" siderBarOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("关于"),s("code",[t._v("genSidebarConfig")]),t._v("，主要的目的是为了自动形成数组目录，参考"),s("RouterLink",{attrs:{to:"/course/vuepress/01-配置说明.html#配置文件"}},[t._v("说明")]),t._v("：")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genSidebarConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project/community-miniapp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" siderBarOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/1-搭建开发环境'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/2-首页模块'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/2.1-发贴功能'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/2.2-文章详情'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/3-消息模块'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/4-热门模块'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/5-个人中心'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'community-miniapp/6-发布上线'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("按照 "),s("a",{attrs:{href:"./01-%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83"}},[t._v("编写规范")]),t._v("书写，一定注意不要有4级标题；")])]),t._v(" "),s("li",[s("p",[t._v("每完成一个部分进行一次commit；")])]),t._v(" "),s("li",[s("p",[t._v("完成一个大的功能介绍之后，提交一次PR；")])]),t._v(" "),s("li",[s("p",[t._v("管理员完成PR检查后，会自动合并，并部署发布出来。")])])]),t._v(" "),s("h2",{attrs:{id:"福利社"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#福利社"}},[t._v("#")]),t._v(" 福利社")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("前期所有的参与的人员，获得永久本笔记更新的授权码一份；")])]),t._v(" "),s("li",[s("p",[t._v("优质的贡献内容，后期提供稿酬，标准拟定中...；")])]),t._v(" "),s("li",[s("p",[t._v("贡献人员，可以抽取课程大额优惠券；")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);