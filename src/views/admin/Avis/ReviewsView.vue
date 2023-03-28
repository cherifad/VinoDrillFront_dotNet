<template>
    <div>
        <div class="flex mb-5 justify-end">
            <RouterLink to="/admin/sejours" class="cursor-pointer bg-rose hover:bg-rosedark text-white font-bold py-2 px-4 rounded " title="Cliquer ici pour revenir à la page précédente">
            Retour
            </RouterLink>
        </div>
        <div v-if="reviews" class="flex flex-col gap-6">
            <div v-for="review in reviews" :key="review.idAvis" >
                <SingleComment :id="review.idAvis" :idSejour="review.idSejour" :idClient="review.idClient" :reponse="review.reponse_admin" :comment="review.commentaire" :note="review.note" :date="review.dateAvis" :title="review.titreAvis"/>
                <Popup title="Réponse" :show="toShow" @update:show="toShow = $event" @submit="reponse(review.idAvis)" v-auto-animate>
                    <div v-if="!review.reponse_admin" class="mt-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-white">Réponse</label>
                        <textarea v-model="commentaire" id="message" rows="4" class="block p-2.5 md:w-[500px] min-w-[300px] text-sm text-gray-900 bg-white rounded-lg outline-none border-none resize-none"></textarea>
                    </div>
                </Popup>
                <button v-if="!review.reponse_admin" @click="toShow = true" class="bg-rose hover:bg-rosedark text-white font-bold mt-2 py-2 px-4 rounded">
                    Répondre
                </button>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apis from '../../../api';
import SingleComment from '../../../components/SingleComment.vue';
import axios from 'axios';
import {useAuthStore} from '../../../stores/auth';
import Popup from '../../../components/Popup.vue';

const userId= useAuthStore();
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const reviews: any = ref(null);
const commentaire  = ref("");
const toShow = ref(false);

const getReviews = async () => {
    const response = await apis.getReviews(id);
    reviews.value = response.data;
}

async function reponse(idavis) {
    await userId.getUser()
    axios.post('/api/ReponseAvis',{
        idAvis:idavis,
        commentaire:commentaire.value,
        idSejour:id,
        idClient:userId.user.idClient
    }).then((response) => {
        getReviews();
    })
}

onMounted(() => {
    getReviews();
});

</script>