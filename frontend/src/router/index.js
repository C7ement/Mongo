import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/LoginPage';
import Mongo from '../views/Mongo';

Vue.use(VueRouter)

const routes = [
	{
		path: "/login",
		name: "login",
		component: Login
	},
	{
		path: "/",
		name: "mongo",
		component: Mongo
	},
];

const router = new VueRouter({
	routes
});

export default router
