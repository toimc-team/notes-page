(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{393:function(e,t,r){e.exports=r.p+"assets/img/image-20220112002442828.cde166a6.png"},928:function(e,t,r){"use strict";r.r(t);var a=r(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"整体介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体介绍"}},[e._v("#")]),e._v(" 整体介绍")]),e._v(" "),t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[e._v("#")]),e._v(" 简述")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Node.js环境")]),e._v(" "),t("p",[e._v("前端开发的基础环境，学习Node.js的安装、版本管理工具nvm及npm命令的使用。")])]),e._v(" "),t("li",[t("p",[e._v("IDE")]),e._v(" "),t("p",[e._v("介绍最常见的Webstorm与vscode的使用方式")])]),e._v(" "),t("li",[t("p",[e._v("虚拟机")]),e._v(" "),t("p",[e._v("主要是windows与macOS平台下的虚拟化介绍，用于搭建docker环境，后续的开发环境全部建立在docker之上，安装在Linux环境（虚拟机）之内。")]),e._v(" "),t("p",[e._v("如果大家想使用云服务器，可以考虑购买各大云服务商的2C4G的配置，磁盘最少要40G（配置4G的swap），最好"),t("strong",[e._v("按量付费")]),e._v("，用完即删。")])]),e._v(" "),t("li",[t("p",[e._v("Linux入门")]),e._v(" "),t("p",[e._v("常见的Linux命令，可以上手即可，比如：vim编辑器、常见的文件操作命令、更新包安装包的命令等。")])])]),e._v(" "),t("h2",{attrs:{id:"本地开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地开发环境"}},[e._v("#")]),e._v(" 本地开发环境")]),e._v(" "),t("h3",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" Node.js")]),e._v(" "),t("p",[e._v("直装方式：Node.js下载，官方地址："),t("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://nodejs.org/zh-cn/"),t("OutboundLink")],1),e._v("，建议下载LTS版本，最好下载12，14这两个版本。")]),e._v(" "),t("blockquote",[t("p",[e._v("缺点：不利于多环境的Node.js项目的运行！")])]),e._v(" "),t("p",[e._v("Nvm(Node.js版本管理)：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Linux/MacOS："),t("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/nvm-sh/nvm"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n")])])]),t("p",[e._v("或者")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n")])])]),t("p",[e._v("然后在"),t("code",[e._v("~/.bash_profile")]),e._v(", "),t("code",[e._v("~/.zshrc")]),e._v(", "),t("code",[e._v("~/.profile")]),e._v(", or "),t("code",[e._v("~/.bashrc")]),e._v("文件其中之一添加：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')])])])]),e._v(" "),t("li",[t("p",[e._v("Windows："),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/coreybutler/nvm-windows/releases"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("国内加速源下载地址："),t("a",{attrs:{href:"https://github.91chi.fun/https://github.com//coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.91chi.fun/https://github.com//coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("Yarn安装：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i -g yarn\n")])])]),t("blockquote",[t("p",[e._v("可以并行安装包，使用yarn命令快速安装前端项目的依赖。")])]),e._v(" "),t("p",[e._v("npm源切换工具nrm:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i -g nrm --registry=https://registry.npmmirror.com\nnrm use taobao\n")])])]),t("p",[e._v("国内源cnpm："),t("a",{attrs:{href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://npmmirror.com/"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install -g cnpm --registry=https://registry.npmmirror.com\n")])])]),t("h3",{attrs:{id:"ide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[e._v("#")]),e._v(" IDE")]),e._v(" "),t("ul",[t("li",[e._v("WebStorm（收费）："),t("a",{attrs:{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jetbrains.com/webstorm/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("VSCode（推荐）："),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.visualstudio.com/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Atom："),t("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://atom.io/"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"vue-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[e._v("#")]),e._v(" Vue-CLI")]),e._v(" "),t("p",[e._v("Vue官方的开发"),t("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI工具"),t("OutboundLink")],1),e._v("，安装Node之后，使用npm命令安装：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i -g @vue/cli\n")])])]),t("p",[e._v("CLI 服务是构建于 "),t("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server"),t("OutboundLink")],1),e._v(" 之上的。它包含了：")]),e._v(" "),t("ul",[t("li",[e._v("加载其它 CLI 插件的核心服务；")]),e._v(" "),t("li",[e._v("一个针对绝大部分应用优化过的内部的 webpack 配置；")]),e._v(" "),t("li",[e._v("项目内部的 "),t("code",[e._v("vue-cli-service")]),e._v(" 命令，提供 "),t("code",[e._v("serve")]),e._v("、"),t("code",[e._v("build")]),e._v(" 和 "),t("code",[e._v("inspect")]),e._v(" 命令。")])]),e._v(" "),t("p",[e._v("如果你熟悉 "),t("a",{attrs:{href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-react-app"),t("OutboundLink")],1),e._v(" 的话，"),t("code",[e._v("@vue/cli-service")]),e._v(" 实际上大致等价于 "),t("code",[e._v("react-scripts")]),e._v("，尽管功能集合不一样。")]),e._v(" "),t("h2",{attrs:{id:"测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[e._v("#")]),e._v(" 测试环境")]),e._v(" "),t("h3",{attrs:{id:"虚拟机自建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机自建环境"}},[e._v("#")]),e._v(" 虚拟机自建环境")]),e._v(" "),t("ul",[t("li",[e._v("Parallels -> 针对 macOS")]),e._v(" "),t("li",[e._v("VMWare -> 全平台")]),e._v(" "),t("li",[e._v("Hyperv -> Windows平台支持")])]),e._v(" "),t("h3",{attrs:{id:"云服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云服务器"}},[e._v("#")]),e._v(" 云服务器")]),e._v(" "),t("p",[e._v("阿里云："),t("a",{attrs:{href:"https://cn.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cn.aliyun.com/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("腾讯云："),t("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.tencent.com/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("华为云："),t("a",{attrs:{href:"https://www.huaweicloud.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.huaweicloud.com/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("AWS："),t("a",{attrs:{href:"https://aws.amazon.com/cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/cn/"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"直装docker服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直装docker服务"}},[e._v("#")]),e._v(" 直装Docker服务")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("macOS："),t("a",{attrs:{href:"https://docs.docker.com/desktop/mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/desktop/mac/install/"),t("OutboundLink")],1),e._v(" 里面有两个很大的按钮(按照自己的CPU版本来选择)：")]),e._v(" "),t("p",[t("img",{attrs:{src:r(393),alt:"image-20220112002442828"}})])]),e._v(" "),t("li",[t("p",[e._v("Linux："),t("a",{attrs:{href:"https://github.com/docker/docker-install",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/docker/docker-install"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("推荐使用get-docker的脚本：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("curl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Windows："),t("a",{attrs:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/editions/community/docker-ce-desktop-windows"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("安装docker-compose集成命令（只针对Linux）服务："),t("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/compose/install/"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\nsudo chmod +x /usr/local/bin/docker-compose\n')])])]),t("blockquote",[t("p",[e._v("Desktop下载后，自己会带docker-compose，不需要另外安装")])]),e._v(" "),t("h3",{attrs:{id:"docker加速服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker加速服务"}},[e._v("#")]),e._v(" Docker加速服务")]),e._v(" "),t("ul",[t("li",[e._v("阿里云加速器("),t("a",{attrs:{href:"https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击管理控制台"),t("OutboundLink")],1),e._v(" -> 登录账号(淘宝账号) -> 右侧镜像工具 -> 镜像加速器 -> 复制加速器地址)")]),e._v(" "),t("li",[e._v("网易云加速器 "),t("a",{attrs:{href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("https://hub-mirror.c.163.com")]),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("百度云加速器 "),t("a",{attrs:{href:"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("https://mirror.baidubce.com")]),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("科大加速器 "),t("code",[e._v("https://docker.mirrors.ustc.edu.cn/")])]),e._v(" "),t("li",[e._v("七牛云加速器："),t("code",[e._v("https://reg-mirror.qiniu.com")])])]),e._v(" "),t("p",[e._v("Linux中设置"),t("code",[e._v("/etc/docker/daemon.json")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "registry-mirrors": [\n    "https://hub-mirror.c.163.com",\n    "https://mirror.baidubce.com"\n  ]\n}\n')])])]),t("p",[e._v("Mac/Windows上设置：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "registry-mirrors": [\n    "https://hub-mirror.c.163.com",\n    "https://mirror.baidubce.com"\n  ]\n}\n')])])]),t("p",[e._v("使用"),t("code",[e._v("docker info")]),e._v("查看是否设置生效：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Registry Mirrors:\n https://hub-mirror.c.163.com/\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);