import Blog from './components/pages/Blog.vue';
import Projects from './components/pages/Projects.vue';
import Home from './components/pages/Home.vue';
import NotFoundComponent from './components/pages/NotFound.vue';

export const routes = [
	{path: '', component: Home}, 
	{path: '/blog',	component: Blog},
	{path: '/projects',	component: Projects},
	{path: '*', component: NotFoundComponent}
];