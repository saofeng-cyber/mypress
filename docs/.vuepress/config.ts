import { defaultTheme, defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

import { navbaren, navbarzh } from "./configs/navbar/index";
import { sidebaren, sidebarzh } from "./configs/sidebar/index";
export default defineUserConfig({
  title: "Sf Admin",
  head: [["link", { rel: "icon", href: "/images/hero.png" }]],
  base: "/my-admin/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Sf Admin",
      description:
        "An open source, free and out-of-the-box middle and background management system template",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Sf Admin",
      description: "一款开源免费且开箱即用的中后台管理系统模版",
    },
  },
  theme: defaultTheme({
    logo: "/images/hero.png",
    repo: "saofeng-cyber/mypress",
    docsDir: "docs",
    locales: {
      "/": {
        navbar: navbaren,
        sidebar: sidebaren,
        selectLanguageName: "English",
        editLinkText: "Edit this page on GitHub",
      },
      "/zh/": {
        navbar: navbarzh,
        sidebar: sidebarzh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
      },
    }
  }),
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'sfadmin',
      searchParameters: {
        facetFilters: ['tags:v2'],
      }
    })
  ],
  markdown:{}
});
