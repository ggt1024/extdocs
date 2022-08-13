import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";

export default defineUserConfig({
  lang: "zh-CN",
  title: "伽马影迷插件",
  description: "影迷、影视自媒体必备神器",
  theme: defaultTheme({
    logo: "/assets/logo.png",
    sidebar: {
      "/install/": [
        "/install/installOnEdge/",
        "/install/installOnSafari/",
        "/install/installOnChrome/",
        "/install/installOnFirefox/",
        "/install/installOn360/",
      ],

      "/usage/": ["/usage/usageDouban/", "/usage/usageIMDb/", "/usage/usageNetflix/", "/usage/vipFeatures/"],
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
        text: "常见问题",
        link: "/faqs/",
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
            text: "chrome",
            link: "https://chrome.google.com/webstore/detail/jwksext-the-missing-tool/ehmoihnjgkdimihkhokkmfjdgomohjgm",
          },
          {
            text: "safari",
            link: "https://apps.apple.com/cn/app/apple-store/id1611761892",
          },
          {
            text: "firefox",
            link: "https://addons.mozilla.org/zh-CN/firefox/addon/jwksext-best-for-movie-fans/",
          },
        ],
      },
    ],
    docsBranch: "master",
    editLinkText: "编辑此页面",
    repo: "https://github.com/ggt1024/extdocs",
  }),
  plugins: [backToTopPlugin()],
});
