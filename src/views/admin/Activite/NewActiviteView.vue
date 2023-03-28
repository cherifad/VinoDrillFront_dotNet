<script setup lang="ts">
import { onMounted, ref } from 'vue';
import apis from '../../../api';
import Tooltip from '../../../components/Tooltip.vue';


const societes: any = ref(null);
const form = ref({
    libelleActivite: '',
    descriptionActivite: '',
    idPartenaire: '',
    rueRdv: '',
    cpRdv: '',
    villeRdv: '',
    horaireActivite: '',
})

onMounted(() => {
    apis.getSociete().then((res) => {
        societes.value = res.data;
    });
});

const addNewActivite = (event) => {
    event.preventDefault();
    form.value.horaireActivite = new Date('01 Jan 1970 ' + form.value.horaireActivite + ':00');
    apis.newActivite(form.value).then((res) => {
        console.log(res);
    });
    form.value.libelleActivite= '';
    form.value.descriptionActivite= '';
    form.value.idPartenaire= '';
    form.value.rueRdv= '';
    form.value.cpRdv= '';
    form.value.villeRdv= '';
    form.value.horaireActivite= '';
}

</script>

<template>

    <div v-if="societes">
        <form @submit="addNewActivite">
            <br>
            <div class="flex justify-between">
                <div class="flex">
                    <label for="first_name" class="block mb-2 text-xl font-medium text-white">Détails sur l'activité</label>
                    <Tooltip text="Ci-dessous, ajoutez un nom et qu'une description à votre activité, choisissez également la société concerné."/>
                </div>
                <RouterLink to="/admin" class="cursor-pointer bg-rose hover:bg-rosedark text-white font-bold py-2 px-4 rounded" title="Cliquer ici pour revenir à la page précédente">
                Retour
                </RouterLink>
            </div>

            <div class="mb-6">
                <div class="flex">
                    <label for="libelleact" class="block mb-2 text-sm font-medium text-white">Nom de l'activité</label>
                   
                </div>
                <input v-model="form.libelleActivite" type="text" id="libelleact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose focus:border-2 outline-none block w-full p-2.5 " placeholder="Ballade en poney bourré au Bordeaux (cuvée 1982)" required>
            </div>            
            <div class="mb-6">
                <label for="descriptionact" class="block mb-2 text-sm font-medium text-white">Description</label>
                <textarea v-model="form.descriptionActivite" id="descriptionact" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose focus:border-rose focus:border-2 outline-none" placeholder="Essayez de tenir plus de 10 minutes sur ce cheval"></textarea>
            </div> 
            <div class="mb-6">
                
                <label for="countries" class="block mb-2 text-sm font-medium text-white">Societe</label>
                <select v-model="form.idPartenaire" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose focus:border-2 block w-full p-2.5 outline-none">
                    <option v-for="societe in societes" :selected="societe.idPartenaire == 21 ? true : false" :value="societe.idPartenaire">{{societe.nomPartenaire}} - {{ societe.villePartenaire }} ({{ societe.emailPartenaire }})</option>
                </select>
            </div> 
            <div class="flex">
                <label for="first_name" class="block mb-2 text-xl font-medium text-white">Détails sur le RDV</label>
                <Tooltip text="Ci-dessous, ajoutez un lieu et une horaire de rendez-vous."/>
            </div>
            
            <div class="flex gap-6 mb-6">
                 
                <div class="flex-1">
                    <label for="villeact" class="block mb-2 text-sm font-medium text-white">Ville</label>
                    <input v-model="form.villeRdv" type="villeact" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose focus:border-2 block w-full p-2.5 outline-none" placeholder="Annecy" required>
                </div>
                <div class="flex-1">
                    <label for="ruerdv" class="block mb-2 text-sm font-medium text-white">Rue</label>
                    <input v-model="form.rueRdv" type="text" id="ruerdv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ffocus:ring-rose focus:border-rose focus:border-2 block w-full p-2.5 outline-none" placeholder="Rue de L'arc en ciel" required>
                </div>
                <div class="flex-1">
                    <label for="cprdv" class="block mb-2 text-sm font-medium text-white">Code Postal</label>
                    <input v-model="form.cpRdv" type="text" id="cprdv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose focus:border-2 block w-full p-2.5 outline-none" placeholder="74100" required>
                </div>
                <div class="flex-1">
                    <label for="horaireactivite" class="block mb-2 text-sm font-medium text-white">Horaire</label>
                    <input v-model="form.horaireActivite" type="time" id="horaireactivite" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose focus:border-2 block w-full p-2.5 outline-none" placeholder="John" required>
                </div>
            </div>
            <button type="submit" class="text-white bg-rose hover:bg-rosedark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Envoyer</button>
        </form>
    </div>

</template>