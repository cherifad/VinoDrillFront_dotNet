<template>
    <div>
        <ul v-if="selectedDestination.length > 0" class="flex gap-2 flex-wrap mb-2" v-auto-animate>
            <li v-for="destination in selectedDestination" :key="destination" @click="addToSelectedDestination(destination)" class="cursor-pointer flex items-center gap-1 select-none p-1 bg-rose rounded-full text-sm px-2"><ion-icon name="close-outline"></ion-icon> {{ destination.libelleDestination }}</li>
        </ul> 
        <div class="flex items-center sticky top-5 p-2 border-2 border-rose rounded-md flex-1">
            <input v-model="search" @input="filterData"
                class="w-full border-none bg-transparent outline-none" type="text" :placeholder="placeholder">
            <ion-icon name="search" class="text-rose w-5 h-5"></ion-icon>
        </div>
        
        <div v-auto-animate v-if="toDisplayData || toHide" class="relative w-full">
            <div v-auto-animate id="panneauRecherche" class="absolute z-50 flex gap-3 backdrop-blur border-rose border-2 p-5 mt-2 rounded-md w-full">
                <div class="w-2/3">
                    <!-- search results -->
                    <h1 v-if="toDisplayData" class="mb-2">Séjour<span v-if="toDisplayData.length > 1">s</span> :</h1>
                    <div v-if="toDisplayData && toDisplayData.length > 0" class="mt-2 flex flex-col gap-2" v-auto-animate>
                        <router-link v-for="result in toDisplayData" :key="result.idSejour" class="grid grid-cols-3 gap-2 hover:-translate-y-1"
                            :to="{ name: 'SingleSejour', params: { id: result.idSejour, slug: slugify(result.titreSejour) } }">
                            <img class="rounded-lg" :src="checkOnlineImage(result.photoSejour) ? result.photoSejour : '/src/assets/img/vineyard-ga92acf920_1920.jpg'" :alt="result.titreSejour + ' image'">
                            <div class="flex-1 col-span-2">
                                <h3 class="text-base italic">{{ result.titreSejour }}</h3>
                                <p class="text-sm font-bold">{{ result.prixSejour }}€/pers</p>
                            </div>
                        </router-link>
                    </div>
    
                    <div v-else class="mt-2">
                        <div v-if="toDisplayData" class="text-center text-sm italic">Aucun résultat</div>
                    </div>
                </div>
                <div class="w-1/3">
                    <!-- destinations -->
                    <h1 v-if="toDisplayDestination" class="mb-2">Destination<span v-if="toDisplayDestination.length > 1">s</span> :</h1>
                    <div v-if="toDisplayDestination && toDisplayDestination.length > 0" class="mt-2">
                        <ul v-if="destinations" class="flex gap-2 flex-wrap" v-auto-animate>
                            <li id="destinationRecherche" v-for="destination in toDisplayDestination" :key="destination.idDestination" @click="addToSelectedDestination(destination)" class="cursor-pointer select-none p-2 bg-white rounded-lg hover:-translate-y-1 text-black">{{ destination.libelleDestination }}</li>
                        </ul>
                    </div>
                    <div v-else class="mt-2">
                        <div v-if="toDisplayDestination" class="text-center text-sm italic">Aucun résultat</div>
                    </div>
                    
                </div>

            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const emit = defineEmits(['filterDestination']);

const props = defineProps<{
    data: any;
    placeholder: string;
    toHide: boolean;
}>()

const toDisplayData: any = ref(null);
const toDisplayDestination: any = ref(null);
const search = ref("");
const destinations: any = ref(null);

// selected destination
const selectedIdDestination: any = ref([]);
const selectedDestination: any = ref([]);

// filtered data
const filterDestination: any = ref('');

const checkIfStringNotEmpty = (string: string) => {
    return string !== null && string !== undefined && string !== "";
}

onMounted(() => {
    axios.get("/api/Destination").then((res) => {
        destinations.value = res.data;
    });
});

function filterData() {
    if (search.value && search.value.length > 0) {
        toDisplayData.value = props.data.filter((item) => {
            return item.titreSejour.toLowerCase().includes(search.value.toLowerCase());
        });
        toDisplayDestination.value = destinations.value.filter((item) => {
            return item.libelleDestination.toLowerCase().includes(search.value.toLowerCase());
        });
        // limit data to display to 5
        toDisplayData.value = toDisplayData.value.slice(0, 5);
    } else {
        toDisplayData.value = null;
        toDisplayDestination.value = null;
    }
}

// function addToSelectedIdDestination(destination: any, libelleDestination: any) {
//     console.log(toDisplayDestination);
//     if (selectedIdDestination.value.includes(idDestination)) {
//         selectedIdDestination.value = selectedIdDestination.value.filter((item: any) => {
//             return item !== idDestination;
//         });
//     } else {
//         selectedIdDestination.value.push(idDestination);
//     }

//     //Gestion de l'affichage "selectionné"
//     addToSelectedDestination(libelleDestination);

//     selectedIdDestination.value.length > 0 ? filterDestination.value = '&idsDestination=' + selectedIdDestination.value.join(',') : filterDestination.value = '&idsDestination=';

//     console.log(filterDestination.value);

//     emit('filterDestination', filterDestination.value);
// }

function addToSelectedDestination(destination: any) {
    if (selectedDestination.value.includes(destination)) {
        selectedDestination.value = selectedDestination.value.filter((item: any) => {
            return item !== destination;
        });
    } else {
        selectedDestination.value.push(destination);
    }
    
    selectedIdDestination.value = [];
    if (selectedDestination.value.length > 0){
        for(destination of selectedDestination.value){
            selectedIdDestination.value.push(destination.idDestination);
        }
        filterDestination.value = '&idsDestination=' + selectedIdDestination.value.join(',');
        
    } else {
        filterDestination.value = '&idsDestination=';
    }

    emit('filterDestination', filterDestination.value);
}

function slugify(string: string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}

const checkOnlineImage = (url: string) => {
    const img = new Image();
    img.src = url;
    return img.height !== 0;
}

</script>

<style scoped>
* {
    transition: all 0.2s ease-in-out;
}

#panneauRecherche{
    background: rgba(53, 10, 6, 0.5);
}

#destinationRecherche{
    font-weight: 500;
}
</style>