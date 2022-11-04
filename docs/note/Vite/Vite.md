# Vite

> [Vite 官网](https://vitejs.dev/)

## 什么是 Vite ?

Vite是由Evan You（Vue作者`尤雨溪`）开发的构建工具，它提供了更快的开发体验，包括`即时的服务器启动`、超快的`热模块替换`（HMR）和开箱即用的`TypeScript支持`, 很快便流行起来。

:::tip Vite 由 Esbuild + Rollup 组成

1. Vite 开发阶段使用的是`esbuild` ,  `预捆绑`了依赖关系。Esbuild是用 `Go` 编写的，预捆绑依赖项的速度比其他基于JavaScript的捆绑器快`10-100倍`。
2. `Vite` 在**生产阶段**采用 `Rollup` 构建
:::

## Vite 为什么这么快?
> Vite 的快主要是在开发阶段的快  1. 快速的冷启动  2. 快速的热更新



Vite 得益于`浏览器`对于 `ESM`规范的支持, 采取了和 `Webpack` 截然不同的构建策略(bundless) 

> Webpack 构建策略
传统的 Webpack 采用 `bundle`机制, 将项目中各种文件转化成可供浏览器识别的`css js img`等文件, 建立源文件之间的`依赖关系`, 将数量庞大的源文件`捆绑合并`成少量的`几个输出文件`, 在 Bundle 的过程中涉及大量文件IO, 文件转换, 随着项目体积的增大, 构建速度便会愈加缓慢

> Vite 构建策略

与 Webpack 不同, Vite 采取 bundless 机制, 不需要做打包等繁琐工作, 只需要启动`dev server` 并做一些初始化工作, 而依赖关系等工作则完全交给`浏览器` 

---
- 模块之间的依赖关系的解析完全交给`浏览器`
- 文件的转换由`dev server`的`middlewares` 实现
- 不对源文件做合并捆绑操作(bundless)

### 冷启动

:::tip Bundless (无打包), 基于 Native ESM
> `Native ESM`是 `ES Module`。(语法是用import声明导入，用export声明导出）。

:::

ES模块是一个模块系统，作为ECMAScript规范的一部分被定义，并被浏览器直接理解。

我所说的 "使用 `Native ESM` "是指`利用浏览器` 对ES模块的直接理解，**让浏览器直接加载这些模块**，并将后期的输出作为多文件模块。

通过使用这种`Native ESM`，**Vite省去了捆绑整个应用程序的繁重过程**，从而使加速过程成为可能。


> Vite进程使用 Native ESM
Vite使用本地ESM。作为这方面的初步进程，应用模块被分为以下两类。

:::tip node_module依赖
普通的JavaScript，在开发过程中不会有太大变化（例如MUI等组件库）

:::

要分割成依赖关系的代码通过一个叫做`Pre-Bundling`的过程从 `CommonJS或UMD（通用模块定义）` 转换为 `ESM` 。这个过程的目的如下

1. 将代码作为ECMAScript模块提供给浏览器。
1. 提高页面加载性能。(这个过程将一个有许多内部模块的依赖关系转换为一个单一的模块).
1. 预捆绑也使用 `esbuild` ，这意味着它比`基于JavaScript` 的捆绑(bundler)快**10到100倍**。

:::info 源代码
JSX、CSS、Vue/React和其他需要转换的组件
:::


### 热更新
:::warning Webpack热更新慢的原因

作为一个粗略的解释，在基于捆绑器的构建设置中，在应用程序被提供之前，通过一个叫做捆绑的过程，将多段JavaScript代码合并成一大段代码，然后进行调整，使其可以在浏览器中执行。

因为它生成的大代码包含了整个应用程序的内容，所以基于捆绑器的构建设置机制有一个问题，即应用程序越大，它的速度就不可避免地越慢。
:::
1. Vite只转换源代码，并根据浏览器的要求使用本地ESM提供服务。
1. 开发过程中改变文件时快速更新, 由于上述机制，Vite在开发过程中无需重新捆绑，就可以自如地进行开发。
1. HMR（通过仅替换发生变化的模块进行优化，而不是重新加载整个应用程序）在本地ESM上执行，确保一致和快速执行，无论应用程序的大小如何。

## Vite 与 Turbopack  区别?
> Vite 是下一代前端构建工具 , 而 Turbopack 是 Webpack 作者重新开发的一款工具

`Turbopack` 目前只能在 `Next.js 13` 版本中使用, 且目前的性能表现还没有达到 `Vercel` 官方宣传的  **比Vite 快十倍**, 但是非常值得期待! `Turbopack` 使用 `Rust` 重新编写 `bundler` , 并没有采取 Vite 的 `bundless策略`

[Turbopack 体验](https://nextjs.org/docs/advanced-features/turbopack)

## Vite.config.js

```js
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'

export default defineConfig({
    // 插件 Vue支持 JSX 支持
    plugins: [ vue(), vueJsx() ]
    
    // 端口和跨域: {
    port: 3000,
    proxy: {
        '/api': {
            target: 'http://localhost:3001/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, ''),
            }
        }
    }
    // 别名定义
    resolve:{
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'comps': path.resolve(__dirname, 'src/components')
        }
    }
    
    // 路由支持

    // 状态管理
})
```