# v2.ext.ggt1024.com

本项目为伽马影迷插件文档源码，支持 [markdown 语法规范](https://spec.commonmark.org/)，用 `VuePress` 生成静态网站内容。

## 使用

推荐使用包管理器器`yarn`，推荐 node.js 版本`v14.0.0`以上

安装相关依赖

```bash
yarn install
```

本地开发

```bash
yarn docs:dev
```

打包

```bash
yarn docs:build
```

## 常见问题解答

### 报错 ERR_REQUIRE_ESM

执行 `yarn docs:dev` 报错 `ERR_REQUIRE_ESM`，终端输出类似以下：

```
Error [ERR_REQUIRE_ESM]: require() of ES Module ...\node_modules\@vuepress\plugin-google-analytics\lib\node\index.js from ...\docs\.vuepress\config.ts not supported.
Instead change the require of index.js in ...\docs\.vuepress\config.ts to a dynamic import() which is available in all CommonJS modules.
```

删除 node_modules 目录，重新安装构建即可。
