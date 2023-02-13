<template>
	<nav class="fixed top-0 w-full m-0 px-36 py-10 flex row center items-center">
		<div class="navLogo" />
		<div class="flex row justify-around text-center items-center m-auto">
			<RouterLink to="/" class="mx-10">Home</RouterLink>
			<RouterLink to="/about" class="mx-10">About</RouterLink>
			<RouterLink to="/login" class="mx-10">Login</RouterLink>
		</div>
		<div class="items-center">
			<button v-bind:on-click="GoToSignIn">Sign In</button>
		</div>
	</nav>
</template>

<script>
	import router from '../router/index';
	export default {
		setup() {
			const GoToSignIn = () => router.push('/login');
		},
	};
</script>

<style>
	.navLogo {
		background-image: url('../assets/logo.svg');
		width: 100px;
		height: 30px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
