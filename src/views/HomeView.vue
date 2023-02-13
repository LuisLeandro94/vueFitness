<script>
	import { ref } from 'vue';
	import useAuthStore from '../stores/auth';

	export default {
		name: 'Home',
		setup() {
			const error = ref(null);

			const store = useAuthStore();

			const LogOut = async () => {
				try {
					await store.logOut();
				} catch (err) {
					error.value = err.message;
				}
			};
			return { LogOut };
		},
	};
</script>

<template>
	<main>
		<button v-bind:on-click="LogOut">Log out</button>
	</main>
</template>
