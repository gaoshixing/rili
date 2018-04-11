import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
				{
					path: '/',
					name: 'index',
					component: (resolve) => {
						require(['../components/views/todoList/index'], resolve)
					}
				},
				// {
				// 	path: '/',
				// 	name: 'leaderAdd',
				// 	component: (resolve) => {
				// 		require(['../components/views/leader/leaderAdd'], resolve)
				// 	}
				// },
				{
					path: '/tag',
					name: 'tag',
					component: (resolve) => {
						require(['../components/views/list/tag'], resolve)
					}
				},
				{
					path: '/leaderIndex',
					name: 'leaderIndex',
					component: (resolve) => {
						require(['../components/views/leader/leaderIndex'], resolve)
					}
				},
				{
					path: '/case',
					name: 'case',
					component: (resolve) => {
						require(['../components/views/case/caseManage'], resolve)
					}
				},
				{
					path: '/myStudents',
					name: 'myStudents',
					component: (resolve) => {
						require(['../components/views/myStudents'], resolve)
					}
				},
				{
					path: '/connectList',
					name: 'connectList',
					component: (resolve) => {
						require(['../components/views/connectList'], resolve)
					}
				},
				{
					path: '/connectCheck',
					name: 'connectCheck',
					component: (resolve) => {
						require(['../components/views/connectCheck'], resolve)
					}
				},
				{
					path: '/connectCheckDetail',
					name: 'connectCheckDetail',
					component: (resolve) => {
						require(['../components/views/connectCheck/connectCheckDetail'], resolve)
					}
				},
				{
					path: '/head',
					name: 'head',
					component: (resolve) => {
						require(['../components/views/HEAD/index'], resolve)
					}
				},
					{
					path: '/index1',
					name: 'index1',
					component: (resolve) => {
						require(['../components/views/HEAD/index1'], resolve)
					}
				},
				{
					path: '/index2',
					name: 'index2',
					component: (resolve) => {
						require(['../components/views/HEAD/index2'], resolve)
					}
				},
				{
					path: '/index3',
					name: 'index3',
					component: (resolve) => {
						require(['../components/views/HEAD/index3'], resolve)
					}
				},
				
	]
})
