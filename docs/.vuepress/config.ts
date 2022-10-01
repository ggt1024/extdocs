import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  lang: "zh-CN",
  title: "伽马影迷插件",
  description: "影迷、影视自媒体必备神器",
  theme: defaultTheme({
    colorModeSwitch: false,
    logo: "/assets/logo.png",
    sidebar: {
      "/install/": [
        "/install/installOnEdge/",
        "/install/installOnSafari/",
        "/install/installOnChrome/",
        "/install/installOnFirefox/",
        "/install/installOn360/",
        "/install/installOnQQBrowser/",
      ],

      "/usage/": ["/usage/usageDouban/", "/usage/usageIMDb/", "/usage/usageNetflix/", "/vipFeatures/"],
    },
    navbar: [
      {
        text: "安装指南",
        link: "/install/",
      },

      {
        text: "使用指南",
        link: "/usage/",
      },

      {
        text: "会员特权功能",
        link: "/vipFeatures/",
      },

      {
        text: "常见问题解答",
        link: "/faqs/",
      },

      {
        text: "变更日志",
        link: "/changelogs/",
      },

      {
        text: "反馈建议",
        link: "https://support.qq.com/products/316535",
      },

      {
        text: "应用商店",
        children: [
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
    ],
    lastUpdatedText: "最后更新",
    contributorsText: "文档编辑",
    tip: "提示",
    warning: "注意",
    danger: "注意",
    notFound: ["页面不存在"],
    backToHome: "回首页",
  }),
  plugins: [
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-PQ22PRMQR8",
    }),
  ],
  head: [["script", { type: "text/javascript", src: "/libs/use51la.js" }]],
});
