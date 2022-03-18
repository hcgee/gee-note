import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/gee-note/',
  // 站点配置
  lang: 'zh-CN',
  title: '老汉随便记记',
  description: '老汉前端学习笔记',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/65010677?v=4',
    sidebar:[
      {
        text: 'React',
        link: '/react/react'
      },
      {
        text: 'Vue',
        link: '/vue/vue'
      },
      {
        text: '其他',
        collapsible: true,
        children: ['/other/redux.md', '/other/react-redux.md'],
      },
    ],
    navbar: [
      {
        text: 'React',
        link: '/react/react'
      },
      {
        text: 'Vue',
        link: '/vue/vue'
      },
      {
        text: '其他',
        children: ['/other/redux.md', '/other/react-redux.md'],
      },
    ]
  },
})