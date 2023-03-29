<template>
  <!-- <div class=" bg-white rounded-xl p-2">
    <img src="../assets/img/pexels-tim-mossholder-3895185.png" alt="404 NOT FOUND" class=" w-80 ">
    <h1 class="text-black text-xl">{{title}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Gravida neque convallis a cras semper.</p>
  </div> -->
<div class=" flex justify-center px-3 relative">
    <div class="flex flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out shadow-2xl shadow-black rounded-lg pb-4">
        <img src="../assets/img/pexels-tim-mossholder-3895185.png" :alt="title + ' image'" class="rounded-lg ">
        <h1 class="text-2xl font-bold pl-4 ">{{ title }}</h1>
        <p class="pl-4 mb-10">{{description}}</p>
        <div class=" flex mr-2 absolute bottom-2 right-2">
            <router-link :to="'/vignoble/' + slugify(title)">
                <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl">
                    Découvrir le vignoble
                </button>
            </router-link>

        </div>
        
    </div>    
</div>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps<{
    title: string;
    description: string;
    image: string;
    id: number;
    }>(); 
let button = document.querySelectorAll('.button');


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
</script>
<style scoped>
* {
    transition: all 250ms ease-in-out;
}
</style>