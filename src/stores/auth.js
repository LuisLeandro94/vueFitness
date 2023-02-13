import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../../firebaseConfig';
import router from '../router/index';

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {
        loggedIn: false,
        data: null,
      },
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    async register({ email, password, name }) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        this.user.data = response.user;
        response.user.updateProfile({ displayName: name });
      } else {
        throw new Error('Unable to register user');
      }
    },

    async logIn(email, password) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        this.user.loggedIn = true;
        this.user.data = { user: response.user };
        router.push('/about');
      } else {
        throw new Error('login failed');
      }
    },

    async logOut() {
      await signOut(auth);
      this.user.data = null;
      this.user.loggedIn = false;
    },

    async fetchUser(user) {
      this.user.loggedIn = this.user !== null;
      if (user) {
        this.user.data = { displayName: user.displayName, email: user.email };
      } else {
        this.user.data = null;
      }
    },
  },
});

export default useAuthStore;
