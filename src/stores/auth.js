import { defineStore } from "pinia";
import axios from "axios";
import { useStorage, StorageSerializers } from "@vueuse/core";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: useStorage("authUser", null, localStorage, {
      serializer: StorageSerializers.object,
      expires: 1800,
    }),
    authToken: useStorage("authToken", "", localStorage, {
      expires: 1800,
    }),
    authErrors: [],
  }),
  getters: {
    user: (state) => state.authUser,
    token: (state) => state.authToken,
    errors: (state) => state.authErrors,
    isAuthenticated: (state) => state.user !== null,
    isAdmin: (state) => state.user !== null && state.user.userRole === "Admin",
  },
  actions: {
    async login(email, password) {
      this.authError = [];
      // await this.getToken();
      try {
        const response = await axios.post("/api/Authenticate/login", {
          email: email,
          password: password,
        });
        this.authToken = response.data.token;
        this.authUser = response.data.userDetails;
        this.router.push("/mon-compte");
      } catch (error) {
        this.authErrors.push("Identifiants incorrects");
      }
    },
    async logout() {
      // await axios.post("/logout");
      this.authUser = null;
      this.authToken = "";
      this.router.push("/");
    },
    async register(
      nomclient,
      prenomclient,
      emailclient,
      datenaissance,
      sexe,
      motdepasse,
      motdepasse_confirmation
    ) {
      this.authError = [];
      try {
        const response = await axios.post("/api/Authenticate/register", {
          email: emailclient,
          password: motdepasse,
          confirmPassword: motdepasse_confirmation,
          firstName: prenomclient,
          lastName: nomclient,
          dateOfBirth: datenaissance,
          gender: sexe,
        });
        this.router.push("/verif-mail");
        this.authUser = response.data.userDetails;
      } catch (error) {
        this.authErrors = error.response.data.errors;
      }
    },
    async forgotPassword(email) {
      this.authError = [];
      await this.getToken();
      try {
        await axios.post("/forgot-password", {
          email,
        });
        this.router.push("/mot-de-passe-oublie");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async isValid() {
      var isValid = false;
      if (this.authToken === "") return false;
      await axios
        .get("/api/User/CheckToken?token=" + this.authToken)
        .then((response) => {
          isValid = response.data.valid;
        })
        .catch(() => {});
      return isValid;
    },
    async getUser() {
      if (!(await this.isValid())) {
        this.authUser = null;
        this.authToken = "";
        //this.router.push("/connexion");
        return;
      }
    },
  },
});
