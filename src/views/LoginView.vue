<template>
    <div class="flex min-h-screen w-full">
        <div class="w-3/5 hidden lg:block p-5">
            <div id="img" class="h-full flex w-full flex-col justify-end p-7 gap-5">
                <h1 class=" text-4xl font-bold">Domaine de Lagravière</h1>
                <p class=" font-normal text-2xl">Bordeaux</p>
            </div>
        </div>

        <div class="flex flex-col items-center flex-1 w-fit">

            <div class="md:p-5 mb-5 md:mb-0 flex flex-grid flex-col w-fit items-center gap-10" v-auto-animate>
                <h1 id="passenger" class=" text-5xl text-center">{{ login ? 'Bonjour' : 'Créer un compte' }}</h1>
                <div id="toggle" class="flex gap-2 relative bg-rose p-2 rounded-full">
                    <div @click="toggleLogin(false)" class="flex-1 cursor-pointer select-none text-center p-2 text-rouge">
                        <span id="login" class="z-40 active">Connexion</span>
                    </div>
                    <div @click="toggleLogin(true)"
                        class="flex-1 z-40 cursor-pointer select-none text-center p-2 text-rouge">
                        <span id="register">Inscription</span>
                    </div>
                    <div class="absolute w-full flex h-full top-0 left-0 p-2 rounded-full">
                        <div id="logRegBack" class="bg-rouge w-1/2 h-full rounded-full"></div>
                    </div>
                </div>
            </div>
            <form id="form" class="flex flex-col gap-3 w-full lg:px-12" v-auto-animate @submit="(e) => executeForm(e)">

                <!-- Login -->

                
                <div v-if="login" class="flex flex-col gap-4">
                    <div class="flex w-full flex-col gap-2" v-auto-animate>
                        <label for="email" class="text-white w-full">Email</label>
                        <input v-model="loginForm.email" type="email" id="email"
                            class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                            placeholder="Email">
                        <div v-if="authStore.errors.email && login" v-auto-animate class="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
                            <span class="absolute inset-y-0 left-0 flex items-center ml-4">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </span>
                            <p class="ml-6">{{ authStore.errors.email[0] }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="">Mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>                           
                            <input v-model="loginForm.password" :type="show ? 'text': 'password'" id="password"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors[0] && login" v-auto-animate class="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
                            <span class="absolute inset-y-0 left-0 flex items-center ml-4">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </span>
                            <p class="ml-6">{{ authStore.errors[0] }}</p>
                        </div>
                        <input type="text" v-model="abeille" name="email" class="hidden">
                    </div>                    
                </div>

                <!-- Registration -->

                <div v-else class="flex flex-col gap-4">

                    <div v-if="error" class=" bg-red-600 flex items-center text-white text-xl text-center p-3 rounded-xl">
                        <ion-icon class="text-5xl font-bold" name="alert-circle-outline"></ion-icon>
                        Vous devez d'abord créer un compte avant de vous connecter avec {{ socialProvider }} !
                    </div>

                    <div class="flex gap-3">
                        <div @click="registerForm.gender = 'M'" :class="registerForm.gender == 'M' ? 'opacity-100' : 'opacity-60'"
                            class="text-xl flex-1 md:w-fit font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">M
                        </div>
                        <div @click="registerForm.gender = 'F'" :class="registerForm.gender == 'M' ? 'opacity-60' : 'opacity-100'"
                            class="text-xl flex-1 md:w-fit font-bold text-black p-3 rounded-md bg-white cursor-pointer select-none">
                            Mme</div>
                    </div>

                    <div class="flex lg:flex-row flex-col gap-2">
                        <div class="flex w-full flex-col gap-2">
                            <label for="lastname" class="text-white w-full">Nom</label>
                            <input v-model="registerForm.lastname" type="text" id="lastname"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Durant">
                            <div v-if="authStore.errors.LastName && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.LastName[0] }}</p>
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-2">
                            <label for="firstname" class="text-white w-full">Prénom</label>
                            <input v-model="registerForm.firstname" type="text" id="firstename"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Michel">
                            <div v-if="authStore.errors.FirstName && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.FirstName[0] }}</p>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-white w-full">Email</label>
                        <input v-model="registerForm.email" type="email" id="email"
                            class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                            placeholder="Email">
                        <div v-if="authStore.errors.Email && !login" v-auto-animate>
                            <p class="text-red-500">{{ authStore.errors.Email[0] }}</p>
                        </div>
                    </div>

                    <input type="text" v-model="abeille" name="email" class="hidden">

                    <div class="flex lg:flex-row flex-col gap-2 w-full">
                        <div class="flex w-full flex-col gap-2">
                            <label for="birthdate" class="text-white w-full">Date de naissance</label>
                            <input v-model="registerForm.birthdate" type="date" id="birthdate"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                max="12-02-1992">
                            <div v-if="authStore.errors.dateOfBirth && !login" v-auto-animate>
                                <p class="text-red-500">Veuillez renseigner une date de naissance</p>
                            </div>
                        </div>
                        <!-- <div class="flex w-full flex-col gap-2">
                            <label for="phone" class="text-white w-full">Téléphone</label>
                            <input v-model="registerForm.phone" type="tel" id="phone"
                                class="rounded-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="0658789654">
                            <div v-if="authStore.errors.phone && !login" v-auto-animate>
                                <p class="text-red-500">{{ authStore.errors.phone[0] }}</p>
                            </div>
                        </div> -->
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="">Mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>
                            <input v-model="registerForm.password" :type="show ? 'text': 'password'" id="password" name="password"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors.Password && !login" v-auto-animate>
                            <p v-for="error in authStore.errors.Password" :key="error" class="text-red-500">{{ error }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 relative">
                        <label for="password" class="">Confirmer votre mot de passe</label>
                        <div class="relative w-full">
                            <div class="flex absolute z-50 h-full p-2 right-1 top-0 items-center justify-center">
                                <ion-icon @click="show = !show" v-if="!show"  class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-outline"></ion-icon>
                                <ion-icon @click="show = !show" v-else class="text-3xl cursor-pointer bottom-auto text-rose" name="eye-off-outline"></ion-icon>
                            </div>
                            <input v-model="registerForm.PasswordConfirm" :type="show ? 'text': 'password'" id="password" name="passwordConfirm"
                                class="rounded-full w-full border-2 p-4 text-rouge border-rose focus:border-rouge outline-none"
                                placeholder="Mot de passe">
                        </div>
                        <div v-if="authStore.errors.ConfirmPassword && !login" v-auto-animate>
                            <p v-for="error in authStore.errors.ConfirmPassword" :key="error" class="text-red-500">{{ error }}</p>
                        </div>
                    </div>
                </div>

                <!-- <RouterLink :to=" login ? '/mot-de-passe-oublie' : login = true">
                    {{ login ? 'Mot de passe oublié ?' : 'Déjà inscrit ? Se connecter' }}
                </RouterLink> -->

                <div class="flex justify-end">
                    <button type="submit"
                        class="bg-rose w-fit lg:px-12 px-2 rounded-full hover:-translate-y-1 text-white p-2">{{ login ? "Se connecter" : "S'inscrire" }}</button>
                </div>

                <div v-if="login" class="flex items-center flex-col gap-2">
                    <div class=" w-10/12 border my-3 rounded-full ">

                    </div>
                    <a class="flex w-full items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" :href="config.backend_url + '/login/google'">
                        <ion-icon class="text-xl" name="logo-google"></ion-icon>
                        Se connecter avec Google
                    </a>
                    <!-- <a class="flex items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" href="http://www.iutannecy-deptinfo.fr:5005/login/facebook">
                        <ion-icon class="text-xl" name="logo-facebook"></ion-icon>
                        Se connecter avec Facebook
                    </a> -->
                    <a class="flex w-full items-center gap-3 bg-white text-black justify-center hover:-translate-y-1 p-4 rounded-xl" :href="config.backend_url + '/login/twitter'">
                        <ion-icon class="text-xl" name="logo-twitter"></ion-icon>
                        Se connecter avec Twitter
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, watch } from 'vue';
import { useAuthStore } from '../stores/auth';
import config from '../utils/config';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const dateMinus18 = new Date();
const router = useRouter();

const login = ref(true)
const registerText = ref(null);
const loginText = ref(null);
const logRegBack = ref(null);
const show = ref(false);

const abeille = ref('');
const block = ref(false);

// watch abeille value to change the background
watch(abeille, (abeilleChangee) => {
    if(abeilleChangee.length > 0) {
        block.value = true;
    }
})

// social login errors
const error = ref(false);
const socialProvider = ref(null);

const loginForm = ref({
    email: '',
    password: ''
})

const registerForm = ref({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: 'M',
    birthdate: '',
    phone: ''
})

watch(authStore.isAuthenticated , (isAuthenticated) => {
    if (isAuthenticated) {
        router.push({ name: 'MonCompte' })
    }
})

onMounted(async () => {
    registerText.value = document.getElementById('register')
    loginText.value = document.getElementById('login')
    logRegBack.value = document.getElementById('logRegBack')

    dateMinus18.setFullYear(dateMinus18.getFullYear() - 18);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const errorParam = urlParams.get('error')
    const providerParam = urlParams.get('provider')
    if (providerParam) {
        socialProvider.value = providerParam[0].toUpperCase() + providerParam.slice(1)
    }
    if (errorParam) {
        toggleLogin(true)
        error.value = true
    }
});

const toggleLogin = (registration) => {
    registration ? login.value = false : login.value = true
    if (login.value) {
        registerText.value.classList.remove('active')
        loginText.value.classList.add('active')
        logRegBack.value.style.transform = 'translateX(0)'
    } else {
        registerText.value.classList.add('active')
        loginText.value.classList.remove('active')
        logRegBack.value.style.transform = 'translateX(100%)'
    }
};

const executeForm = (event) => {
    event.preventDefault();
    if(login.value){
        if(!block.value){
            authStore.login(loginForm.value.email, loginForm.value.password)
        }
    }
    else{
        if(!block.value){
            authStore.register(registerForm.value.lastname, registerForm.value.firstname, registerForm.value.email, registerForm.value.birthdate, registerForm.value.gender, registerForm.value.password, registerForm.value.passwordConfirm)
        }
    }
};

</script>

<style scoped>
* {
    transition: all 0.2s ease-in-out;
}

#img {
    background-image: url("../assets/img/vineyard-ga92acf920_1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 29px;
}

#toggle {
    min-width: 330px;
}
.active {
    color: white;
    z-index: 50;
}
</style>