import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import HelloView from "@/components/HelloView.vue";
import ProductView from "@/components/ProductView.vue";
import NotFountView from "@/components/NotFountView.vue";

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomeView
	},
	{
		path: '/aboutus',
		redirect: '/about' // 다른 주소를 같은 페이지로
	},
	{
		path: '/about',
		name: 'AboutPage',
		component: AboutView,
		alias: '/about_new', // 같은 페이지를 다른 주소로
		beforeEnter: (to, from, next) => {
			console.log('라우터별 가드 : beforeEnter')
			next()
		}
	},
	{
		path: '/hello',
		name: 'HelloPage',
		component: HelloView
	},
	{
		path: '/product/:id',
		name: 'ProductPage',
		component: ProductView
	},
	{
		path: '/company',
		name: 'CompanyPage',
		component: () => import('@/components/company/CompanyView.vue'),
		children: [{
			path: 'intro',
			name: 'company-intro',
			components: {
				header: () => import('@/components/company/HeaderView.vue'),
				body: () => import('@/components/company/IntroView.vue'),
				footer: () => import('@/components/company/FooterView.vue')
			}
		},
		{
			path: 'map',
			name: 'company-map',
			components: {
				header: () => import('@/components/company/HeaderView.vue'),
				body: () => import('@/components/company/MapView.vue'),
				footer: () => import('@/components/company/FooterView.vue')
			}
		},
		{
			path: 'history',
			name: 'company-history',
			components: {
				header: () => import('@/components/company/HeaderView.vue'),
				body: () => import('@/components/company/HistoryView.vue'),
				footer: () => import('@/components/company/FooterView.vue')
			}
		}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundPage',
		component: NotFountView
	}
]

const router = createRouter({
	history: createWebHistory('/'),
	routes
})

// 전역가드
// router.beforeEach((to, from, next) => {
// 	console.log(to)
// 	console.log(from)
// 	if (to.fullPath !== '/company') {
// 		next()
// 	}
// })

export default router