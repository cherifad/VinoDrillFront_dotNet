<template>
    <div v-if="sejours" class="">
        <div class="grid gap-10 grid-cols-4">
            <button class="fixed bottom-2 left-2 z-50 bg-white p-5 text-black lg:hidden block" @click="showMenu = !showMenu">Toggle Menu</button>
            <div :class="{ 'show-menu': showMenu }" class="bg-#350a06  z-50 hidden lg:block border-rose border-2 sticky top-5 text-2xl font-bold rounded-md shadow-sm p-7 h-fit">
                Filtres
                <div>
                    <!-- <Input @filter="(i) => getFilteredData(i)" columnName="rien" :data="libelleDestination" name="Destinations" placeholder="Recherchez ici"/> -->
                        
                    <SejourFilter :onFilterTheme="(i) => getThemeFilter(i)" :onFilterCatParticipant="(i) => getCatParticipantFilter(i)" />
                </div>
            </div>
            <div class="col-span-4 lg:col-span-3">
                <div class="flex items-center">
                    <SejourSearch id="search" class="flex-1" v-on:filter-destination="(i) => getDestinationFilter(i)" :toHide="toHide"  :data="sejours" placeholder="Destinations, séjour,.."/>
                    <span class="pl-12 text-2xl fond-bold w-fit">{{ sejourcount }} sejour<span v-if="sejourcount > 0">s</span>
                        trouvé<span v-if="sejourcount > 0">s</span></span>
                </div>
                <div class="" v-auto-animate>
                    <div class="pt-12 grid gap-10 md:grid-cols-2 grid-cols-1 justify-center" v-if="!filteredData">
                        <router-link v-for="filter in sejours" :key="filter.idSejour" :id="filter.idSejour"
                            :to="{ name: 'SingleSejour', params: { id: filter.idSejour, slug: slugify(filter.titreSejour) } }">
                            <SingleCardSejour :key="filter.idSejour" :title="filter.titreSejour"
                                :description="filter.descriptionSejour" :nights="filter.nbNuit" :days="filter.nbJour"
                                :image="filter.photoSejour" :price="filter.prixSejour" :id="filter.idSejour"
                                :libelleTemps="filter.libelleTemps" :notemoyenne="filter.noteMoyenne" />
                        </router-link>
                    </div>
                    <div v-auto-animate class="pt-12 grid gap-10 grid-cols-2 justify-center" v-else-if="sejourcount > 0">
                        <router-link v-for="filter in filteredData" :key="filter.idSejour" :id="filter.idSejour"
                            :to="{ name: 'SingleSejour', params: { id: filter.idSejour, slug: slugify(filter.titreSejour) } }">
                            <SingleCardSejour :key="filter.idSejour" :title="filter.titreSejour"
                                :description="filter.descriptionSejour" :nights="filter.nbNuit" :days="filter.nbJour"
                                :image="filter.photoSejour" :price="filter.prixSejour" :id="filter.idSejour"
                                :libelleTemps="filter.libelleTemps" :notemoyenne="filter.noteMoyenne" />
                        </router-link>
                    </div>
                     <div v-auto-animate class="pt-12 grid gap-10 grid-cols-2 justify-center" v-else>
                        <h1>Aucun résultat !</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <LoadComponent />
    </div>


</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import axios from 'axios';
import { RouterLink } from "vue-router";
import LoadComponent from '../components/LoadComponent.vue';
import SejourSearch from '../components/SejourSearch.vue';
import SejourFilter from '../components/SejourFilter.vue';

const sejours = ref(null);
const sejourcount = ref(null);
const filteredData = ref(null);

const theme = ref('');
const destination = ref('');
const catParticipant = ref('');

const toHide = ref(false);

const showMenu = ref(false);

function slugify(string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}


onMounted(async () => {
    axios.get('/api/Sejour')
        .then((response) => {
            sejours.value = response.data.reverse();
            sejourcount.value = response.data.length;
            
        })
        .catch((error) => {
            console.log(error);
        });

        // document.getElementById("search").addEventListener("blur", function() {
        //     toHide.value = true;
        // });
});

const getFilteredData = () => {
    axios.get('/api/Sejour?q=t' + theme.value + destination.value + catParticipant.value)
        .then((response) => {
            filteredData.value = response.data;
            console.log(filteredData.value)
            sejourcount.value = Object.keys(filteredData.value).length;
        })
        .catch((error) => {
            console.log(error);
        });
};

const getThemeFilter = (i) => {
    theme.value = i;
    getFilteredData();
}

const getDestinationFilter = (i) => {
    destination.value = i;
    getFilteredData();
}

const getCatParticipantFilter = (i) => {
    catParticipant.value = i;
    getFilteredData();
}
</script>
  
<style scoped>
  .right-0 {
    transform: translateX(100%);
  }

  .show-menu {
    transform: translateX(0%);
  }
</style>