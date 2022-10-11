type Sidebar = SidebarGroup[] | SidebarMulti;

interface SidebarMulti {
  [path: string]: SidebarGroup[];
}

interface SidebarGroup {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface SidebarItem {
  text: string;
  link: string;
}

const Sidebar = [
  {
    text: "介绍",
    collapsible: true,
    collapsed: true,
    items: [
      // This shows `/note/config/index.md` page.
      { text: "本站指南", link: "/note/Intro/Introduce" },
      { text: "学习建议", link: "/note/Intro/Tips" },
      { text: "参与贡献", link: "/note/Intro/Commit" },
      { text: "Markdown", link: "/note/Intro/Vitepress" },
    ],
  },
  {
    text: "JavaScript",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "JavaScript学前准备", link: "/note/JavaScript/prepare" },
      { text: "JavaScript学习小册", link: "/note/JavaScript/learn" },
      { text: "JavaScript面试题", link: "/note/JavaScript/JavaScript" },
      { text: "JavaScript手撕代码", link: "/note/JavaScript/handwrite" },
    ],
  },
  {
    text: "TypeScript",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "TypeScript学前准备", link: "/note/TypeScript/prepare" },
      { text: "TypeScript学习小册", link: "/note/TypeScript/learn" },
      { text: "TypeScript面试题", link: "/note/TypeScript/TypeScript" },
      { text: "TypeScript类型体操", link: "/note/TypeScript/handwrite" },
    ],
  },
  {
    text: "Vue",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Vue学前准备", link: "/note/Vue/prepare" },
      { text: "Vue学习小册", link: "/note/Vue/learn" },
      { text: "Vue面试题", link: "/note/Vue/Vue" },
      { text: "Vue手撕代码", link: "/note/Vue/handwrite" },
    ],
  },
  {
    text: "React",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "React学前准备", link: "/note/React/prepare" },
      { text: "React学习小册", link: "/note/React/learn" },
      { text: "React面试题", link: "/note/React/React" },
      { text: "React手撕代码", link: "/note/React/handwrite" },
    ],
  },
  {
    text: "Vite",
    collapsible: true,
    collapsed: true,
    items: [{ text: "Vite使用和配置", link: "/note/Vite/Vite" }],
  },
  {
    text: "Git",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Git-Commit规范", link: "/note/Git/Commit" },
      { text: "Git常用命令", link: "/note/Git/Git" },
    ],
  },
  {
    text: "Linux",
    collapsible: true,
    collapsed: true,
    items: [{ text: "Linux", link: "/note/Linux/常用命令大全" }],
  },
  {
    text: "Nest.js",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "Nest学前准备", link: "/note/Nestjs/prepare" },
      { text: "Nest学习小册", link: "/note/Nestjs/learn" },
      { text: "Nest面试题", link: "/note/Nestjs/Nestjs" },
      { text: "Nest手撕代码", link: "/note/Nestjs/handwrite" },
    ],
  },
  // {
  //   text: "Docker",
  //   collapsible: true,
  //   collapsed: true,
  //   items: [
  //     { text: "Docker安装和使用", link: "/note/Docker/Docker安装和使用" },
  //     { text: "容器和镜像", link: "/note/Docker/容器和镜像" },
  //     { text: "DockerFile编写", link: "/note/Docker/DockerFile编写" },
  //     { text: "DockerCompose", link: "/note/Docker/DockerCompose" },
  //     { text: "Docker集群", link: "/note/Docker/Docker集群" },
  //   ],
  // },

  {
    text: "计算机网络",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "HTTP", link: "/note/Networks/HTTP" },
      { text: "TCP/UDP", link: "/note/Networks/TCP-UDP" },
      { text: "网络安全", link: "/note/Networks/网络安全" },
      { text: "常考面试题", link: "/note/Networks/常考面试题" },
    ],
  },
  {
    text: "数据结构",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "数组", link: "/note/DataStructure/数组" },
      { text: "字符串", link: "/note/DataStructure/字符串" },
      { text: "栈和队列", link: "/note/DataStructure/栈和队列" },
      { text: "链表", link: "/note/DataStructure/链表" },
      { text: "哈希表", link: "/note/DataStructure/哈希表" },
      { text: "二叉树", link: "/note/DataStructure/二叉树" },
    ],
  },
  {
    text: "算法",
    collapsible: true,
    collapsed: true,
    items: [
      { text: "时间复杂度", link: "/note/Algorithm/时间复杂度" },
      { text: "暴力算法", link: "/note/Algorithm/暴力算法" },
      { text: "排序算法", link: "/note/Algorithm/排序算法" },
      { text: "双指针法", link: "/note/Algorithm/双指针法" },
      { text: "回溯算法", link: "/note/Algorithm/回溯算法" },
      { text: "贪心算法", link: "/note/Algorithm/贪心算法" },
      { text: "动态规划", link: "/note/Algorithm/动态规划" },
      { text: "优化算法", link: "/note/Algorithm/优化算法" },
    ],
  },
];

export default Sidebar;
