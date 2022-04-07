# webpack

webpack

## webpack 五大核心点

webpack 五大核心点

### entry

入口

### output

出口

### loader

webpack 只能理解 js 和 json 文件，这是 webpack 自带的能力，loader 可以让 webpack 去理解其他类型的文件并解析为浏览器可以识别的

#### url-loader 和 file-loader

url-loader 可以将图片处理成 base64 编码，会减少 http 的请求，如果指定了 limit，url-loader 会根据 limit 大小去调用 file-loader
file-loader 可以指定要复制和放置文件的位置

webpack5 内置了 asset 资源模块处理，不需要 url-loader 和 file-loader

### plugin

插件用来扩展 webpack 的能力

```js
// 可以用来动态设置浏览器标题，不能和html-loader同时使用
<title>
  <%= htmlWebpackPlugin.options.title %>
</title>
```


### mode

通过选择 development, production 或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。其默认值为 production。
