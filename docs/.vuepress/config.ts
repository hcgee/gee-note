/*
 * @Author: huhanchi 
 * @Date: 2022-04-24 13:22:52 
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-04-24 13:27:02
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/gee-note/",
  // 站点配置
  lang: "zh-CN",
  title: "前端学习笔记",
  description: "前端学习笔记",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/65010677?v=4",
    sidebar: [
      {
        text: "React",
        // link: '/react/react'
        children: [
          "/react/setState.md",
          "/react/virtual.md",
          "/react/portals.md",
          "/react/fragments.md",
          "/react/hooks.md",
        ],
      },
      {
        text: "ES6",
        link: "/es6/es6",
      },
      {
        text: "webpack",
        link: "/webpack/webpack",
      },
      {
        text: "面试",
        collapsible: true,
        children: [
          {
            text: "原型与原型链",
            link: "/ms/01",
          },
          {
            text: "防抖与节流",
            link: "/ms/02",
          },
          {
            text: "call,apply和bind",
            link: "/ms/03",
          },
        ],
      },
    ],
    navbar: [
      {
        text: "React",
        link: "/react/react",
      },
      {
        text: "ES6",
        link: "/es6/es6",
      },
      {
        text: "webpack",
        link: "/webpack/webpack",
      },
      {
        text: "面试",
        children: [
          {
            text: "原型与原型链",
            link: "/ms/01",
          },
          {
            text: "防抖与节流",
            link: "/ms/02",
          },
          {
            text: "call,apply和bind",
            link: "/ms/03",
          },
        ],
      },
    ],
  },
});
