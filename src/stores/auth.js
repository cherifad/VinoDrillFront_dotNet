import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from '@vueuse/core';
import { useRoute } from "vue-router";

const router = useRoute();

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authData: useStorage('authData', null),
        authUser: null,
        authToken: "",
        authErrors: [],
    }),
    getters: {
        user: (state) => state.authData?.userDetails,
        token: (state) => state.authData?.token,
        errors: (state) => state.authErrors,
        isAuthenticated: (state) => state.user !== undefined,
    },
    actions: {
        async isValid() {
            const isValid = false;
            await axios.get("/api/User/CheckToken?token=" + this.authToken)
                .then((response) => {
                    isValid = response.data.valid;
                })
                .catch(() => {
                });
            return isValid;
        },
        async getUser() {
            if (!await this.isValid()) {
                this.authUser = null;
                this.authToken = "";
                this.router.push("/connexion");
                return;
            } 
            await axios.get("/api/Authenticate/login")
                .then((response) => {
                    this.token = response.data.token;
                    this.authUser = response.data.userDetails;
                })
                .catch((error) => {
                    if(error.response.status === 401) {
                        this.authUser = null;
                    };                                                                                                             
                });
        },
        async login(email, password) {
            this.authError = [];
            // await this.getToken();
            try {
                const response = await axios.post("/api/Authenticate/login", {
                    "email": email,
                    "password": password,
                });
                this.authData = response.data;
                this.router.push("/mon-compte");
            } catch (error) {
                this.authErrors.push("Identifiants incorrects");
            }
        },
        async logout() {
            // await axios.post("/logout");
            this.router.push("/");
            this.authName = null;
            this.authToken = "";
        },
        async register(nomclient, prenomclient, emailclient, datenaissance, sexe, motdepasse, motdepasse_confirmation) {
            this.authError = [];
            await this.getToken();
            try {
                const response = await axios.post("/register", {
                    nomclient,
                    prenomclient,
                    datenaissance,
                    sexe,
                    emailclient,
                    motdepasse,
                    motdepasse_confirmation,
                });
                this.router.push("/verif-mail");
                this.authUser = response.data;

                console.log(response.data);
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
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
    },
});