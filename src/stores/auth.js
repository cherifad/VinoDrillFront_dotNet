import { defineStore } from "pinia";
import axios from "axios";
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        isAuthenticated: (state) => state.authUser !== null,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            await axios.get("/api/user")
                .then((response) => {
                    this.authUser = response.data;
                })
                .catch((error) => {
                    if(error.response.status === 401) {
                        this.authUser = null;
                    };                                                                                                             
                });
        },
        async login(username, password) {
            this.authError = [];
            // await this.getToken();
            try {
                const response = await axios.post("/Authenticate/login", {
                    "username": username,
                    "password": password,
                });
                console.log(response.data);
                this.authUser = response.data.token;
                this.router.push("/mon-compte");
            } catch (error) {
                this.authErrors.push("Identifiants incorrects");
            }
        },
        async logout() {
            // await axios.post("/logout");
            this.router.push("/");
            this.authUser = null;
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