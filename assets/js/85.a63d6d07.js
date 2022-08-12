(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{514:function(s,t,a){s.exports=a.p+"assets/img/image-20210503183210347.c17f56b9.png"},959:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),t("h2",{attrs:{id:"本地环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地环境"}},[s._v("#")]),s._v(" 本地环境")]),s._v(" "),t("p",[t("code",[s._v(".ts")]),s._v(" 文件是不可以直接执行的，需要编译为 "),t("code",[s._v(".js")]),s._v(" 文件，才能够进行运行。那现在就开始配置 TypeScript 的环境吧。")]),s._v(" "),t("h2",{attrs:{id:"tsc-的安装与使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsc-的安装与使用"}},[s._v("#")]),s._v(" tsc 的安装与使用")]),s._v(" "),t("p",[s._v("tsc 是 "),t("code",[s._v("typescript compiler")]),s._v(" 的缩写，即 ts 的编译器。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm 全局安装 TypeScript")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" typescript -g\n")])])]),t("p",[s._v("现在，你可以尝试输入如下指令来检查 ts 环境的工作情况")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否存在 tsc 环境变量，配置正确时会回应tsc的版本号")]),s._v("\n$ tsc -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试创建ts文件并写入一些内容")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" demo.ts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'console.log(\"Hello ts!\")'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" demo.ts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ts文件编译为同名js文件后运行")]),s._v("\n$ tsc demo.ts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" demo.js\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前目录下所有文件编译为同名js文件")]),s._v("\n$ tsc * \n")])])]),t("p",[s._v("上方的例子分为了两步（先转换在运行），可以通过 npm（ts-node），来进行合并操作：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ts-node -g\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接进行运行")]),s._v("\n$ ts-node demo.ts\n")])])]),t("h2",{attrs:{id:"线上环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线上环境"}},[s._v("#")]),s._v(" 线上环境")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方的 playground"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:a(514),alt:"image-20210503183210347"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);