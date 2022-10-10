type NavItem = NavItemWithLink | NavItemWithChildren;

type NavItemWithLink = {
  text: string;
  link: string;
  activeMatch?: string;
};

interface NavItemWithChildren {
  text?: string;
  items: NavItemWithLink[];
  activeMatch?: string;
}
const navbar = [
  // { text: "Guide", link: "/note/Intro/Introduce" },
  {
    text: "求职指南",
    items: [
      { text: "注意事项", link: "/interview/Note" },
      { text: "简历编写", link: "/interview/Resume" },
      { text: "前端八股文", link: "/interview/Java" },
      { text: "<<剑指offer>>", link: "/interview/Leetcode" },
      { text: "互联网公司大全", link: "/interview/Compony" },
    ],
  },
  {
    text: "编程资源",
    items: [
      { text: "资源导航", link: "/resource/Navagation" },
      { text: "书籍推荐", link: "/resource/Books" },
      { text: "工具分享", link: "/resource/Tools" },
      { text: "开源项目", link: "/resource/Projects" },
    ],
  },
  { text: "关于", link: "/About" },
  { text: "友情链接", link: "/FriendLink" },
];

// export = navbar
export default navbar;
