<template>
    <div class="top-0 z-50 bg-black opacity-70 right-0 fixed w-screen flex justify-center items-center h-screen blur-lg">
    </div>

    <div class="top-0 z-50 right-0 fixed w-screen flex justify-center items-center h-screen">        
        <div class="opacity-100 absolute h-fit py-7 w-2/7 rounded-lg bg-rouge">
            <ion-icon @click="emit('toClose', true)" name="close-outline" class="text-white text-5xl cursor-pointer z-50 absolute top-5 right-5"></ion-icon>
            <div class="flex p-7 w-full h-full gap-5 flex-col justify-center items-center">
                <h1 class="text-5xl font-bold text-white w-full text-center" id="passenger">Ajouter une adresse</h1>
                <div class="flex items-center gap-3 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <h1 class="text-lg font-bold w-full text-center">Vous devez donner un nom à l'adresse (Libellé)</h1>
                </div>
                <div class="flex flex-col gap-3 items-center w-full">
                    <div class="flex flex-col w-full gap-3">
                        <label for="placeInput">Votre adresse (saisissez le début et selectionnez votre adresse dans la liste déroulante)</label>
                        <input v-model="search" @input="autoComplete(false)" type="text" id="placeInput" placeholder="Entrez ici votre adresse" class="flex-1 text-xl border-2 font-normal border-rose outline-none bg-transparent p-3 rounded-md" title="Taper le début de votre adresse et séléctionner la parmis la liste en dessous">
                        <!-- <button @click="autoComplete(true)" class="flex w-fit cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Charger automatiquement</button> -->
                    </div>  
                    <div class="relative w-full">
                        <ul v-auto-animate class="absolute -mt-1 flex flex-col w-full z-50 top-auto gap-2">
                            <li class="p-2 bg-slate-200 text-black font-bold rounded-md cursor-pointer hover:-translate-y-1" v-for="result in results" @click="fillData(result)" :key="result.place_id">{{ result.formatted }}</li>
                            <div v-if="loading" class="w-full cursor-wait bg-black opacity-50 rounded-md h-full absolute top-0 righ-0 flex justify-center items-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/xjovhxra.json"
                                    trigger="loop"
                                    colors="primary:#ffff,secondary:#08a88a"
                                    style="width:125px;height:125px">
                                </lord-icon>
                            </div>
                        </ul>       
                    </div>                               
                </div>
                <label for="libelle" class="w-full -mt-4">Libellé de l'adresse</label>
                <input v-model="form.libelleAdresse" type="text" id="libelle" placeholder="Entrez ici le libellé de votre adresse" class="w-full -mt-2 border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <label for="" class="w-full">Les champs suivants sont remplis automatiquement et ne peuvent être mofifiés</label>
                <input disabled v-model="form.rueAdresse" type="text" placeholder="Rue" class="w-full opacity-60 cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.villeAdresse" type="text" placeholder="Ville" class="w-full opacity-60 cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.codePostalAdresse" type="number" placeholder="Code postal" class="w-full opacity-60 cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <input disabled v-model="form.paysAdresse" type="text" placeholder="Pays" class="w-full opacity-60 cursor-not-allowed border font-normal border-rose outline-none bg-transparent p-2 rounded-md">
                <button @click="addNewAdress" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Ajouter</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const apiKey = "937d2715a4ec4a349192e4f494b24706";

const emit = defineEmits(['toClose']);
const results: any = ref(null);
const search = ref('');
const loading = ref(false);

const props = defineProps<{
    idclient: any;
}>();

const form = ref({
    libelleAdresse: '',
    rueAdresse: '',
    villeAdresse: '',
    codePostalAdresse: '',
    paysAdresse: '',
    idClient: props.idclient
});

const close = () => {
    window.location.reload();
}

const addNewAdress = async () => {
    console.log(form.value);
    await axios.post('/api/Adresse', form.value).then(() => {
        window.location.reload();
    });
    close();
}

const autoComplete = async(load) => {
    loading.value = load;
    await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${search.value}&format=json&apiKey=${apiKey}`, {
        withCredentials: false,
        })
        .then((data) => {
            results.value = data.data["results"];
            load ? loading.value = false : null;
        });
};

const fillData = (data) => {
    form.value.rueAdresse = `${!data.housenumber ? '' : data.housenumber} ${data.street}`;
    form.value.villeAdresse = data.city;
    form.value.codePostalAdresse = data.postcode;
    form.value.paysAdresse = data.country;

    results.value = [];
}

</script>

<style scoped>
* {
    transition: all .3s ease-in-out;
}
</style>