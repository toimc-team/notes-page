(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1e3:function(t,a,s){"use strict";s.r(a);var r=s(11),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"导学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导学"}},[t._v("#")]),t._v(" 导学")]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[t._v("TypeScript必须要学吗？——是的，目前已经成为了前端人的必备捅；")]),t._v(" "),a("li",[t._v("TypeScript 是不是就不需要学 JavaScript 了？——不是，TS与JS应该是同生的，目前TS满足所有ECMAScript标准，支持ES6+语法，同时进行了拓展。TS中是直接支持ES6+语法，不用babel就可以编译成标准JS代码；")]),t._v(" "),a("li",[t._v("Vue 用 TypeScript 改写发布 3.0 后是不是不用 TypeScript 不行？——不是，同样支持JS，也同样支持大部分90%（具尤雨溪自己说的）Options API用法。")]),t._v(" "),a("li",[t._v("学习TypeScript有什么优点？开发效率高、代码质量高、包容性高。")])]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("JavaScript 是在运行的时候，才能发现一些错误的，比如：")]),t._v(" "),a("ul",[a("li",[t._v("访问了一个对象没有的属性；")]),t._v(" "),a("li",[t._v("调用一个函数却少传了参数；")]),t._v(" "),a("li",[t._v("函数的返回值是个字符串你却把它当数值用了；")]),t._v(" "),a("li",[t._v("…")])]),t._v(" "),a("p",[t._v("有了TypeScript就可以在编写代码的过程中，看到并提示上述错误，很酷！")]),t._v(" "),a("blockquote",[a("p",[t._v("VSCode是使用TypeScript开发的，可以看看仓库：https://github.com/microsoft/vscode")])]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("h3",{attrs:{id:"什么是-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-typescript"}},[t._v("#")]),t._v(" 什么是 TypeScript")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),a("OutboundLink")],1),t._v("：是 JavaScript 的超集，拥有类型机制，不能在浏览器直接执行，而是编译成 JavaScript 后才会运行。")]),t._v(" "),a("ul",[a("li",[t._v("超集（superset）：比如 ES6 包含了 ES5 所有的内容，还有一些独特的语法特性，就可以理解为 ES6 是 ES5 的超集")]),t._v(" "),a("li",[t._v("类型：指的是静态的类型，js 中一个存放字符串的变量，后续依旧可以将数字、对象、数组等类型赋值到该变量，这是动态类型。而 ts 则是静态类型，后续不可更改类型")])]),t._v(" "),a("h3",{attrs:{id:"typescript-的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-的优势"}},[t._v("#")]),t._v(" TypeScript 的优势")]),t._v(" "),a("p",[t._v("通过一个例子（勾股定理），来体会 js 与 ts 的差异：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// javascript")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// typescript---可以给它限制实参的类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tsDemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tsDemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不传参数或参数类型不符，就会报错")]),t._v("\n")])])]),a("p",[t._v("下面列举 TypeScript 相比于 JavaScript 的显著优势：")]),t._v(" "),a("ol",[a("li",[t._v("静态输入")])]),t._v(" "),a("p",[t._v("静态类型化是一种功能，可以在开发人员编写脚本时检测错误。查找并修复错误是当今开发团队的迫切需求。有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护，以便使得代码质量更好、更清晰。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("大型的开发项目")])]),t._v(" "),a("p",[t._v("有时为了改进开发项目，需要对代码库进行小的增量更改。这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这些变化。使用 TypeScript 工具来进行重构更变的容易、快捷。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("更好的协作")])]),t._v(" "),a("p",[t._v("当发开大型项目时，会有许多开发人员，此时乱码和错误也会增加。类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误。这为开发团队创建了一个更高效的编码和调试过程。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("更强的生产力")])]),t._v(" "),a("p",[t._v("干净的 ECMAScript 6 代码，自动完成和动态输入等因素有助于提高开发人员的工作效率。这些功能也有助于编译器创建优化的代码。")]),t._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("哪些项目适合用 TypeScript 开发，以下几类：")]),t._v(" "),a("ul",[a("li",[t._v("需要多人合作开发的项目（人数>10）")]),t._v(" "),a("li",[t._v("开源项目，尤其是工具函数或"),a("strong",[t._v("组件库")])]),t._v(" "),a("li",[t._v("对代码质量有很高要求的项目（与钱打交道）")])]),t._v(" "),a("p",[t._v("来看几个广为人知的使用 TypeScript 开发的经典项目：")]),t._v(" "),a("ul",[a("li",[t._v("VSCode：开源的高质量代码编辑器VSCode使用TypeScript开发，所以它天生就支持 TypeScript；")]),t._v(" "),a("li",[t._v("Angular & React & Vue3.0：现在三足鼎立的三个前端框架，Angular 和 React 已经使用 TypeScript编写。也可以看出，TypeScript 已经被广为接受。当然了，你依然可以使用JavaScript来开发前端项目，但是相信随着 Vue3.0 发布，TypeScript将会被越来越多的开发者所接受；")]),t._v(" "),a("li",[t._v("Ant Design：使用 React 开发项目的开发者大多应该都知道蚂蚁金服开源UI组件库"),a("a",{attrs:{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Design"),a("OutboundLink")],1),t._v("，同样使用TypeScript进行编写。保证了代码质量的同时，也能很好地支持开发者使用TypeScript进行React项目的开发。如果你使用 Vue 进行开发，Ant Design 也提供了Vue 版的组件库，风格和功能和 React 版的保持一致，共享单元测试和设计资源，对TypeScript的支持也一样很好。")])]),t._v(" "),a("p",[t._v("TypeScript 在实现新特性的同时，时刻保持对ES标准的对齐。一些ECMAScript标准没有确定的内容，在 TypeScript 中已经率先支持了。所以在语法标准方面，可以说TypeScript是略微领先的，比如类的私有属性和方法。ES6标准对类的相关概念的定义中，并没有私有属性的概念，如果想实现私有属性，需要使用一些方法hack（可以参考阮一峰的"),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/class#%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E5%92%8C%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("《ECMAScript 6 入门》- 私有方法和私有属性"),a("OutboundLink")],1),t._v("）；但是TypeScript是支持私有属性的，可以直接使用 "),a("code",[t._v("private")]),t._v(" 指定一个私有属性。虽然ECMAScript新的提案提供了定义私有属性的方式，就是使用 "),a("code",[t._v("#")]),t._v(" 来指定一个属性是私有的，但是到目前为止现在还没有编译器支持这种语法。")]),t._v(" "),a("h2",{attrs:{id:"笔记内容介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔记内容介绍"}},[t._v("#")]),t._v(" 笔记内容介绍")]),t._v(" "),a("ul",[a("li",[t._v("基础部分\n"),a("ul",[a("li",[t._v("学习方法介绍")]),t._v(" "),a("li",[t._v("搭建Ts学习环境（包括线上练习环境Playground）")]),t._v(" "),a("li",[t._v("基础类型 -> 新引入类型")]),t._v(" "),a("li",[t._v("函数类型")])])]),t._v(" "),a("li",[t._v("进阶部分\n"),a("ul",[a("li",[t._v("类型断言 -> 了解 ts 工作原理")]),t._v(" "),a("li",[t._v("Interface")]),t._v(" "),a("li",[t._v("类 ->")]),t._v(" "),a("li",[t._v("泛型 -> 泛型变量 -> 泛型约束 -> 扩展应用(泛型接口、泛型函数、泛型类)")]),t._v(" "),a("li",[t._v("装饰器")]),t._v(" "),a("li",[t._v("模块&命名空间")]),t._v(" "),a("li",[t._v("声明相关")])])]),t._v(" "),a("li",[t._v("tsconfig配置文件")])])])}),[],!1,null,null,null);a.default=e.exports}}]);