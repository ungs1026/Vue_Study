<template>
	<div>
		<p>Header</p>
		<!-- <p>
			<a href="/">Home</a> / 
			<a href="/about">About</a> / 
			<a href="/hello">Hello</a> / 
		</p> -->
		<p>
			<RouterLink :to="{name: 'HomePage'}" active-class="on">Home</RouterLink> | 
			<RouterLink :to="{name: 'AboutPage'}" active-class="on">About</RouterLink> | 
			<RouterLink :to="{name: 'HelloPage'}" active-class="on">Hello</RouterLink> |
			<RouterLink :to="{name: 'ProductPage', params: {id: '1'}, query: {lang: 'ko'}}" active-class="on">Product</RouterLink> |
			<RouterLink :to="{name: 'CompanyPage'}" active-class="on">Company</RouterLink> |

			<!-- <RouterLink to="/" active-class="on">Home</RouterLink> | 
			<RouterLink to="/about" active-class="on">About</RouterLink> | 
			<RouterLink to="/hello" active-class="on">Hello</RouterLink> -->
		</p>
	</div>
</template>