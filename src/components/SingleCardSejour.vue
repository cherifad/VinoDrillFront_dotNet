<template>
    <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
        <div v-if="notemoyenne" class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-40 top-3 right-3">
            {{ Math.round(notemoyenne * 10) / 10 }}  
        </div>
        <div v-if="!imgLoaded" role="status" class="flex items-center justify-center lg:h-96 h-56 w-full rounded-lg animate-pulse bg-rose">
            <div class="flex items-center justify-center w-full h-48 rounded sm:w-96 bg-rose">
                <ion-icon class="w-12 h-12 text-gray-200" name="wine"></ion-icon>
            </div>
        </div>
        <img v-else :src="image" :alt="title + ' image'" :title="title + ' image'" class="rounded-xl max-h-96 w-auto shadow-md">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <p v-if="days" class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>{{ days }} jour<span v-if="days > 1">s</span><span v-if="nights >= 1"> / {{ nights }} nuit<span v-if="nights > 1">s</span></span></p>
        <p v-else class="text-2xl">{{ libelleTemps }}</p>
        <p class="text-2xl">{{ price }}€ / <span class=" text-rose">Pers</span></p>
    </div>
</template>

<script setup lang="ts">import { onMounted, ref } from 'vue';
import Tooltip from './Tooltip.vue';

const imgLoaded = ref(false);

const props = defineProps<{
    title: string;
    description: string;
    nights: any;
    days: any;
    image: string;
    price: number;
    id: number;
    libelleTemps: any;
    notemoyenne: any;
    }>(); 


// function to wait for image to be fully loaded
function loadImage(url: string) {
    // if image is not online, use a default image
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = resolve;
        image.onerror = reject;
    });
}


onMounted(async () => {
    await loadImage(props.image);
    imgLoaded.value = true;
});

// const realImage: any = ref(null);

// function isImageUrlOnline(url: string) {
//   try {
//     const response: any = fetch(url, { 
//         headers: {
//             Origin: '*',
//         },
//     });
//     if (response.ok && (response.headers.get('Content-Type') as string).startsWith('image/')) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     return false;
//   }
// }

// onMounted(() => {
//     if (isImageUrlOnline(props.image)) {
//         realImage.value = props.image;
//     } else {
//         realImage.value = '/src/assets/img/vineyard-ga92acf920_1920.jpg';
//     }
// });
</script>

<style scoped>

</style>