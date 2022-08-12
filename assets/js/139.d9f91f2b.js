(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{984:function(t,v,_){"use strict";_.r(v);var e=_(10),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"代码commit规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码commit规范"}},[t._v("#")]),t._v(" 代码Commit规范")]),t._v(" "),v("h2",{attrs:{id:"格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),v("p",[t._v("Commit 规范采用常用的 "),v("a",{attrs:{href:"https://github.com/angular/angular",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular"),v("OutboundLink")],1),t._v(" 团队所使用的规范，具体如下：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("<type><scope>: <subject>\n<空行>\n<body>\n<空行>\n<footer>\n")])])]),v("h3",{attrs:{id:"type-规则-必填"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#type-规则-必填"}},[t._v("#")]),t._v(" type 规则（必填）")]),t._v(" "),v("p",[t._v("type 代表本次 commit 的类型，有且仅有如下几种：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("feat")]),t._v(" - 功能性更新")]),t._v(" "),v("li",[v("strong",[t._v("fix")]),t._v(" - bug 修复")]),t._v(" "),v("li",[v("strong",[t._v("style")]),t._v(" - 改变代码格式（如删除空行、格式化代码、去除不必要的分号等等）")]),t._v(" "),v("li",[v("strong",[t._v("refactor")]),t._v(" - 既不是功能更新也不是 bug 修复的更改（建议对代码进行重构的时候使用）")]),t._v(" "),v("li",[v("strong",[t._v("perf")]),t._v(" - 代码改变提高了性能")]),t._v(" "),v("li",[v("strong",[t._v("test")]),t._v(" - 添加测试用例或者修改测试用例")]),t._v(" "),v("li",[v("strong",[t._v("build")]),t._v(" - 由打包工具造成的改变（如gulp、webpack编译文件）")]),t._v(" "),v("li",[v("strong",[t._v("chore")]),t._v(" - 既不是源码的修改，也不是测试用例的修改（修改项目相关配置时可以使用）")]),t._v(" "),v("li",[v("strong",[t._v("revert")]),t._v(" - 撤销之前的提交")])]),t._v(" "),v("h3",{attrs:{id:"scope-规则-必填"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#scope-规则-必填"}},[t._v("#")]),t._v(" scope 规则（必填）")]),t._v(" "),v("p",[t._v("scope 代表本次 commit 的影响范围，暂定规则如下：")]),t._v(" "),v("ul",[v("li",[t._v("本次 commit 修改的"),v("strong",[t._v("组件")])]),t._v(" "),v("li",[t._v("本次 commit 修改的"),v("strong",[t._v("文件")])]),t._v(" "),v("li",[t._v("本次 commit 修改的"),v("strong",[t._v("文件夹")])])]),t._v(" "),v("blockquote",[v("p",[t._v("注意：")]),t._v(" "),v("ul",[v("li",[t._v("选取时从上往下匹配")]),t._v(" "),v("li",[t._v("组件名称应使用大写字母开头，多个单词每个单词都以大写开头")]),t._v(" "),v("li",[t._v("文件名应包含完整后缀，如"),v("code",[t._v("index.js")]),t._v("、"),v("code",[t._v(".eslintrc.json")])])])]),t._v(" "),v("h3",{attrs:{id:"subject-规则-必填"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#subject-规则-必填"}},[t._v("#")]),t._v(" subject 规则（必填）")]),t._v(" "),v("p",[t._v("用一句简短的话描述本次修改的内容，"),v("strong",[t._v("不要超过30个汉字")]),t._v("，"),v("strong",[t._v("以动词开头")])]),t._v(" "),v("p",[t._v("建议选用如下动词：")]),t._v(" "),v("ul",[v("li",[t._v("新增（组件、属性、事件、API）")]),t._v(" "),v("li",[t._v("删除")]),t._v(" "),v("li",[t._v("修正")]),t._v(" "),v("li",[t._v("修复")]),t._v(" "),v("li",[t._v("修改")])]),t._v(" "),v("p",[t._v("正确示例：")]),t._v(" "),v("ul",[v("li",[t._v("新增 Collapse 组件")]),t._v(" "),v("li",[t._v("新增 top 属性")]),t._v(" "),v("li",[t._v("删除 color 属性")]),t._v(" "),v("li",[t._v("修复 direction 属性不生效的问题")]),t._v(" "),v("li",[t._v("修正 column 属性拼写")])]),t._v(" "),v("blockquote",[v("p",[t._v("注意：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("subject 应该仔细斟酌，fix 和 feat 类型的 commit 的 subject 将会出现在更新日志中，")]),t._v(" "),v("p",[t._v("所以书写时应考虑这句话出现在更新日志中是否合适")])]),t._v(" "),v("li",[v("p",[t._v("subject 中不要包含组件名或者文件名，因为 scope 中已有对应名称")])])])]),t._v(" "),v("h3",{attrs:{id:"body-规则-选填"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#body-规则-选填"}},[t._v("#")]),t._v(" body 规则（选填）")]),t._v(" "),v("p",[t._v("如果 subject 无法对本次 commit 进行清楚的阐释，则在 body 中进行补充说明。")]),t._v(" "),v("p",[t._v("建议填写以下内容：")]),t._v(" "),v("ul",[v("li",[t._v("为什么进行本次修改")]),t._v(" "),v("li",[t._v("本次修改了哪些内容")]),t._v(" "),v("li",[t._v("修改后的影响有哪些")])]),t._v(" "),v("blockquote",[v("p",[t._v("body 需要注意换行问题，不要写在一行不换行，建议在50个字以内进行断句换行。")])]),t._v(" "),v("h3",{attrs:{id:"footer-规则-选填"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#footer-规则-选填"}},[t._v("#")]),t._v(" footer 规则（选填）")]),t._v(" "),v("p",[t._v("footer 中只填写两种内容：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("这次 commit 和某个 issue 相关联，提交后能关闭该 issue，则填写：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("close #748\n")])])]),v("p",[t._v("或者")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("fix #745\n")])])])]),t._v(" "),v("li",[v("p",[t._v("这次 commit 有不兼容上个版本的代码，则以"),v("code",[t._v("BREAKING CHANGE:")]),t._v("开头填写不兼容信息，如下：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("BREAKING CHANGE: Message组件top属性单位由px改为rpx\n")])])])])]),t._v(" "),v("h2",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),v("p",[t._v("一个"),v("strong",[t._v("完整规范且正确")]),t._v("的 Commit 示例如下：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("fix(NoticeBar)：修改top属性单位为rpx\n\nNoticeBar组件的top属性单位之前为px，会出现无法自适应的问题。\n更改为rpx后可对屏幕进行自适应。\n\nBREAKING CHANGE: Notice-Bar组件top属性单位由px改为rpx\n\nClose #745\n")])])]),v("blockquote",[v("p",[t._v("推荐 commit 规范信息生成插件")]),t._v(" "),v("ul",[v("li",[t._v("WebStorm - "),v("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/9861-git-commit-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Commit Template"),v("OutboundLink")],1)]),t._v(" "),v("li",[t._v("Vs Code - "),v("a",{attrs:{href:"https://github.com/Mongkii/Commit-Tagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit Tagger"),v("OutboundLink")],1)])])]),t._v(" "),v("h3",{attrs:{id:"错误示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#错误示例"}},[t._v("#")]),t._v(" 错误示例")]),t._v(" "),v("ol",[v("li",[v("p",[v("code",[t._v("subject")]),t._v("描述中出现组件名称")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("feat(Button): Button 组件新增 size 属性\n")])])]),v("p",[v("strong",[t._v("因type（括号中的内容）已经指定了组件，所以 subject 描述信息中无需再指明组件")])])]),t._v(" "),v("li",[v("p",[t._v("单词未添加空格")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("feat(Button): 新增size属性\n")])])]),v("p",[v("strong",[t._v("为了生成的 changelog 的可读性，所有的单词左右都需要添加一个空格")])])]),t._v(" "),v("li",[v("p",[t._v("feat、fix 类型需要慎重使用")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("feat(Card): 更新 validator 校验器校验规则\n")])])]),v("p",[v("strong",[t._v("因为 feat 和 fix 类型的 commit 信息会出现在 changelog 中，所以要保证这条信息是面向用户的。如上例所示，因为 validator 仅是我们自己内部使用，并不面向用户，所以用户并不关心这个校验器的新增功能。建议使用 chore 代替此处的 feat（chore 的意思是琐碎的事务）")])])])]),t._v(" "),v("h2",{attrs:{id:"其他事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他事项"}},[t._v("#")]),t._v(" 其他事项")]),t._v(" "),v("p",[t._v("一个 commit 应该是一个有意义的 commit")]),t._v(" "),v("p",[v("strong",[t._v("有意义")]),t._v("的定义如下：")]),t._v(" "),v("ul",[v("li",[t._v("新增了一个功能或组件")]),t._v(" "),v("li",[t._v("修复了一个bug")]),t._v(" "),v("li",[t._v("解决了一个issue")]),t._v(" "),v("li",[t._v("重构了某个组件或文件")]),t._v(" "),v("li",[t._v("改善了现有代码的构建流程或风格")])]),t._v(" "),v("p",[v("strong",[t._v("无意义")]),t._v("的定义如下：")]),t._v(" "),v("ul",[v("li",[t._v("临时工作进度保存")]),t._v(" "),v("li",[t._v("误提交的 commit")]),t._v(" "),v("li",[t._v("commit 信息不规范或缺失")]),t._v(" "),v("li",[t._v("subject 无法准确描述此次 commit")])]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("注意")]),t._v("：一个 commit 的提交应该保证代码的可运行性和完整性。")]),t._v(" "),v("ul",[v("li",[t._v("可运行性：commit 提交后，运行代码不能报错")]),t._v(" "),v("li",[t._v("完整性：commit 提交后，当前代码中不能包含缺失的功能（如某个功能做了一半就提交）")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);