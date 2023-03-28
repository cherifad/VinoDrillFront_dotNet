<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="/admin" class="cursor-pointer bg-rose hover:bg-rosedark text-white font-bold py-2 px-4 rounded " title="Cliquer ici pour revenir à la page précédente">
            Retour
            </RouterLink>
        </div>
        <table v-if="hebergements" class="w-full mt-5">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hebergement in hebergements" :key="hebergement.idHebergement">
                    <td>{{ hebergement.idHebergement }}</td>
                    <td>{{ hebergement.libelleHebergement }}</td>
                    <td>{{ hebergement.descriptionHebergement }}</td>
                    <td>
                        <div class="flex gap-3 justify-center">
                            <router-link to="/admin/HebergementModif">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Modifier
                                </button>
                            </router-link>
                            <button @click="fakeDelete()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Supprimer
                            </button>                           
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <router-link to="/admin/hebergements/new">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Ajouter un hébergement
                            </button>
                        </router-link>
                    </td>
                </tr>
            </tfoot>         
        </table>

        <div v-else>
            <LoadComponent />
        </div>       
    </div>
</template>

<script setup lang="ts">
import apis from '../../../api';
import { onMounted, ref } from 'vue';
import LoadComponent from '../../../components/LoadComponent.vue';
import Popup from '../../../components/Popup.vue';

const hebergements: any = ref([]);

const submitHandler = () => {
    alert('Mise en promotion en cours...');
    alert('Mise en promotion terminée !');
}

const getHebergements = async () => {
    const response = await apis.getHebergements();
    hebergements.value = response.data;
    hebergements.value.sort((a: any, b: any) => a.idHebergement - b.idHebergement);
}

const fakeDelete = () => {
    alert('Suppression en cours...');
    alert('Suppression terminée !');
}

// get hebergement from hebergements array by id
const getSejourById = (id: number) => {
    return hebergements.value.find((hebergement: any) => hebergement.idHebergement === id);
}

onMounted(getHebergements);
</script>

<style scoped>
* {
    transition: all 0.3s ease;
}

td {
    padding: .5rem;
    border: 2px solid #ccc;
}

th {
    padding: .5rem;
    border: 2px solid #ccc;
    background-color: #ccc;
    color: black;
    font-weight: bold;
}
</style>