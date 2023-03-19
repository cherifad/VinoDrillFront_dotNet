<template>
  <header
    id="top"
    class="w-full absolute top-0 z-50 md:px-10 px-4 md:pt-10 pt-5"
  >
    <div class="flex w-full justify-between">
      <div class="flex items-center gap-8">
        <RouterLink to="/">
          <span class="brandName text-4xl font-semibold"
            >Vino<span style="color: #cb7169">Drill</span></span
          >
        </RouterLink>
        <nav>
          <ul
            id="menu"
            class="gap-4 xl:flex hidden text-2xl text-white border-l-2 border-zinc-800 pl-8"
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
            <li class="flex items-center">
              <RouterLink to="/aide" class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                  />
                </svg>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex text-2xl text-white items-center gap-3">
        <!-- cart icon with buble -->
        <RouterLink to="/mon-panier">
          <div
            v-if="panierStore"
            class="flex relative cursor-pointer px-2 py-3"
          >
            <lord-icon
              src="https://cdn.lordicon.com/cllunfud.json"
              trigger="hover"
              colors="outline:#ffffff,primary:#b4b4b4,secondary:#cb7169"
              style="width: 40px; height: 40px"
            >
            </lord-icon>
            <span
              class="inline-flex md:whitespace-nowrap absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full"
              >{{ panierStore.total }}</span
            >
          </div>
        </RouterLink>

        <!-- fav icon with buble, only displayed if the user is connected -->
        <RouterLink v-if="authStore.user && likesStore" to="/favoris">
          <div class="md:flex hidden cursor-pointer relative px-2 py-3">
            <lord-icon
              src="https://cdn.lordicon.com/hqrgkqvs.json"
              trigger="hover"
              colors="outline:#ffffff,primary:#cb7169,secondary:#ebe6ef"
              style="width: 40px; height: 40px"
            >
            </lord-icon>
            <span
              class="inline-flex absolute top-0 right-0 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-rose rounded-full"
              >{{ likesStore.total }}</span
            >
          </div>
        </RouterLink>

        <div v-if="!authStore.user">
          <RouterLink title="connexion" to="/connexion">
            <ion-icon
              name="log-in-outline"
              alt="connexion"
              class="text-3xl block md:hidden"
            ></ion-icon>
          </RouterLink>
          <RouterLink
            title="connexion"
            to="/connexion"
            class="hover:text-opacity-90 hidden md:block"
            >Connexion</RouterLink
          >
        </div>
        <div v-else>
          <RouterLink
            to="/mon-compte"
            class="hover:text-opacity-70 hidden md:flex gap-2 items-center"
            >Bonjour {{ authStore.user.nomClient }}
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
            v-if="authStore.user.prenomclient"
            id="passenger"
            to="/mon-compte"
            class="px-3 py-1 bg-white text-black justify-center rounded-full flex md:hidden gap-2 items-center"
          >
            {{ authStore.user.prenomclient.charAt(0) }}
          </RouterLink>
        </div>

        <!-- Mobile menu -->
        <div
          ref="menuHamburger"
          @click="mobileMenu = !mobileMenu"
          title="menu"
          class="flex xl:hidden cursor-pointer"
        >
          <ion-icon
            class="text-5xl menuHamburger"
            name="menu-outline"
          ></ion-icon>
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

    <div class="xl:hidden relative">
      <ul
        id="menu"
        class="gap-5 absolute top-0 w-full uppercase overflow-hidden z-50 rounded-md bg-rose flex flex-col justify-center text-lg text-white text-center"
        ref="mobMenHtml"
      >
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'Séjour'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/sejour">Séjour</RouterLink>
        </li>
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'Vignoble'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/vignoble">Vignoble</RouterLink>
        </li>
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'RouteDesVins'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/route-des-vins">Route des vins</RouterLink>
        </li>
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'CoffretCadeau'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/coffretCadeau">Cadeau</RouterLink>
        </li>
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'OffreEntreprise'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/offreEntreprise">Offre entreprise</RouterLink>
        </li>
        <li
          @click="mobileMenu = false"
          :class="
            useRoute().name == 'Contact'
              ? 'text-rouge underline decoration-rouge decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.5rem] focus:decoration-[0.5rem] hover:decoration-rouge focus:decoration-rouge'
              : 'text-white'
          "
        >
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { usePanierStore } from "../../stores/panier";
import { useLikesStore } from "../../stores/likes";
import config from "../../utils/config";
import { onMounted, ref, watch } from "vue";

const authStore = useAuthStore();
const panierStore = usePanierStore();
const likesStore = useLikesStore();

const mobileMenu = ref(false);
const mobMenHtml = ref();
const menuHamburger = ref();

watch(mobileMenu, (newVal, oldVal) => {
  if (newVal && mobMenHtml.value) {
    mobMenHtml.value.style.height = "350px";
  } else if (mobMenHtml.value) {
    mobMenHtml.value.style.height = "0";
  }
});

onMounted(() => {
  window.addEventListener("click", (e) => {
    // check if not click on menuHamburger
    if (!e.target.classList.contains("menuHamburger")) {
      if (mobMenHtml.value) {
        if (mobMenHtml.value.style.height != "0") {
          mobileMenu.value = false;
        }
      }
    }
  });

  // add window click event lister, if mobMenHtml is open and click outside, close it
  window.addEventListener("locationchange", function () {
    mobileMenu.value = false;
  });

  mobMenHtml.value.style.height = "0";
});
</script>

<style scoped>
* {
  transition: all 0.3s ease;
}

.top {
  font-family: "Poppins", sans-serif;
}

header li {
  cursor: pointer;
  font-weight: 500;
  white-space: nowrap;
}

header li:hover {
  color: #cb7169 !important;
}
.pass {
  font-family: "PassengerDisplay", sans-serif;
}
</style>
