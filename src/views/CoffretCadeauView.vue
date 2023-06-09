<template>
  <div id="corps" class="padCorp">
    <h1 class="text-center text-2xl">Coffret Cadeau Vin</h1>
    <div class="flex justify-center mt-3">
      <div class="w-20 border"></div>
    </div>
    <p class="text-center mt-10">
      Vous êtes à la recherche d’un
      <span class="font-bold"
        >cadeau original et convivial autour du vin et de l'oenologie</span
      >, faites plaisir à vos proches le temps d’une escapade viticole. <br />
      Offrez-leur des moments d’exception dans les vignobles français ! <br />
    </p>
    <p class="text-center mb-6 mt-5">
      Ils pourront sélectionner la destination et les dates de leur séjour, soit
      directement sur le site soit en prenant contact avec notre équipe par
      téléphone ou mail. <br />
      Nos coffrets et chèques cadeaux oenologiques sont valables sur tous les
      séjours (avec possibilité de personnaliser son séjour) et toutes les
      destinations, durant une période de 18 mois.
    </p>
    <div class="flex gap-6">
      <input
        type="text"
        id="coupon"
        class="w-4/5 h-12 p-3 mb-6 text-black outline-none rounded-md border-rose border-4"
        placeholder="Utiliser un code cadeau"
        v-model="coupon"
      />
      <button id="button1CadeauPasser" @click="checkCoupon" class="bg-rose flex items-center justify-center hover:bg-transparent w-1/5 text-white border-2 border-rose font-bold h-12 rounded">
        <span class="hidden lg:block">Passer à l'étape suivante</span>
        <ion-icon name="arrow-forward-outline" class="block lg:hidden"></ion-icon>
      </button>
    </div>
    <div v-if="error[0]" class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">
      {{ error[1] }} <RouterLink to="/connexion" v-if="error[1].includes('connecté')" class="text-red-800 ml-3 font-bold">Se connecter</RouterLink>
    </div>
    <div class="flex lg:flex-row flex-col justify-center gap-6">
      <div id="bg-image" style="background-image: url('/src/assets/img/pexels-roland-dumke-943700.jpg')" class="lg:h-96 h-fit lg:w-1/2 rounded-lg">
        <div id="box" class="w-full h-full p-7 rounded-lg flex flex-col justify-between">
          <h1 id="passenger" class="text-5xl mb-3 font-medium">Offrir un séjour</h1>
          <p class="text-lg">Pour cela rien de plus simple, confectionner votre panier avec le ou les séjours que vous souhaitez offrir et cliquez ensuite sur "Offrir"</p>
          <div class="flex flex-col md:flex-row mt-6 justify-evenly gap-6">
            <div class="text-center flex flex-col items-center text-lg">
              Déjà fait votre choix ? <br />
              <button id="button2CadeauPasser" @click="checkCheckout" class="bg-rose mt-3 hover:bg-transparent w-fit text-white border-2 border-rose font-bold block py-3 px-10 rounded">
                Passer à l'étape suivante
              </button>
            </div>
            <div class="text-center flex flex-col items-center text-lg">
              Encore indécis ? <br />
              <RouterLink to="/sejour" class="bg-rose mt-3 hover:bg-transparent w-fit text-white border-2 border-rose font-bold block py-3 px-10 rounded">
                Voir les séjours
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div id="bg-image" style="background-image: url('/src/assets/img/vineyard-ga92acf920_1920.jpg')" class="lg:h-96 h-fit lg:w-1/2 rounded-lg">
        <div id="box" class="w-full h-full p-7 rounded-lg flex flex-col justify-between">
          <h1 id="passenger" class="text-5xl mb-3 font-medium">Offrir un chèque cadeau</h1>
          <p class="text-lg">Selectioner le montant que vous souhaitez offrir</p>
          <div class="mt-6">
            <div class="text-center text-lg mb-3 flex md:gap-3 gap-1 flex-wrap justify-evenly">
              <div v-for="key in Object.keys(config.cheques)" :class="selected == key ? 'opacity-100 bg-rose': 'opacity-75 bg-transparent'" class="p-3 text-sm font-bold border-2 select-none cursor-pointer border-rose rounded-md flex-1" @click="selected = key">{{ config.cheques[key] }}€</div>
            </div>
            <div class="text-center flex justify-center md:justify-end text-lg">
              <button id="button3CadeauPasser" @click="offriCheque"  class="bg-rose mt-3 hover:bg-transparent w-fit text-white border-2 border-rose font-bold block py-3 px-10 rounded">
                Passer à l'étape suivante
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import config from "../utils/config";
import { useRouter } from "vue-router";
import { useCouponStore } from "../stores/bonCommande";
import axios from "axios";
import { useAuthStore } from "../stores/auth";

const coupon = ref("");
const couponStore = useCouponStore();
const authStore = useAuthStore();
const error: any = ref([false, ""]);

const checkCoupon = async () => {
  console.log(coupon.value);
  await axios.post("/api/coupon/check", { coupon: coupon.value }).then((response) => {
    console.log(response.data);
    if(response.data.reservations) {
      console.log(response.data.reservations);
      couponStore.setCoupon(coupon.value);
    } else {
      alert("Le coupon n'est pas valide");
    }
  });
};

const selected: any = ref(null);
const router = useRouter();

const offriCheque = () => {
  if(!authStore.isAuthenticated) {
    error.value = [true, "Vous devez être connecté pour offrir un chèque cadeau"];
  } 
  else if(!selected.value) alert("Veuillez selectionner un montant");
  else {
    router.push({ name: "Cheque", params: { ref: selected.value } });
  }
};

const checkCheckout = () => {
  if(!authStore.isAuthenticated) {
    error.value = [true, "Vous devez être connecté pour offrir un ou des séjour(s)"];
  } else {
    router.push("/paiement/validation");
  }
};
</script>

<style scoped>
* {
  transition: all 250ms ease;  
}

#bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#bg-image:hover{
  /*background-size: 200%;*/
}

#box {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
