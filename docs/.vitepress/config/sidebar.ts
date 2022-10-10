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
		text: '介绍',
		collapsible: true,
		collapsed: true,
		items: [
			// This shows `/note/config/index.md` page.
			{ text: '本站指南', link: '/note/Intro/Introduce' },
			{ text: '学习建议', link: '/note/Intro/Tips' },
			{ text: '参与贡献', link: '/note/Intro/Commit' },
			{ text: 'Markdown', link: '/note/Intro/Vitepress' },
		],
	},
	{
		text: 'HTML',
		collapsible: true,
		collapsed: true,
		item: [{ text: 'HTML基本内容' }],
	},
	{
		text: 'JavaScript',
		collapsible: true,
		collapsed: true,
		items: [
			{ text: 'JavaScript面试题', link: '/note/JavaScript/JavaScript' },
		],
	},
	{
		text: 'TypeScript',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'TS类型体操', link: '/note/TypeScript/TS类型体操' }],
	},
	{
		text: 'Vue',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'Vue面试题', link: '/note/Vue/Vue' }],
	},
	{
		text: 'React',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'React面试题', link: '/note/React/React' }],
	},
	{
		text: 'Vite',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'Vite使用和配置', link: '/note/Vite/Vite' }],
	},
	{
		text: 'Git',
		collapsible: true,
		collapsed: true,
		items: [
			{ text: 'Git-Commit规范', link: '/note/Git/常用命令大全' },
			{ text: 'Git常用命令', link: '/note/Git/常用命令大全' },
		],
	},
	{
		text: 'Linux',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'Linux', link: '/note/Linux/常用命令大全' }],
	},
	{
		text: 'Nest.js',
		collapsible: true,
		collapsed: true,
		items: [{ text: 'Nest.js使用和介绍', link: '/note/Nest/Nest' }],
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
		text: '计算机网络',
		collapsible: true,
		collapsed: true,
		items: [
			{ text: 'HTTP', link: '/note/Networks/HTTP' },
			{ text: 'TCP/UDP', link: '/note/Networks/TCP-UDP' },
			{ text: '网络安全', link: '/note/Networks/网络安全' },
			{ text: '常考面试题', link: '/note/Networks/常考面试题' },
		],
	},
	{
		text: '数据结构',
		collapsible: true,
		collapsed: true,
		items: [
			{ text: '数组', link: '/note/DataStructure/数组' },
			{ text: '字符串', link: '/note/DataStructure/字符串' },
			{ text: '栈和队列', link: '/note/DataStructure/栈和队列' },
			{ text: '链表', link: '/note/DataStructure/链表' },
			{ text: '哈希表', link: '/note/DataStructure/哈希表' },
			{ text: '二叉树', link: '/note/DataStructure/二叉树' },
		],
	},
	{
		text: '算法',
		collapsible: true,
		collapsed: true,
		items: [
			{ text: '时间复杂度', link: '/note/Algorithm/时间复杂度' },
			{ text: '暴力算法', link: '/note/Algorithm/暴力算法' },
			{ text: '排序算法', link: '/note/Algorithm/排序算法' },
			{ text: '双指针法', link: '/note/Algorithm/双指针法' },
			{ text: '回溯算法', link: '/note/Algorithm/回溯算法' },
			{ text: '贪心算法', link: '/note/Algorithm/贪心算法' },
			{ text: '动态规划', link: '/note/Algorithm/动态规划' },
			{ text: '优化算法', link: '/note/Algorithm/优化算法' },
		],
	},
];

export default Sidebar;
