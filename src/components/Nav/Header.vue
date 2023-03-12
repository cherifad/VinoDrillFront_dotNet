<template>
  <header id="top" class="w-full absolute top-0 z-50 px-10 pt-10">
    <div class="flex w-full justify-between">
      <div class="flex items-center gap-8">
        <RouterLink to="/">
          <span class="brandName text-4xl font-semibold"
            >Vino<span style="color: #cb7169">Drill</span></span
          >
        </RouterLink>
        <ul
          id="menu"
          class="gap-4 lg:block hidden text-2xl text-white border-l-2 border-zinc-800 pl-8"
        >
          <li
            :class="
              useRoute().name == 'Séjour'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/sejour">Séjour</RouterLink>
          </li>
          <li
            :class="
              useRoute().name == 'Vignoble'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/vignoble">Vignoble</RouterLink>
          </li>
          <li
            :class="
              useRoute().name == 'RouteDesVins'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/route-des-vins">Route des vins</RouterLink>
          </li>
          <li
            :class="
              useRoute().name == 'CoffretCadeau'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/coffretCadeau">Cadeau</RouterLink>
          </li>
          <li
            :class="
              useRoute().name == 'OffreEntreprise'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/offreEntreprise">Offre entreprise</RouterLink>
          </li>
          <li
            :class="
              useRoute().name == 'Contact'
                ? 'text-rose underline decoration-rose decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rose focus:decoration-rose'
                : 'text-white'
            "
          >
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
            </svg>
            Aide

          </li>
        </ul>
      </div>
      <div class="flex text-2xl text-white items-center gap-3">
        <!-- cart icon with buble -->
        <RouterLink to="/mon-panier">
          <div
            v-if="panierStore"
            class="flex relative cursor-pointer px-2 py-3"
          >
            <ion-icon class="text-3xl" name="cart-outline"></ion-icon>
            <span
              class="inline-flex md:whitespace-nowrap absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full"
              >{{ panierStore.total }}</span
            >
          </div>
        </RouterLink>

        <!-- fav icon with buble, only displayed if the user is connected -->
        <RouterLink to="/favoris">
          <div
            v-if="authStore.user && likesStore"
            class="flex cursor-pointer relative px-2 py-3"
          >
            <ion-icon class="text-3xl" name="heart"></ion-icon>
            <span
              class="inline-flex absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full"
              >{{ likesStore.total }}</span
            >
          </div>
        </RouterLink>

        <RouterLink
          v-if="!authStore.user"
          to="/connexion"
          class="hover:text-opacity-90"
          >Connexion</RouterLink
        >
        <div v-else>
          <RouterLink
            to="/mon-compte"
            class="hover:text-opacity-70 hidden md:flex gap-2 items-center"
            >Bonjour {{ authStore.user.prenomclient }}
            <svg
              v-if="config.admins.includes(authStore.user.emailclient)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-rose"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </RouterLink>
          <RouterLink
            id="passenger"
            to="/mon-compte"
            class="px-3 py-1 bg-white text-black justify-center rounded-full flex md:hidden gap-2 items-center"
          >
            {{ authStore.user.prenomclient.charAt(0) }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Admin Menu
    <div class="mt-6" ref="adminMenu" v-if="useRoute().path.includes('admin')">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <ion-icon class="text-2xl" name="location-outline"></ion-icon>
          <span class="text-white">VinoDrill</span>
         </div>
      </div>

    </div> -->
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { usePanierStore } from "../../stores/panier";
import { useLikesStore } from "../../stores/likes";
import config from "../../utils/config";

const authStore: any = useAuthStore();
const panierStore: any = usePanierStore();
const likesStore: any = useLikesStore();
</script>
