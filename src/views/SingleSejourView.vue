<template>
    <div v-if="!loading" class="min-h-screen">
        <div class="">
            <div class="lg:grid lg:px-0 flex px-2 flex-col gap-4 lg:grid-cols-4">
                <div class="lg:gap-4 flex-1 gap-2 flex items-center lg:flex-row flex-col lg:col-span-4 xl:col-span-3">
                    <img :src="checkOnlineImage(sejour.photoSejour) ? sejour.photoSejour : '/src/assets/img/vineyard-ga92acf920_1920.jpg'" :alt="sejour.titreSejour + ' image'" class="rounded-lg w-fit shadow-lg lg:max-w-lg">
                    <div class="flex mt-6 lg:hidden justify-between items-center gap-5">
                        <h1 class="text-3xl" id="passenger">{{ sejour.titreSejour }}</h1>
                        <div>
                            <p>A partir de</p>
                            <span class="text-xl" id="passenger">{{ sejour.prixSejour }}€/pers</span>
                        </div>
                    </div>
                    <div class="flex-1 w-full text-center lg:text-left text-2xl font-normal">
                        Quelques informations sur le séjour
                        <ul>
                            <li v-if="sejour.nbJour" class="text-lg">Nombre de journée(s) : <span></span>{{ sejour.nbJour }}</li>
                            <li v-if="sejour.nbNuit" class="text-lg">Nombre de nuit(s) : <span></span>{{ sejour.nbNuit }}</li>
                            <li v-if="sejour.libelleTemps" class="text-lg">Durée : <span></span>{{ sejour.libelleTemps }}</li>
                            <li class="text-lg">Lieu : {{ sejour.destinationSejourNavigation.libelleDestination }}</li>
                            <li class="text-lg">Thème : {{ sejour.themeSejourNavigation.libelleTheme }}</li>
                        </ul>
                        <div class="flex gap-1 flex-wrap items-center justify-center lg:justify-start" v-auto-animate>                            
                            <a href="#etape" class="p-2 bg-white text-black block w-fit rounded-lg hover:-translate-y-2 mt-5">Voir les étapes</a>
                            <a @click="!getCurrentCartSejour() ? panierStore.addSejour(sejour.idSejour, sejour.prixSejour) : addedToCart = true" class="p-2 bg-white select-none cursor-pointer text-black block w-fit rounded-lg hover:-translate-y-2 mt-5">
                                Ajouter au panier <br>
                                <div v-if="getCurrentCartSejour()" class="flex justify-evenly">
                                    <span v-if="!addedToCart" class="text-sm">Déjà dans le panier</span>
                                    <span v-else class="text-sm">Dans le panier !</span>
                                </div>
                            </a>
                            <Tooltip text="Pour ajouter une date à un séjour il faut le faire depuis le panier" />                            
                            <ButtonLikeSejour class="mt-5" :idsejour="sejour.idSejour"/>
                            <Tooltip text="Pour voir les séjours ajoutés aux favoris il faut être connecté"/>                                
                        </div>
                    </div>
                </div>
                <div class="hidden xl:flex">
                    <ReviewResume v-if="rating" :ratingaverage="rating" :ratingcount="ratingcount" :ratingcountarray="ratingcountarray"/>
                </div>
            </div>
            <div class="justify-between items-center hidden lg:flex">
                <h1 class="mt-12 text-5xl" id="passenger">{{ sejour.titreSejour }}</h1>
                <div>
                    <p>A partir de</p>
                    <span class="mt-12 text-5xl" id="passenger">{{ sejour.prixSejour }}€/pers</span>
                </div>
            </div>
            <p id="passenger" class="mt-6 text-3xl text-center lg:text-left">Description</p>
            <p class="w-full text-xl mt-6 text-center lg:text-left"> {{ sejour.descriptionSejour }} </p>
        </div>
        <div>
            
        </div>
        
        <div id="etape" class="flex flex-col gap-3 mb-8">
            <h1 class="mt-5 lg:text-3xl text-xl md:text-2xl font-bold text-center lg:text-left">Voir les {{ etapes.length }} étapes du séjour</h1>
            <div v-for="etape in etapes" :key="etape.idEtape">
                <SingleEtape class="mt-3" :titre="etape.titreEtape" :description="etape.descriptionEtape" :img="etape.photoEtape"/>
                <div id="hebergement" class="flex flex-col w-full items-end before:">
                    <h1 class="mt-5 mb-2 w-11/12 text-2xl font-bold">Hébergement</h1>
                    <SingleHebergement class=" w-11/12" :key="etape.hebergementEtapeNavigation.idHebergement" :titre="etape.hebergementEtapeNavigation.libelleHebergement" :description="etape.hebergementEtapeNavigation.descriptionHebergement" img="etape.hebergementEtapeNavigation.hotel.photopartenaire"/>
                </div>
            </div>
        </div>
            <h1 class="mt-5 lg:text-3xl text-xl md:text-2xl font-bold">Chateaux et domaines</h1>
            <div v-if="visites" class="mt-11">
                <SingleVisite v-for="visite in visites"
                    :key="visite.idvisite"
                    :idvisite="visite.idvisite"
                    :idtypevisite="visite.idtypevisite"
                    :idpartenaire="visite.idpartenaire"
                    :libellevisite="visite.libellevisite"
                    :descriptionvisite="visite.descriptionvisite"
                    :horairevisite="visite.horairevisite"/>             
            </div>
        <div v-if="reviews.length > 0" id="avis" class="flex flex-col gap-3 mb-8">
            <h1 class="mt-5 lg:text-3xl text-xl md:text-2xl font-bold">Voir les {{ reviews.length }} avis</h1>
            <SingleComment v-for="review in reviews" :estreponse="review.estReponse" :idSejour="review.idSejour" :idClient="review.idClient" :reponse="review.reponse_admin" :key="review.idAvis" :id="review.idAvis" :note="review.note" :comment="review.commentaire" :date="review.dateAvis" :title="review.titreAvis"/>
        </div>

        <div id="related" v-if="relatedSejours">
            <h1 class="my-5 lg:text-3xl text-xl md:text-2xl font-bold">Voir les {{ relatedSejours.length }} séjours similaires</h1>
            <swiper
                slidesPerView="auto"
                :spaceBetween="30"
                :pagination="{
                clickable: true,
                }"
                class="mySwiper"
                :freeMode="true"
            >
                <swiper-slide v-for="sejour in relatedSejours" class="px-3 mb-3 lg:w-1/3" :key="sejour.idSejour">
                    <router-link class="px-3 mb-3 lg:w-1/3" :id="sejour.idSejour" :to="{name: 'SingleSejour', params: {id: sejour.idSejour, slug: slugify(sejour.titreSejour)}}">
                            <SingleCardSejour
                                :key="sejour.idSejour"
                                :title="sejour.titreSejour"
                                :description="sejour.descriptionSejour"
                                :nights="sejour.nbNuit"
                                :days="sejour.nbJour"
                                :image="sejour.photoSejour"
                                :price="sejour.prixSejour"
                                :id="sejour.idSejour"
                                :libelleTemps="sejour.libelleTemps"
                                :notemoyenne="sejour.noteMoyenne"
                            />
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>

        <div id="viewed" v-if="alreadyViewed">
            <h1 class="my-5 lg:text-3xl text-xl md:text-2xl font-bold">Voir les séjours visités</h1>
            <swiper
                slidesPerView="auto"
                :centeredSlides="false"
                :spaceBetween="30"
                :grabCursor="true"
                :pagination="{
                clickable: true,
                }"
                class="mySwiper"
            >
                <swiper-slide v-for="sejour in alreadyViewed" class="px-3 mb-3 lg:w-1/3" :key="sejour.idSejour">
                    <router-link class="px-3 mb-3 lg:w-1/3" :id="sejour.idSejour" :to="{name: 'SingleSejour', params: {id: sejour.idSejour, slug: slugify(sejour.titreSejour)}}">
                        <SingleCardSejour
                            :key="sejour.idSejour"
                            :title="sejour.titreSejour"
                            :description="sejour.descriptionSejour"
                            :nights="sejour.nbNuit"
                            :days="sejour.nbJour"
                            :image="sejour.photoSejour"
                            :price="sejour.prixSejour"
                            :id="sejour.idSejour"
                            :libelleTemps="sejour.libelleTemps"
                            :notemoyenne="sejour.noteMoyenne"
                        />
                    </router-link>
                </swiper-slide>
            </swiper>            
        </div>
    </div>
    <div v-else>
        <LoadComponent />
    </div>

</template>

<script setup lang="ts">
// get url params
import { useRoute, RouterLink, onBeforeRouteUpdate } from 'vue-router';
import { onMounted, ref } from 'vue';
import LoadComponent from '../components/LoadComponent.vue';
import axios from 'axios';
import ReviewResume from '../components/ReviewResume.vue';
import SingleComment from '../components/SingleComment.vue';
import SingleEtape from '../components/SingleEtape.vue';
import SingleHebergement from '../components/SingleHebergement.vue';
import { usePanierStore } from '../stores/panier';
import { useViewedStore } from '../stores/viewed';
import { useLikesStore } from '../stores/likes';
import SingleCardSejour from '../components/SingleCardSejour.vue';
import SingleVisite from '../components/SingleVisite.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ButtonLikeSejour from '../components/ButtonLikeSejour.vue';
import Tooltip from '../components/Tooltip.vue';

const route = useRoute();
const panierStore = usePanierStore();
const viewedStore = useViewedStore();
const likesStore = useLikesStore();
const addedToCart = ref(false);
const addedToLikes = ref(false);

const getCurrentCartSejour = () => {
    const cart = panierStore.sejours;
    console.log(cart)
    const sejour: any = cart.find((item: any) => item.idSejour ? item.idSejour.toString() === route.params.id : false);
    return sejour;
}

const checkOnlineImage = (url: string) => {
    const img = new Image();
    img.src = url;
    return img.height !== 0;
}

const nompartenaire: any = ref(null);
const visites: any = ref(null);

onMounted(async () => {
    axios.get('/api/Visite')
    .then((response) => {
        visites.value = response.data;
    })
    .catch((error) => {
        console.log(error);
    });
});


// get slug from url
const props = defineProps(['idSejour']);
const slug = route.params.slug;

// current sejour
const sejour: any = ref(null);
const ratingcount: any = ref(null);
const ratingcountarray: any = ref(null);
const rating: any = ref(null);
const reviews: any = ref(null);
const etapes: any = ref(null);
const domaines: any = ref(null);
const loading = ref(true);

// related sejours
const relatedSejours: any = ref(null);

//already viewed
const alreadyViewed: any = ref(null);

onMounted(async () => {
    getData(route.params.id);
});

onBeforeRouteUpdate(async (to, from) => {
    // prevent page reload if slug is the same
    if (to.params.slug === from.params.slug) {
        return;
    }
    getData(to.params.id);
});

function lisibilite_nombre(nbr)
{
	var nombre = ''+nbr;
	var retour = '';
	var count=0;
	for(var i=nombre.length-1 ; i>=0 ; i--)
	{
		if(count!=0 && count % 3 == 0)
			retour = nombre[i]+' '+retour ;
		else
			retour = nombre[i]+retour ;
		count++;
	}
	return retour;
}

const getData = async (id) => {
    console.log(id);
    viewedStore.addSejour(id);
    loading.value = true;

    //get the current sejour
    axios.get('/api/Sejour/' + id + '?includaAvis=true&includeEtape=true&includeDestination=true&includeTheme=true&includeHebergement=true')
    .then((response) => {
        sejour.value = response.data;
        loading.value = false;

        reviewAnalytics(response.data['avisSejourNavigation']);
        reviews.value = response.data['avisSejourNavigation'].reverse();
        // sort reviews by date
        reviews.value.sort((a: any, b: any) => {
            return new Date(b.dateAvis).getTime() - new Date(a.dateAvis).getTime();
        });
        etapes.value = response.data['etapeSejourNavigation'].reverse();

        // get the realted sejour if the current is loaded
        axios.get('/api/Sejour?idsDestination=' + sejour.value.idDestination + '&limit=5&idSejour=' + id)
        .then((response) => {
            relatedSejours.value = response.data;

            // get the sejour already visited by the user
            axios.get(`/api/Sejour?idsSejour=${viewedStore.idsejours.join(',')}`)
            .then((response) => {
                alreadyViewed.value = response.data;
            })
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .then(() => {
        // scroll to top with animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        loading.value = false;
    })
    .catch((error) => {
        console.log(error);
    });
}

// generate slug from title
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

function reviewAnalytics(review: any) {
    ratingcount.value = review.length;
    /* get number of each rating */
    let rating1 = 0;
    let rating2 = 0;
    let rating3 = 0;
    let rating4 = 0;
    let rating5 = 0;
    let ratingaverage = 0;
    for (let i = 0; i < review.length; i++) {
        ratingaverage += review[i].note;
        switch (review[i].note) {
            case 1:
                rating1++;
                break;
            case 2:
                rating2++;
                break;
            case 3:
                rating3++;
                break;
            case 4:
                rating4++;
                break;
            case 5:
                rating5++;
                break;
        }
    }
    rating.value = ratingFormat(ratingaverage / review.length);
    ratingcountarray.value = [rating1, rating2, rating3, rating4, rating5];
    ratingcount.value = review.length;
}

function ratingFormat(x) {
    return Math.round((x + Number.EPSILON) * 10) / 10;
}
</script>

<style scoped>
*{
    transition: all 0.3s ease;
}

#hebergement::before{
  content: "";
  position: absolute;
  width: 0;
  height: 80%;
  border-radius: 100px;
  border-right: 5px solid hsl(228, 33%, 97%);
  top: 10px;
  left: 5%;
}

#visite::before{
  content: "";
  position: absolute;
  width: 0;
  height: 80%;
  border-radius: 100px;
  border-right: 5px solid hsl(228, 33%, 97%);
  top: 10px;
  left: 5%;
}

.swiper {
  width: inherit;
  height: 100%;
}

</style>