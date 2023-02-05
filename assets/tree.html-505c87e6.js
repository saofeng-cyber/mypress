import{_ as n,p as i,q as e,a1 as s}from"./framework-7db056f4.js";const d={},l=s(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><p>完整的目录结构</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>├─.eslintrc-auto-import.json
├─.eslintrc.cjs
├─.npmrc
├─.prettierrc.cjs
├─index.html
├─package.json
├─pnpm-lock.yaml
├─postcss.config.js
├─README.md
├─tailwind.config.js
├─tsconfig.config.json
├─tsconfig.json
├─vite.config.ts
├─types
|   ├─auto-imports.d.ts
|   ├─component.d.ts
|   ├─env.d.ts
|   └global.d.ts
├─src
|  ├─App.vue
|  ├─main.ts
|  ├─views
|  |   ├─AboutView.vue
|  |   ├─Analysis.vue
|  |   ├─Editor.vue
|  |   ├─ElementPlus.vue
|  |   ├─Login.vue
|  |   ├─MarkDown.vue
|  |   ├─Print.vue
|  |   ├─VideoPlay.vue
|  |   ├─ViteDoc.vue
|  |   ├─VueDoc.vue
|  |   ├─VueMap.vue
|  |   └WorkBench.vue
|  ├─utils
|  |   ├─flexible.ts
|  |   ├─index.ts
|  |   ├─route.ts
|  |   ├─routeKey.ts
|  |   ├─themes
|  |   |   └dark.ts
|  ├─typings
|  |    ├─business.d.ts
|  |    ├─custom.d.ts
|  |    ├─route.d.ts
|  |    └routePage.d.ts
|  ├─styles
|  |   ├─index.scss
|  |   ├─themes
|  |   |   ├─dark.scss
|  |   |   └index.scss
|  |   ├─common
|  |   |   └index.scss
|  ├─stores
|  |   ├─Collapse.ts
|  |   ├─TagRouter.ts
|  |   └TokenStore.ts
|  ├─router
|  |   ├─index.ts
|  |   ├─modules
|  |   |    ├─about.ts
|  |   |    ├─dashboard.ts
|  |   |    ├─doc.ts
|  |   |    ├─module.ts
|  |   |    └plugins.ts
|  ├─requests
|  |    ├─request.ts
|  |    ├─types.ts
|  |    ├─api
|  |    |  ├─login.ts
|  |    |  └route.ts
|  ├─layout
|  |   ├─Menu.vue
|  |   ├─sider
|  |   |   └AsideBar.vue
|  |   ├─setting
|  |   |    └Setting.vue
|  |   ├─menu
|  |   |  └Menu.vue
|  |   ├─main
|  |   ├─header
|  |   |   └HeaderBar.vue
|  ├─i18n
|  |  ├─index.ts
|  |  ├─locales
|  |  |    ├─en.ts
|  |  |    └zhCn.ts
|  ├─enum
|  |  └business.ts
|  ├─composables
|  |      └echarts.ts
|  ├─components
|  |     ├─BetterScroll.vue
|  |     ├─HeaderRight.vue
|  |     ├─Iconify.vue
|  |     ├─MenuItem.vue
|  |     ├─MenuTabs.vue
|  |     ├─SvgIcon.vue
|  |     ├─WebIframe.vue
|  |     ├─search
|  |     |   └Search.vue
|  |     ├─notice
|  |     |   └Notice.vue
|  |     ├─echarts
|  |     |    ├─LineChart.vue
|  |     |    └PieChart.vue
|  ├─assets
|  |   ├─base.css
|  |   ├─logo.svg
|  |   ├─main.css
|  |   ├─scrollbar.css
|  |   ├─images
|  |   |   ├─001935-1615911575642b.jpg
|  |   |   ├─bg.svg
|  |   |   ├─login.svg
|  |   |   ├─loginNew.svg
|  |   |   └logo.63028018.png
|  |   ├─font
|  |   |  ├─iconfont.css
|  |   |  └iconfont.ttf
├─public
|   └favicon.ico
├─mock
|  ├─mockProdServer.ts
|  ├─source
|  |   ├─model
|  |   |   └route.ts
|  |   ├─api
|  |   |  ├─login.ts
|  |   |  └route.ts
├─config
|   ├─dev.ts
|   ├─pro.ts
|   ├─env
|   |  ├─.env.development
|   |  └.env.production
├─.vscode
|    ├─extensions.json
|    └settings.json
├─.husky
|   ├─pre-commit
|   ├─_
|   | └husky.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function r(c,a){return i(),e("div",null,v)}const m=n(d,[["render",r],["__file","tree.html.vue"]]);export{m as default};
