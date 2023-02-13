<script setup>
	import { RouterView } from 'vue-router';
	import Navbar from './components/Navbar.vue';
</script>

<template>
	<Navbar />

	<RouterView />
</template>

<style scoped>
	@media (min-width: 1024px) {
		.logo {
			margin: 0 2rem 0 0;
		}
	}
</style>
