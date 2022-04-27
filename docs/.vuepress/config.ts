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
        text: "webpack",
        link: "/webpack/webpack",
      },
      {
        text: "基础",
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
          {
            text: "闭包",
            link: "/ms/04",
          },
          {
            text: "居中对齐",
            link: "/ms/05",
          },
          {
            text: "高阶函数",
            link: "/ms/06",
          },
          {
            text: "Promise",
            link: "/ms/07",
          },
          {
            text: "typeof与instanceof",
            link: "/ms/08",
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
        text: "webpack",
        link: "/webpack/webpack",
      },
      {
        text: "基础",
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
          {
            text: "闭包",
            link: "/ms/04",
          },
          {
            text: "居中对齐",
            link: "/ms/05",
          },
          {
            text: "高阶函数",
            link: "/ms/06",
          },
          {
            text: "Promise",
            link: "/ms/07",
          },
          {
            text: "typeof与instanceof",
            link: "/ms/08",
          },
        ],
      },
    ],
  },
});
