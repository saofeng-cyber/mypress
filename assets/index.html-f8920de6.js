import{_ as i,M as l,p as s,q as o,R as e,t as r,N as n,a1 as a}from"./framework-7db056f4.js";const h={},c=a('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><strong>Sf-Admin</strong> 是一个基于Vue3、Vite4、TypeScript、Element-Plus 的中后台解决方案，它可以帮助您快速搭建企业级中后台，提供现成的开箱解决方案及丰富的示例。原则上不收取任何费用及版权，可以放心使用，不过如需二次开源（比如用此平台二次开发并开源）请联系作者获取许可！</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><ul><li><strong>最新技术栈</strong>：使用 Vue3/vite2 等前端前沿技术开发, 使用高效率的 npm 包管理器 pnpm</li><li><strong>TypeScript</strong>: 应用程序级 JavaScript 的语言</li><li><strong>主题</strong>：丰富可配置的主题、暗黑模式，基于原子 css 框架 - UnoCss 的动态主题颜色</li><li><strong>代码规范</strong>：丰富的规范插件及极高的代码规范</li><li><strong>权限路由</strong>：基于文件的路由系统、基于 mock 的动态路由能快速实现后端动态路由</li><li><strong>请求函数</strong>：基于 axios 的完善的请求函数封装，提供 Promise 和 hooks 两种请求函数，加入请求结果数据转换的适配器</li></ul><h2 id="特性细节" tabindex="-1"><a class="header-anchor" href="#特性细节" aria-hidden="true">#</a> 特性细节</h2><ul><li><p><strong>技术栈</strong>： Vue3 + Vite3 + TypeScript + NaiveUI + Pinia + UnoCss + Axios + ECharts + AntV G2 + @vueuse + iconify</p></li><li><p><strong>严格的代码规范</strong>：</p><ul><li>eslint + prettier + eslint-config-airbnb-base + eslint-plugin-vue + eslint-plugin-import + @typescript-eslint/eslint-plugin 等插件提供代码全面的格式规范，eslintrc 的 import/order 规则规范了导入依赖的顺序</li><li>husky + lint-staged + vuetsc + commitlint + commitizen 保证了提交的代码符合 eslint 规则和 TS 类型检测，提交的内容规范遵循了 angular 提交规范</li><li>应用设计模式优化代码：项目里面多次用到策略模式替换 if else</li><li>所有页面使用 script-setup 写法，并遵循特定顺序(用文档规范)</li><li>目录结构组织遵循特定规范，页面的写法严格遵循模块思想，使得每个页面的代码结构清晰明了</li></ul></li><li><p><strong>权限路由</strong>：</p><ul><li>根据文件自动生成路由的类型和路由模块数据</li><li>动态的路由数据由 mock 生成，前端添加动态路由</li><li>指定了 mock 路由的类型，方便快速对接后端</li><li>菜单由动态路由数据生成，支持隐藏指定菜单，支持多级菜单，支持外链打开</li><li>在多页签中的缓存的页面会记录滚动位置 -面包屑数据由当前路由和菜单数据生成</li></ul></li><li><p><strong>主题</strong>：</p><ul><li>支持各种主题颜色、暗黑模式和各种布局</li><li>UnoCss 引入各种主题颜色，直接通过 class 即可应用对应的颜色</li><li>初始化加载适应主题颜色</li><li>支持项目 logo 自适应主题颜色</li></ul></li></ul><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>',8),u={href:"https://saofeng-cyber.github.io/mypress/zh",target:"_blank",rel:"noopener noreferrer"},p={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=e("h2",{id:"需要掌握的基础知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#需要掌握的基础知识","aria-hidden":"true"},"#"),r(" 需要掌握的基础知识")],-1),_=e("p",null,[r("本项目基于 Vue3+Vite3+TS 开发，并全部采用了 Vue3 的"),e("strong",null,"script-setup"),r("写法，建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:")],-1),g={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jkchao.github.io/typescript-book-chinese/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://router.vuejs.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://element-plus.gitee.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pinia.vuejs.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://vueuse.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.tailwindcss.cn/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"如何加入我们",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何加入我们","aria-hidden":"true"},"#"),r(" 如何加入我们")],-1),T=e("ul",null,[e("li",null,"Sf Admin 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。项目采用 MIT 开源协议，本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。"),e("li",null,"如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们会根据你的活跃度邀请你加入。")],-1);function E(N,j){const t=l("ExternalLinkIcon");return s(),o("div",null,[c,e("p",null,[r("文档地址为 "),e("a",u,[r("sf-admin-docs"),n(t)]),r("，采用 "),e("a",p,[r("vuepress"),n(t)]),r(" 开发。如发现文档有误，欢迎提 pr 帮助我们改进。")]),d,_,e("ul",null,[e("li",null,[e("a",g,[r("Vue3文档"),n(t)])]),e("li",null,[e("a",f,[r("ViteJs"),n(t)])]),e("li",null,[e("a",m,[r("TypeScript"),n(t)])]),e("li",null,[e("a",b,[r("VueRouter"),n(t)])]),e("li",null,[e("a",k,[r("ElementPlus"),n(t)])]),e("li",null,[e("a",v,[r("Pinia"),n(t)])]),e("li",null,[e("a",x,[r("VueUse"),n(t)])]),e("li",null,[e("a",V,[r("Tailwindcss"),n(t)])]),e("li",null,[e("a",y,[r("Es6"),n(t)])])]),S,T])}const C=i(h,[["render",E],["__file","index.html.vue"]]);export{C as default};