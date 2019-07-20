import Blog from '@/components/pages/Blog.vue';
import BlogList from './static/blogList.json';
import BlogMain from '@/components/pages/BlogMain.vue';
import Projects from '@/components/pages/Projects.vue';
import Home from '@/components/pages/Home.vue';

export const routes = [
	{path: '', component: Home, name: 'home'},
	{
		path: '/blog',	
		component: Blog,
		children: [
			{path: '', component: BlogMain},
			...BlogList.map(entry => ({
				path: `${entry.id}`,
				name: entry.id,
				component: () => import(`./markdown/${entry.id}.md`),
			}))
		]
	},
	{path: '/projects',	component: Projects},
	{path: '*', redirect: '/'}
];