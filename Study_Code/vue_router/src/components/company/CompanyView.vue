<template>
	<div>
		<h1>Company</h1>
		<p>
			<RouterLink :to="{name: 'company-intro'}" active-class="on">회사 소개</RouterLink> | 
			<RouterLink :to="{name: 'company-map'}" active-class="on">오시는 길</RouterLink> | 
			<RouterLink :to="{name: 'company-history'}" active-class="on">회사 연혁</RouterLink>
		</p>

		<RouterView name="header"></RouterView>
		<RouterView name="body"></RouterView>
		<RouterView name="footer"></RouterView>

	</div>
</template>