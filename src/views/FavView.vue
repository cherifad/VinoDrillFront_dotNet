<template>
    <div class="min-h-fit mb-10">
        <div v-if="mesFavoris && lenghtFavoris > 0" class="lg:px-14 py-5">
            <div class="flex flex-wrap justify-center">
                <div v-for="sejour in mesFavoris" :key="sejour.idSejour" class="md:px-2 py-2 lg:w-1/3 md:w-1/2 mb-20" >
                    <RouterLink :to="{ name: 'SingleSejour', params: { id: sejour.idSejour, slug: slugify(sejour.titreSejour) }}">
                        <SingleCardSejour :title="sejour.titreSejour"
                                    :description="sejour.descriptionSejour" :nights="sejour.nbNuit" :days="sejour.nbJour"
                                    :image="sejour.photoSejour" :price="sejour.prixSejour" :id="sejour.idSejour"
                                    :libelleTemps="sejour.libelleTemps" :notemoyenne="sejour.noteMoyenne" />
                    </RouterLink>
                    <div class="flex justify-center h-fit" title="Supprimer">
                        <span @click="removeSejour(sejour.idSejour)" class="cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">Supprimer</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-2xl w-full font-bold text-center mt-10">
            Vous n'avez aucun séjour en favoris.
        </div>
    </div>    
</template>

<script setup lang="ts">
import { useLikesStore } from '../stores/likes';
import { onMounted, ref } from 'vue';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import axios from 'axios';
import { slugify } from '../utils/functions';

const likesStore = useLikesStore();
const mesFavoris: any = ref([]);
const lenghtFavoris = likesStore.total;

likesStore.sejours.forEach(element => {
    if (element.idsejour) {
        console.log("element", element.idsejour)
        axios.get('/api/sejour/' + element.idsejour)
        .then((response) => {
            mesFavoris.value.push(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    };
});

const removeSejour = (id: number) => {
    if (confirm('Voulez-vous vraiment supprimer ce séjour de vos favoris ?')) {
        likesStore.removeSejour(id);
        window.location.reload();
    }
}
</script>