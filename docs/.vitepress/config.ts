import { defineConfig } from "vitepress";

const base = "/extension/";

export default defineConfig({
  base: base,

  lang: "zh-CN",
  title: "伽马影迷插件",
  description: "影迷、影视自媒体必备神器",

  cleanUrls: "without-subfolders",

  head: [
    ["meta", { name: "theme-color", content: "#ff9900" }],

    ["script", { type: "text/javascript", src: base + "/libs/use51la.js" }],

    // google analysis
    //   ref: https://github.com/vuejs/vitepress/issues/1131
    ["script", { type: "text/javascript", src: "//www.googletagmanager.com/gtag/js?id=G-PQ22PRMQR8", async: "true" }],
    ["script", { type: "text/javascript", src: base + "/libs/usega.js" }],

    // google adsense
    [
      "script",
      {
        type: "text/javascript",
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173571332281531",
        async: "true",
        crossorigin: "anonymous",
      },
    ],
  ],

  themeConfig: {
    logo: "/assets/logo.png",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "粤ICP备2020113644号 | 粤公网安备 44010502002211号",
      copyright: "Copyright © 2021~present Guangzhou GamMaan Tech LLC",
    },

    nav: nav(),

    sidebar: {
      "/install/": sitebarInstall(),
      "/usage/": sitebarUsage(),
      "/faqs/": sitebarFaqs(),
    },
  },
});

function nav() {
  return [
    {
      text: "安装指南",
      link: "/install/",
      activeMatch: "/install/",
    },

    {
      text: "使用指南",
      link: "/usage/",
      activeMatch: "/usage/",
    },

    {
      text: "常见问题",
      link: "/faqs/signInFail",
      activeMatch: "/faqs/",
    },

    {
      text: "变更日志",
      link: "/changelogs",
      activeMatch: "/changelogs/",
    },

    {
      text: "反馈建议",
      link: "https://support.qq.com/products/316535",
    },

    {
      text: "应用商店",
      items: [
        {
          text: "edge",
          link: "https://microsoftedge.microsoft.com/addons/detail/cmnchflmcededjokdbjafjcpbhpodmmo",
        },
        {
          text: "safari",
          link: "https://apps.apple.com/cn/app/apple-store/id1611761892",
        },
        {
          text: "chrome",
          link: "https://chrome.google.com/webstore/detail/jwksext-the-missing-tool/ehmoihnjgkdimihkhokkmfjdgomohjgm",
        },
        {
          text: "firefox",
          link: "https://addons.mozilla.org/zh-CN/firefox/addon/jwksext-best-for-movie-fans/",
        },
        {
          text: "360 安全",
          link: "https://ext.se.360.cn/webstore/detail/jjkcmcgdfheillgobdlnfeeppcldgagp",
        },
      ],
    },

    {
      text: "伽马官网",
      link: "https://ggt1024.com/",
    },
  ];
}

function sitebarInstall() {
  return [
    {
      text: "安装指南",
      items: [
        { text: "微软 Edge 上安装插件", link: "/install/installOnEdge" },
        { text: "苹果 Safari 上安装插件", link: "/install/installOnSafari" },
        { text: "谷歌 Chrome 上安装插件", link: "/install/installOnChrome" },
        { text: "Mozilla Firefox 上安装插件", link: "/install/installOnFirefox" },
        { text: "安全 360 上安装插件", link: "/install/installOn360" },
      ],
    },
  ];
}

function sitebarUsage() {
  return [
    {
      text: "使用指南",
      items: [
        { text: "豆瓣网站上使用插件", link: "/usage/usageDouban" },
        { text: "IMDb 上使用插件", link: "/usage/usageIMDb" },
        { text: "Netflix 上使用插件", link: "/usage/usageNetflix" },
      ],
    },

    {
      text: "会员特权功能",
      items: [
        { text: "自定义片源搜索网站", link: "/usage/customSearchWs" },
        { text: "自定义昵称和头像", link: "/usage/customProfile" },
      ],
    },
  ];
}

function sitebarFaqs() {
  return [
    {
      text: "账号和支付",
      collapsible: true,
      items: [{ text: "微信扫码无法注册或登录", link: "/faqs/signInFail" }],
    },
    {
      text: "电影数据",
      collapsible: true,
      items: [
        { text: "我想看的电影没有片源", link: "/faqs/noWatchSource" },
        { text: "我想看的电影豆瓣没有收录", link: "/faqs/doubanNotFound" },
      ],
    },

    {
      text: "其他",
      collapsible: true,
      items: [{ text: "平台和网站对插件兼容性", link: "/faqs/compatibility" }],
    },
  ];
}
