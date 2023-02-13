import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '../stores/auth';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const store = useAuthStore();

  if (
    // make sure the user is authenticated
    !store.user.loggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login' &&
    to.name !== 'Home' &&
    to.name !== 'Register'
  ) {
    // redirect the user to the login page
    return { name: 'Login' };
  }
});

export default router;
