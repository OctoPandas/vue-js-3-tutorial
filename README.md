# Vue 3

## 如何寻找灵感

任何一个现有的 App 或应用程序。

Explore - Topics
Expore - Trending

以项目为基础的学习：

https://github.com/tuvtran/project-based-learning

使用 Google 图片搜索 keyword + app 来确定功能。

在 Dribbble 上启发灵感并拓展功能。

## 创建 Vue 工程

```bash
npm i -g @vue/cli
vue create '[project_name]'
vue ui
```

使用相对路径即可在组件中引入图片资源：

```html
<img alt="Vue logo" src="./assets/logo.png">
```

:qestion: 如何选择 ul + li 或 div 实现「列表」？是否可以不用 div 包裹每一项？

这里采用的是最小化 DOM 原则，即不引入其他元素。如果改变 `<label>` 之类的默认显示属性，可能会降低代码的可读性。这也是一个弊端。而使用 ul + li 并附加额外的 CSS 则是必须的，因为其增强了语义化。但如果只是针对客户端应用，不考虑 SEO，那么可以避免此规则。

线性渐变：

```css
.selector {
  background: linear-gradient(#c0a5f3, #7f95f7);
}
```

默认方向是从上至下。

更改 input 元素为 `display: block;` 并不能改变输入框的长度。只是让 input 独立占据一行。所以需要输入框占据尽可能的宽度，必须使用 `width: 100%;` 指定。

输入框占据的高度取决于其中的 font-size 以及上下的 padding。（不考虑边框）

```css
/* 高度为 40px */
.add input {
  padding: 12px 52px 12px 18px;
  font-size: 16px;
}
```

按照什么样的顺序书写 CSS？

`rel="noopener"` 的作用？

ref 保存简单数据（包括数组等），而 reactive 适合包装自定义对象等数据。

## Vue Composition API 和 MobX 对比

composable 其实就是一个最小的可复用单元，方便在多个组件间实现逻辑复用。相当于 React 中的定义 Hooks 的方式，不过 Vue 中集成了响应式数据流的方案，相当于在 Hooks 中封装了响应式数据对象和相关的方法。

使用 ref 封装的响应式数据，必须使用 value 属性获得。在 template 中可以省略 value，Vue 会自行处理。抽取 composable 的过程和抽取 Hooks 的过程类似，本质上只是一个函数调用。

## Vue 3 的变化

`<template>` 标签中可以有多个根元素。

## 理解 `<template>` 的写法

`@handler` 代表目标组件会发出的事件，在组件的使用方需要给定一个表达式用于处理该事件。而 `:data` 表示目标组件需要使用的数据。方法也可以当做数据传递给目标组件调用，在一定程度上可以替换事件处理。不过事件处理必须使用上下文提供的 `emit` 的方法，依赖于一个字符串且可以传递任何数据。而往数据中放入一个函数，需要组件自行调用。一个是在 Vue 内部被调用，一个是在组件内被调用。
