(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{523:function(t,s,e){t.exports=e.p+"assets/img/front-end-notes.285b0b41.png"},524:function(t,s,e){t.exports=e.p+"assets/img/fork.237e4b0c.png"},525:function(t,s,e){t.exports=e.p+"assets/img/git-clone.068cfb9c.png"},526:function(t,s,e){t.exports=e.p+"assets/img/index.884d47cf.png"},527:function(t,s,e){t.exports=e.p+"assets/img/pull-request.0ec85cef.png"},528:function(t,s,e){t.exports=e.p+"assets/img/create-pull-request.7fcac903.png"},977:function(t,s,e){"use strict";e.r(s);var n=e(10),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pull-request流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull-request流程"}},[t._v("#")]),t._v(" Pull Request流程")]),t._v(" "),s("p",[t._v("本章节将从项目准备到内容创作到最后的提交PR，来指导大家如何正确提交PR，为项目贡献内容。")]),t._v(" "),s("h2",{attrs:{id:"项目准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目准备"}},[t._v("#")]),t._v(" 项目准备")]),t._v(" "),s("ol",[s("li",[t._v("打开"),s("a",{attrs:{href:"https://github.com/toimc-team",target:"_blank",rel:"noopener noreferrer"}},[t._v("toimc team的GitHub地址"),s("OutboundLink")],1),t._v("，登录你的GitHub账号，找到"),s("code",[t._v("front-end-notes")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(523),alt:"front-end-notes"}})]),t._v(" "),s("p",[t._v("进入项目，点击右上角的"),s("code",[t._v("Fork")]),t._v("到自己仓库。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(524),alt:"fork"}})]),t._v(" "),s("p",[t._v("打开自己仓库里的"),s("code",[t._v("front-end-notes")]),t._v("，点击"),s("code",[t._v("Code")]),t._v("获得地址，")]),t._v(" "),s("p",[s("img",{attrs:{src:e(525),alt:"git clone"}})]),t._v(" "),s("p",[t._v("打开命令行，输入以下命令")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码，首次使用GitHub拉取代码需要输入GitHub的账号和密码")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 你复制的clone地址\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" front-end-notes\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装项目依赖")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待依赖安装完成，运行项目")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n\n")])])]),s("p",[t._v("等待项目启动完成，浏览器输入"),s("code",[t._v("localhost:8080")]),t._v("，即可访问项目。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(526),alt:"index"}})]),t._v(" "),s("h2",{attrs:{id:"内容创作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容创作"}},[t._v("#")]),t._v(" 内容创作")]),t._v(" "),s("p",[t._v("参与内容创作前，你需要先了解"),s("RouterLink",{attrs:{to:"/course/vuepress/"}},[t._v("VuePress")]),t._v("以及"),s("a",{attrs:{href:"https://toimc-team.github.io/notes-page/course/vuepress/#md%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora相关的配置"),s("OutboundLink")],1),t._v("。")],1),t._v(" "),s("p",[t._v("做完以上配置后，你需要了解大前端电子书开源项目的文档"),s("RouterLink",{attrs:{to:"/course/notes/01-编写规范.html"}},[t._v("编写规范")]),t._v("。")],1),t._v(" "),s("p",[t._v("使用Vscode或WebStorm打开项目，按照"),s("a",{attrs:{href:"https://toimc-team.github.io/notes-page/course/notes/#%E8%B4%A1%E7%8C%AE%E6%B5%81%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("贡献流程"),s("OutboundLink")],1),t._v("在项目中添加或修改内容，完成内容创作后，接下来就可以准备提交PR啦。")]),t._v(" "),s("h2",{attrs:{id:"提交pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交pr"}},[t._v("#")]),t._v(" 提交PR")]),t._v(" "),s("p",[t._v("在提交PR前，我希望同学们先了解以下三个文档：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/course/notes/"}},[t._v("贡献规范")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/course/vuepress/02-commit规范.html"}},[t._v("Commit 规范")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/course/vuepress/03-PR规范.html"}},[t._v("Pull Request规范")])],1)]),t._v(" "),s("p",[t._v("打开命令行，关联upstream原仓库，")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://github.com/toimc-team/front-end-notes.git\n")])])]),s("p",[t._v("内容创作完成后，执行下面的命令，")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全量提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or 提交某个文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit，添加commit信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# push推送到fork远程仓库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("p",[t._v("完成推送后，打开大前端电子书项目GitHub地址，选择"),s("code",[t._v("Pull requests")]),t._v("，点击"),s("code",[t._v("New pull request")]),t._v("。\n"),s("img",{attrs:{src:e(527),alt:"pull-request"}})]),t._v(" "),s("p",[t._v("按照规范填写title及备注信息，点击"),s("code",[t._v("Create pull request")]),t._v("即可完成提交。\n"),s("img",{attrs:{src:e(528),alt:"create-pull-request"}})]),t._v(" "),s("p",[t._v("最后等待审核者审核即可。")])])}),[],!1,null,null,null);s.default=a.exports}}]);