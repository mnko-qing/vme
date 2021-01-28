module.exports = {
  base: "/",
  title: "Vme",
  theme: "vdoing",
  description: "Poetry and distance are in the dream",
  themeConfig: {
    // logo: "/hero.png",
    category: false,
    repo: "mnko-qing/vue-press",
    smoothScroll: true,
    sidebarDepth: 2,
    sidebar: "structuring",
    nav: [
      { text: "工作", link: "/guide/work/", target: "_self" },
      {
        text: "学习",
        items: [
          { text: "vue", link: "/guide/study/vue/" },
          { text: "git", link: "/guide/study/git/" },
          { text: "axios", link: "/guide/study/axios/" },
        ],
      },
      { text: "生活", link: "/guide/live/", target: "_self" },
    ],
    footer: {
      createYear: 2021,
      copyrightInfo: 'mnko-qing | <a href="https://github.com/mnko-qing/vme/blob/master/LICENSE" target="_blank">MIT License</a>',
    },
  },
};
