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
				{
					path: '/tag',
					name: 'tag',
					component: (resolve) => {
						require(['../components/views/list/tag'], resolve)
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
	]
})
