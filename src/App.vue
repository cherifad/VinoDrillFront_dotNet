<script setup>
import { RouterLink, RouterView, useRoute, onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from './stores/auth';
import Cookies from './components/Cookie.vue';
import { usePanierStore } from './stores/panier';
import { useLikesStore } from './stores/likes';
import config from "./utils/config";
import Footer from "./components/Nav/Footer.vue";
import Header from "./components/Nav/Header.vue";

const authStore = useAuthStore();
const panierStore = usePanierStore();
const likesStore = useLikesStore();
const adminMenu = ref();
const admin = ref(false);
const route = useRoute();

// for back to top button
const showBackToTop = ref(true);

const mobileMenu = ref(false);
const mobMenHtml = ref();
const menuHamburger = ref();

watch(mobileMenu, (newVal, oldVal) => {
  if(newVal && mobMenHtml.value) {
    mobMenHtml.value.style.height = "350px";
  } else if(mobMenHtml.value) {
    mobMenHtml.value.style.height = "0";
  }
});

const height = ref(0);

onMounted(async () => {
  window.onscroll = function() {scrollFunction()};

  useRoute().path.includes("admin") ? admin.value = true : admin.value = false;
  const header = document.querySelector("header");


  // prevent bug when calculating header height
  const menu = document.querySelector("#menu");
  if(window.innerWidth < 1280) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }

  // add window click event lister, if mobMenHtml is open and click outside, close it
  // window.addEventListener("click", (e) => {
  //   // check if not click on menuHamburger
  //   if(!e.target.classList.contains("menuHamburger")) {
  //     if(mobMenHtml.value) {
  //       if(mobMenHtml.value.style.height != "0") {
  //         mobileMenu.value = false;
  //       }
  //     }
  //   } 
  // });

  // mobMenHtml.value.style.height = "0";

  // get header height
  const headerHeight = header?.clientHeight;

  height.value = headerHeight + 20;
  admin.value ? height.value += adminMenu.value.clientHeight : height.value += 0;
  
  // get header height on resize
  window.addEventListener("resize", () => {
    if(window.innerWidth < 1280) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
    if(window.innerWidth > 1024) {
      mobileMenu.value = false;
    }

    const headerHeight = header?.clientHeight;
    height.value = headerHeight + 35;
    // admin.value ? height.value += adminMenu.value?.clientHeight : '';
  });

  window.addEventListener('locationchange', function () {
    mobileMenu.value = false;
  });  

  try {
    await authStore.getUser();
  }
  catch(err) { 
  }

});

watch(route, (newRoute, oldRoute) => {
  if (newRoute.path.includes("admin")) {
    admin.value = true;
  } else {
    admin.value = false;
  }  
  window.addEventListener('domcontentloaded', () => {
    const event = new Event('resize');
    window.dispatchEvent(event);
  });
});

function scrollFunction() {
  // get window height
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  if (document.body.scrollTop > windowHeight / 2  || document.documentElement.scrollTop > windowHeight / 2) {
    showBackToTop.value = true;
  } else {
    showBackToTop.value = false;
  }
}

</script>

<template>
  
  <Header />
  
  <RouterView v-if="height" :style="{'padding-top': + height +'px'}" class="lg:px-10 px-2" v-slot="{ Component }">    
    <Component :is="Component" />    
  </RouterView>
  
  <Cookies />
  
  <Footer />
  
  <transition name="fade">
    <a v-if="showBackToTop" v-auto-animate href="#top" class="fixed text-white text-3xl bottom-4 right-4 p-2 cursor-pointer bg-rose rounded-full shadow-xl z-50 hover:-translate-y-2">
      <ion-icon class="hover:-translate-y-1" name="arrow-up"></ion-icon>
    </a>
  </transition>

</template>

<style scoped>
* {
  scroll-behavior: smooth;
  transition: all 0.3s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
