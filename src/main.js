// 注册方法（1）
import Vue from 'vue'
import App from './App.vue' 
import VueRouter from 'vue-router' 
import VueResource from 'vue-resource' 
import Home from './components/Home.vue' 
import Hello from './components/Hello.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import Sidebar from './components/Sidebar.vue'
//注册两个插件 
Vue.use(VueResource) 
Vue.use(VueRouter) 
const router = new VueRouter() 
// 路由map 

router.map ({ 
	// '/': {
	// 	component: App
	// },
	'/Home': { 
		component: Home 
	},
	'/sidebar': {
		component: Sidebar
	},
	'/time-entries': {
		component: TimeEntries,
		subRoutes: {
			'/log-time': {
				component: LogTime
			}
		}
	}
})

router.redirect ({ 
	'*': '/Home' 
}) 

router.start(App, '#app')




// 注册方法（2）
// var Vue = require('vue');
// var VueRouter = require('vue-router');
// var Home = require('./components/Home.vue');
// var One = require('./components/One.vue');
// var Two = require('./components/Two.vue');
// var Three = require('./components/Three.vue');
// var AppIndex = require('./App.vue');



// Vue.use(VueRouter)

// // var Foo = Vue.extend({
// // 	template: '<p>这是一个连接！</p>'
// // })


// var App = Vue.extend({})
// var router = new VueRouter()


// router.map({
// 	'/': {
// 		component: AppIndex
// 	},
// 	'/home': {
//         component: Home
//     },
// 	'/one': {
// 		component: One
// 	},
// 	'/two': {
// 		component: Two
// 	},
// 	'/three': {
// 		component: Three
// 	}
// })

// router.start(App, '#app')
// //启动应用.路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上
