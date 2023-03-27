<template>
<div v-if="authStore.user">
    <div class="flex lg:flex-row gap-4 flex-col lg:justify-between items-center">
        <h1 class="text-2xl font-bold flex items-center gap-2">Bonjour {{ authStore.user.nomClient }}
            <svg v-if="config.admins.includes(authStore.user.emailclient)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-rose">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </h1>
        <div @click="authStore.logout()" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
            <ion-icon name="log-out-outline"></ion-icon>
            Se déconnecter
        </div>
    </div>

    <div class="flex mt-5 mb-6 w-full justify-left flex-wrap">
        <ProfileItem 
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/pin-outline.svg"
            title="Mes adresses"
            @click="choice = 'address'"
            :selected="choice == 'address' ? true : false"
        />
        <ProfileItem
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/people-outline.svg"
            title="Mes informations"
            @click="choice = 'me'"
            :selected="choice == 'me' ? true : false"
        />
        <ProfileItem
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/people-outline.svg"
            title="Mes commandes"
            @click="choice = 'commandes'"
            :selected="choice == 'commandes' ? true : false"
        /> 
        <ProfileItem
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/list-outline.svg"
            title="Mes réservations"
            @click="choice = 'reservations'"
            :selected="choice == 'reservations' ? true : false"
        /> 
        <ProfileItem
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/list-outline.svg"
            title="Mes moyens de paiements"
            @click="choice = 'paiements'"
            :selected="choice == 'paiements' ? true : false"
        />
        <ProfileItem
            class="lg:w-1/3 sm:w-1/2 w-full"
            image="/src/assets/img/list-outline.svg"
            title="Mes avis"
            @click="choice = 'avis'"
            :selected="choice == 'avis' ? true : false"
        />
    </div>

    <AddAdressForm v-if="!closeAddAdress" v-on:toClose="(i) => setCloseAddAdress(i)" :idclient="authStore.user.idClient" />
    
    <div id="content" v-auto-animate class="pt-5">
        <!-- Adresses -->
        <div class="flex mt-3 flex-wrap"  v-if="choice == 'address'">
            <div class="w-full flex gap-3 lg:justify-start justify-between items-center">
                <h1 class="text-2xl font-bold">Mes adresses</h1>
                <div @click="closeAddAdress = false" class="flex cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 p-3 bg-rose border-rose border-2 hover:bg-transparent font-semibold">
                    <ion-icon name="add-outline"></ion-icon>
                    Ajouter une adresse
                </div>
            </div>
            <div class="w-full flex flex-wrap" v-if="userData.adresseClientNavigation && userData.adresseClientNavigation.length > 0">
                <div class="flex-1 px-3 py-3" v-for="adresse in userData.adresseClientNavigation" :key="adresse.idAdresse">
                    <AddresseVue :canEdit="true" :id="adresse.idAdresse" :libelleAdress="adresse.libelleAdresse" :rueAdresse="adresse.rueAdresse" :villeAdresse="adresse.villeAdresse" :codePostalAdresse="adresse.codePostalAdresse" :paysAdresse="adresse.paysAdresse" />
                </div>
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune adresse enregistrée
            </div>
            
        </div>

        <!-- Informations personnelles -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'me'">
            <InfoPerso v-on:loading="(loadingStatus) => loading = loadingStatus" :token="authStore.token" :nom="authStore.user.nomClient" :prenom="authStore.user.prenomClient" :email="authStore.user.emailClient" :dateDeNaissance="authStore.user.dateNaissanceClient" :sexe="authStore.user.sexeClient" :id="authStore.user.idClient" :motDePasse="authStore.user.motDePasse" />
        </div>

        <!-- Mes commandes -->
        <div class="mt-3 mb-3"  v-if="choice == 'commandes'">
            <div v-if="userData.commandeClientNavigation.length > 0" class="">
                <div class="flex gap-6">
                    <a v-if="commande_terminee.length > 0 && commande_en_cours.length > 0" href="#commande-terminee" class="flex flex-1 justify-center hover:bg-transparent cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 px-5 py-3 bg-rose border-rose border-2 font-semibold">
                        Commandes terminées
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    <a v-if="commande_terminee.length > 0 && commande_en_cours.length > 0" href="#commande-encours" class="flex flex-1 justify-center hover:bg-transparent cursor-pointer select-none rounded-md ease-linear duration-300 items-center gap-3 px-5 py-3 bg-rose border-rose border-2 font-semibold">
                        Commandes en cours
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                <div v-if="commande_en_cours.length > 0" id="commande-encours" class="flex pt-6 mt-3 mb-3 flex-wrap">                    
                    <h1 class="xl:w-1/3 lg:w-1/2 w-full text-2xl flex items-center justify-center px-3 py-3 border-b-8 border-r-8 border-t-2 border-l-2 border-rose rounded-lg">Commandes en cours</h1>
                    <div class="xl:w-1/3 lg:w-1/2 w-full px-3 py-3" v-for="commande in commande_en_cours" :key="commande.refCommande">
                        <Commande :estPassee="estPassee(commande.reservationCommandeNavigation)" :cheminFacture="commande.cheminFacture" :estCheque="commande.estCheque" :refcommande="commande.refCommande" :datecommande="commande.dateCommande" :message="commande.message" :prixcommande="commande.prixCommande" :quantite="commande.quantite" :idclient="commande.idClient" :libellepaiement ="commande.paiementCommandeNavigation? commande.paiementCommandeNavigation.libellePaiement : 'CB'"/>
                    </div>
                </div>
                <div v-if="commande_terminee.length > 0" id="commande-terminee" class="flex pt-6 mt-3 mb-3 flex-wrap">                    
                    <h1 class="xl:w-1/3 lg:w-1/2 w-full text-2xl flex items-center justify-center px-3 py-3 border-b-8 border-r-8 border-t-2 border-l-2 border-rose rounded-lg">Commandes Terminée</h1>
                    <div class="xl:w-1/3 lg:w-1/2 w-full px-3 py-3" v-for="commande in commande_terminee" :key="commande.refCommande">
                        <Commande :estPassee="estPassee(commande.reservationCommandeNavigation)" :cheminFacture="commande.cheminFacture" :estCheque="commande.estCheque" :refcommande="commande.refCommande" :datecommande="commande.dateCommande" :message="commande.message" :prixcommande="commande.prixCommande" :quantite="commande.quantite" :idclient="commande.idClient" :libellepaiement ="commande.paiementCommandeNavigation? commande.paiementCommandeNavigation.libellePaiement : 'CB'"/>
                    </div>
                </div>
            </div>
             <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune commande.
            </div>
        </div>

        <!-- Mes réservations -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'reservations'">
            <div class="flex w-full mt-3 mb-3 flex-wrap" v-if="userData.commandeClientNavigation.length > 0">
                <Reservation class="px-3 xl:w-1/3 lg:w-1/2 w-full py-3" v-for="reservation in reservations" :coupon="reservation.estCadeau ? reservation.estCadeau : null" :idclient="authStore.user.idClient" :key="reservation.refCommande + reservation.idSejour" :refcommande="reservation.refCommande" :datedebutreservation="reservation.dateDebutReservation" :estcadeau="reservation.estCadeau" :idsejour="reservation.idSejour" :nbadulte="reservation.nbAdulte" :nbchambre="reservation.nbChambre" :nbenfant="reservation.nbEnfant"/>
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucune réservation.
            </div>
        </div>

        <!-- Mes paiements -->
        <div class="flex mt-3 mb-3 flex-wrap"  v-if="choice == 'paiements'">
            <div v-if="userData.paiementClientNavigation.length > 0">
                <Paiement    />
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucun moyen de paiement enregistré.
            </div>
        </div>


        <!-- Mes avis -->
        <div class="flex mt-3 mb-3 flex-wrap flex-col gap-3"  v-if="choice == 'avis'">
            <div v-if="userData.avisClientNavigation.length > 0 && userData.avisClientNavigation" v-for="avi in userData.avisClientNavigation" class="w-full">
                Avis sur le séjour n°{{ avi.idSejour }}
                <RouterLink :to="{ name: 'SingleSejour', params: { id: avi.idSejour, slug: 'ref=avis' } }" class="text-rose underline">Voir le séjour</RouterLink>
                <SingleComment class="w-full" :estreponse="false" :reponse="null" :key="avi.idAvis" :id="avi.idAvis" :idSejour="avi.idSejour" :idClient="avi.idClient" :note="avi.note" :date="avi.dateAvis" :title="avi.titreAvis" :comment="avi.commentaire" />
            </div>
            <div v-else class="text-2xl w-full font-bold text-center mt-10">
                Vous n'avez aucun avis.
            </div>
            <!-- <AddAvis idavis="3" /> -->
        </div>      
        
        <!-- Loading -->
        <div v-if="loading" id="loading" class="fixed z-50 w-screen h-screen backdrop-blur top-0 right-0">
            <LoadComponent />
        </div>
    </div>    
</div>

<div v-else>
    <LoadComponent />
</div>
    
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { onMounted, ref } from 'vue';
import ProfileItem from '../components/ProfileItem.vue';
import LoadComponent from '../components/LoadComponent.vue';
import Commande from '../components/Account/Commande.vue';
import AddresseVue from '../components/Account/Addresse.vue';
import InfoPerso from '../components/Account/InfoPerso.vue';
import Reservation from '../components/Account/Reservation.vue';
import Paiement from '../components/Account/Paiement.vue';
import Avis from '../components/Account/Avis.vue';
import AddAdressForm from '../components/Account/AddAdressForm.vue';
import SingleComment from '../components/SingleComment.vue';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import axios from 'axios';
import config from '../utils/config';
import AddAvis from '../components/AddAvis.vue';
import { useLikesStore } from '../stores/likes';

const likesStore = useLikesStore();

const loading = ref(false);

const authStore: any = useAuthStore();
const choice: any = ref("me");
const addAdressForm: any = ref(false);
const closeAddAdress: any = ref(true);
const mesFavories: any = ref([]);
const avis: any = ref(null);
const reservations: any = ref([]);
const commande_terminee: any = ref([]);
const commande_en_cours: any = ref([]);

// read get params from url
const urlParams = new URLSearchParams(window.location.search);
const choiceUrl = urlParams.get('choice');
if (choiceUrl) {
    choice.value = choiceUrl;
}

const userData: any = ref([]);

onMounted(async () => {
    await authStore.getUser();
    // await axios.get('/api/avis?client=' + authStore.user.idclient).then((response) => {
    //     avis.value = response.data['data'];
    // });

    await axios.get('/api/User/GetUserData?id=' + authStore.user.idClient, {
        headers: {
            'Authorization': 'Bearer ' + authStore.token
        }
    })
    .then((response) => {
        console.log(response.data);
        userData.value = response.data;
        userData.value.commandeClientNavigation.forEach((commande: any) => {
            commande.reservationCommandeNavigation.forEach((single: any) => {
                reservations.value.push(single);
            });
        });
        const commandes = userData.value.commandeClientNavigation;
        commandes.forEach((commande: any) => {
            if(estPassee(commande.reservationCommandeNavigation)) {
                commande_terminee.value.push(commande);
            } else {
                commande_en_cours.value.push(commande);
            }
        });
    });

});

const setCloseAddAdress = (i) => {
    closeAddAdress.value = i
}

const estPassee = (reservations) => {
    var response = true;
    const dateActuelle = new Date();
    reservations.forEach((single: any) => {
        const dateDebut = new Date(single.dateDebutReservation);
        if(dateDebut > dateActuelle) {
            response = false;
        }
    });
    return response;
}
</script>

<style scoped>
#loading{
    background: rgba(53, 10, 6, 0.5);
}
</style>