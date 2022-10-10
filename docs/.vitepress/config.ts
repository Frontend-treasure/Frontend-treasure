import NavBar from "./config/navbar";
import SideBar from "./config/sidebar";

export default {
  head: [["link", { rel: "icon", href: "../../vite.svg" }]],
  base: "/",
  lang: "en-US",
  title: "前端宝藏之站",
  description: "前端宝藏之站",

  // Theme related configurations.
  themeConfig: {
    logo: "../../vite.svg",
    nav: NavBar,
    sidebar: SideBar,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present White-Horse",
    },
  },
  theme: "./theme/index.ts",
};
