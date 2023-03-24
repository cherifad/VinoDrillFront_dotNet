<template>
  <div
    v-if="!allowCookie.accepte"
    class="fixed bottom-2 left-2 z-50 bg-marrouge shadow-sm shadow-rose lg:w-1/3 w-full flex flex-col gap-3 items-center p-4 rounded-lg"
  >
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      id="cookie"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      class="icon flat-line w-12 h-12"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="secondary"
          d="M18.12,9.78a3,3,0,0,1-3.9-3.9A3,3,0,0,1,12,3a9,9,0,1,0,9,9A3,3,0,0,1,18.12,9.78Z"
          style="fill: #cb7169; stroke-width: 2"
        ></path>
        <line
          id="primary-upstroke"
          x1="9.05"
          y1="9.5"
          x2="8.95"
          y2="9.5"
          style="
            fill: none;
            stroke: #ffffff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2.5;
          "
        ></line>
        <line
          id="primary-upstroke-2"
          data-name="primary-upstroke"
          x1="9.55"
          y1="15"
          x2="9.45"
          y2="15"
          style="
            fill: none;
            stroke: #ffffff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2.5;
          "
        ></line>
        <line
          id="primary-upstroke-3"
          data-name="primary-upstroke"
          x1="14.55"
          y1="14"
          x2="14.45"
          y2="14"
          style="
            fill: none;
            stroke: #ffffff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2.5;
          "
        ></line>
        <path
          id="primary"
          d="M18.12,9.78a3,3,0,0,1-3.9-3.9A3,3,0,0,1,12,3a9,9,0,1,0,9,9A3,3,0,0,1,18.12,9.78Z"
          style="
            fill: none;
            stroke: #ffffff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2;
          "
        ></path>
      </g>
    </svg>
    <p class="text-center p-3">
      Notre site utilise des
      <span class="font-bold underline">cookies</span> indispensables à son bon
      fonctionnement, optimiser ses performances techniques et personnaliser
      l'affichage de nos pages. Pour obtenir davantage d'information
    </p>
    <div class="flex gap-2">
      <button
        @click="allowCookie.allowCookie(true)"
        class="px-6 py-4 bg-rose rounded-l-3xl rounded-r-lg text-white outline-none border-2 border-rose hover:bg-transparent hover:text-rose hover:font-bold transition-all hover:p-5"
      >
        Accepter
      </button>
      <button
        @click="details = true"
        class="px-6 py-4 bg-rose rounded-r-3xl rounded-l-lg text-white outline-none border-2 border-rose hover:bg-transparent hover:text-rose hover:font-bold transition-all hover:p-5"
      >
        Détails
      </button>
    </div>
    <Popup title="Détails" :show="details" @update:show="details = $event" texte-bouton="Fermer" @submit="() => details = false">
      <div class="lg:w-1/2 w-1/12">
        <p class="text-xl underline underline-offset-8 mb-4">Cookies nécessaires</p>
        <p>
          Il s'agit des cookies nécessaires au fonctionnement de notre site et aux
          services essentiels qui en font partie intégrante. Ils vous permettent
          d'utiliser les principales fonctionnalités de notre site par exemple
          commander un séjour, accéder à votre compte… Ces cookies ne relèvent pas
          d’un choix et ne peuvent pas être refusés.
        </p>
        <p class="text-xl underline-offset-8 mt-4">
          Plus d'informations sur les cookies sur le site de la CNIL, en cliquant
          <a
            href="https://www.cnil.fr/fr/site-web-cookies-et-autres-traceurs"
            target="_blank"
            class="underline"
            >ici</a
          >.
        </p>
      </div>
    </Popup>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCookieStore } from "../stores/cookie";
import Popup from "./Popup.vue";

const allowCookie = useCookieStore();

const details = ref(false);
</script>

<style scoped></style>
