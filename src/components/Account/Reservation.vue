<template>
    <div class="w-full flex flex-col" v-if="!loading">
        <div class="w-full flex-1 flex gap-3 mb-3 items-center" v-auto-animate>
            <div class="relative w-full h-full justify-around border-2 border-rose p-5 rounded-lg flex flex-col md:gap-3 gap-1"> 
                <div v-if="estcadeau">
                    <p id="passenger" class="text-2xl font-bold">Offert</p>
                    <div class="flex mb-2">
                        <div class=" w-10 border mt-2"></div>
                    </div>
                </div>
                
                <div class="flex md:gap-5 gap-2 justify-between">
                    <div class="flex flex-col">
                        <p id="passenger" class="md:text-2xl font-bold">Référence : {{ refcommande }}</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p id="passenger" class="md:text-2xl font-bold">Date début</p>
                        <div class="flex mb-2">
                            <div class=" w-10 border mt-2"></div>
                        </div>
                        <p class="font-bold">{{ toReadableDate(datedebutreservation) }}</p>
                    </div>
                </div>       
                
                <div class="flex justify-between gap-2">
                    <p id="passenger" class="md:text-2xl font-semibold text-center">Adulte(s)<br>{{ nbadulte }}</p>
                    <p id="passenger" class="md:text-2xl font-semibold text-center">Enfant(s)<br>{{ nbenfant }}</p>
                    <p id="passenger" class="md:text-2xl font-semibold text-center">Chambre(s)<br>{{ nbchambre }}</p>
                </div>
                
                <p v-if="sejour" class="lg:text-2xl font-bold mb-3">Sejour : {{ sejour.titreSejour }}</p>
                <div v-if="coupon" class="mb-3 flex items-center gap-3 justify-between" :class="coupon.estvalide ? '' : 'opacity-60'">
                    <div class="flex gap-3">
                        <ion-icon name="ticket-outline" class="text-3xl"></ion-icon>
                        <p class="text-xl font-semibold" >{{ coupon.codeboncommande }} <br> 
                            <span class="text-sm">                                
                                {{ coupon.estvalide ? `Valable jusqu'au ${toReadableDate(coupon.datevalidite)}` : 'Déjà utilisé' }}
                            </span>
                        </p>
                    </div>
                    <button @click="copied = copyToClipboard(coupon.codeboncommande)" :disabled="!coupon.estvalide" class="flex w-fit items-center gap-2 border-2 border-rose rounded-lg p-2">
                        <ion-icon name="copy-outline" class="text-xl"></ion-icon>
                        <p class="text-sm whitespace-nowrap">{{ copied ? 'copié !' : 'copier' }}</p>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="cannAddAvis && !avisClient" @click="addAvis = !addAvis" class="flex mb-6 w-full cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold justify-center">
            <ion-icon name="pencil"></ion-icon>
            Rédiger un avis
        </div>
        <AddAvis :addShow="addAvis" :idsejour="sejour.idSejour" :idclient="idclient" @update:addShow="addAvis = $event"/>
        <SingleComment v-if="avisClient" v-for="avi in avisClient" :estreponse="false" :reponse="null" :key="avi.idAvis" :id="avi.idAvis" :note="avi.note" :date="avi.dateAvis" :title="avi.titreAvis" :comment="avi.commentaire" />
    </div>
    <div v-else>
        <LoadComponent />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import AddAvis from '../AddAvis.vue';
import SingleComment from '../SingleComment.vue';
import LoadComponent from '../LoadComponent.vue';
import Popup from '../Popup.vue';

const addAvis = ref(false);
const copied = ref(false);
const loading = ref(true);

function copyToClipboard(text: string) {
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
}

function toReadableDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

const props = defineProps<{
    refcommande: any;
    datedebutreservation: any;
    estcadeau: boolean;
    idsejour: number;
    nbadulte: number;
    nbchambre: number;
    nbenfant: number;
    idclient: number;
    coupon: any;
}>();

const sejour = ref();
const cannAddAvis = ref(false);
const avisClient: any = ref(null);

// check if datedebutreservation is in the past
const today = new Date();
const dateReservation = new Date(props.datedebutreservation);

const checkCanAddAvis = () => {
    if (dateReservation < today) {
        cannAddAvis.value = true;
    }
}


onMounted(async () => {
    loading.value = true;
    await axios.get('/api/Sejour/' + props.idsejour)
        .then((response) => {
            sejour.value = response.data;
            console.log('Séjour => ' + response.data.idSejour)
        })
        .catch((error) => {
            console.log(error);
        });
    await axios.get('/api/Avi?idClient=' + props.idclient + '&idSejour=' + props.idsejour)
        .then((response) => {
            if (response.data.length == 0 && dateReservation < today) {
                cannAddAvis.value = true;
                console.log('ho : ' + props.idsejour)
            } else {
                console.log(props.idsejour)
                avisClient.value = response.data;
            }
        })
        .then(() => {
            checkCanAddAvis();
        })
        .catch((error) => {
            console.log(error);
        });   
    loading.value = false; 
});

</script>

<style>
input {
    color: white;
}
</style>