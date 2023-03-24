<template >
    <div v-if="!estreponse">
        <div class="relative bg-rosouge p-7 shadow-xl rounded-md">
            <div @click="toggleVisible" name="alert-circle"
                class="absolute text-black bottom-1 right-2 text-xs cursor-pointer">Signaler le commentaire</div>
            <div class="flex justify-between">
                <i>
                    <ion-icon class="text-xl" v-for="i in 5" :name="i <= note ? 'star' : 'star-outline'"></ion-icon>
                </i>
                <span class=" font-medium">{{ toReadableDate(date) }}</span>
            </div>
            <h1 class="lg:text-xl text-base font-bold text-white">{{ title }}</h1>
            <p class="lg:text-lg text-sm text-slate-300">{{ comment }}</p>
        </div>

        <div v-if="reponse" id="reponse" class="flex flex-col w-full items-end before:">
            <h1 class="mt-5 mb-2 w-11/12 text-2xl font-bold">Réponse de VinoDrill</h1>
            <p class="text-lg w-11/12 text-slate-300">{{ reponse.commentaire }}</p>
        </div>
        
        <!-- pop up element -->
        <Popup title="Signaler un avis" :show="visible" @update:show="visible = $event" @submit="showSuccess ? toggleVisible() : send()" :texteBouton="showSuccess ? 'Fermer' : 'Signaler'" v-auto-animate>
                <div v-if="!showSuccess">                    
                    <div class="bg-rosouge p-7 shadow-xl rounded-md">
                        <div class="flex md:flex-row flex-col md:justify-between">
                            <i>
                                <ion-icon class="md:text-xl text-sm" v-for="i in 5" :name="i <= note ? 'star' : 'star-outline'"></ion-icon>
                            </i>
                            <span class=" font-medium text-sm">{{ toReadableDate(date) }}</span>
                        </div>
                        <h1 class="lg:text-xl text-sm font-bold dark:text-white">{{ title }}</h1>
                        <p class="lg:text-lg text-xs text-slate-300">{{ comment }}</p>
                    </div>
                    <h1 class="mt-5 lg:text-3xl text-white">Qu'est ce qui ne vas pas avec ce commentaire ?</h1>
                    <ul id="list" class="lg:flex gap-2 justify-evenly mt-2">
                        <li @click="setSign('Inapproprié')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg md:text-xl text-sm text-black">Il est inapproprié
                        </li>
                        <li @click="setSign('Inutile')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg md:text-xl text-sm text-black">Il est inutile</li>
                        <li @click="setSign('Faux')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg md:text-xl text-sm text-black">Il est faux</li>
                        <li @click="setSign('Autre')" class="choice mt-3 cursor-pointer p-3 bg-white rounded-lg shadow-lg md:text-xl text-sm text-black">Autre</li>
                    </ul>
                </div>
                <div v-else>
                    <h1 class="mt-5 text-3xl text-white">Merci pour votre signalement !</h1>
                    <p class="mt-5 text-xl text-white">Nous allons étudier votre signalement et nous vous tiendrons au courant de la suite des événements.</p>
                </div>
        </Popup>
    </div>
</template>

<script setup lang="ts">

import { nextTick, onMounted, ref } from 'vue';
import axios from 'axios';
import Popup from './Popup.vue';

const avisignale = ref(true);
const signaleComment = ref('');
const showSuccess = ref(false);

const props = defineProps<{
    id: number;
    idSejour: number;
    idClient: number;
    note: number;
    comment: string;
    date: string;
    title: string;
    reponse: any;
    estreponse: boolean;
}>();

const visible = ref(false);
const textarea = ref(false);

const toggleSuccess = () => {
    showSuccess.value = !showSuccess.value;
}

const toggleVisible = () => {
    visible.value = !visible.value;
    showSuccess.value = false;
    nextTick(() => {
        if (visible.value) {
            const btn = document.querySelectorAll('.choice');
            btn.forEach((el) => {
                el.addEventListener('click', () => {
                    el.classList.toggle('btn-active');
                });
            });
        }   
    });
}

const send = async () => {
    axios.put(`/api/Avi/${props.id}`, {
                idSejour: props.idSejour,
                idAvis: props.id,
                idClient: props.idClient,
                note: props.note,
                commentaire: props.comment,
                dateAvis: props.date,
                titreAvis: props.title,
                avisSignale : avisignale.value,
                typeSignalement: signaleComment.value
    })
    toggleSuccess();
}

const setSign = (str) =>{
    if (!signaleComment.value.includes(str))
    {
        if (signaleComment.value == ''){
            signaleComment.value += str;
        } else {
            signaleComment.value += ', ' + str;
        }
    } else {
        signaleComment.value = signaleComment.value.replace(str + ', ', '');
        if (signaleComment.value.includes(str))
            signaleComment.value = signaleComment.value.replace(str, '');
    }
}

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

</script>

<style scoped>
* {
    transition: all 0.3s ease;
}

.btn-active {
    background-color: #000;
    color: #fff;
    transform: scale(1.1);
}

#reponse::before{
  content: "";
  position: absolute;
  width: 0;
  height: 80%;
  border-radius: 100px;
  border-right: 5px solid hsl(228, 33%, 97%);
  top: 10px;
  left: 5%;
}
</style>

