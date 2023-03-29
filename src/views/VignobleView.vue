<template>
   <div>
      <h1 class=" text-center text-2xl"> Guide des Vignobles </h1>
      <div class=" flex justify-center mt-3">
         <div class=" w-20 border"></div>
      </div>
      <div class="flex justify-center">
          <p class="mt-5 text-center">Souvent imité, jamais égalé, le vignoble français offre une diversité de climats, associés à une multitude de terroirs répartis sur 80 départements différents. Découvrez ce que les régions viticoles ont à vous offrir le temps d’un week-end ou d’un séjour oenologique sur la <RouterLink to="/route-des-vins" title="Route des vins">route des vins</RouterLink>.</p>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-11">
          <div v-for="destination in destinations">
              <div v-if="destination.descriptionDestination">
                  <SingleCardVignoble :title="destination.libelleDestination"
                                      :description="destination.descriptionDestination"
                                      image="vignoble.photosejour"
                                      :id="destination.idDestination" />
              </div>
              
          </div>
                        
      </div>
     
   </div>   
</template>
<script setup lang="ts"> import { onMounted, ref } from 'vue';
import SingleCardVignoble from '../components/SingleCardVignoble.vue';
import axios from 'axios';

//CONSTANTE
const destinations: any = ref(null);
const libelleDestination: any = ref(null);
const idDestination: any = ref(null);


//REQUETE AXIOS POUR RECUPERER LES DONNEES DE LA BDD
onMounted(async () => {
    axios.get('/api/Destination')
    .then((response) => {
        destinations.value = response.data;
        console.log(destinations.value[0].libelleDestination);
        libelleDestination.value = destinations.value.map((item: any) => item.libelleDestination);
    })
    .catch((error) => {
        console.log(error);
    });
});


</script>
<style scoped>
* {
   transition: all 250ms ease-in-out;
}
    a {
        color: rgb(228, 21, 114);
    }
</style>