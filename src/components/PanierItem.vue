<template>
  <div class="h-full justify-between p-5 border-2 rounded-2xl border-rose">
    <div class="flex relative justify-between gap-3 lg:gap-1 w-full shadow-md shadow-rose rounded-xl lg:p-5 p-2 mb-5">
      <div class="flex-col w-1/3 items-center flex">
        <h1 class="font-bold text-xl w-fit mb-1 hidden lg:block">Article</h1>
        <div class="w-14 border mb-2 hidden lg:block"></div>
        <img :src="image" :alt="title + 'image'" class="imageSize rounded-xl" />
      </div>
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
        <div class="flex flex-col lg:items-center">
          <h1 class="font-bold lg:text-xl text-sm w-fit mb-1 hidden lg:block">Description</h1>
          <div class="w-20 border mb-2 hidden lg:block"></div>
          <h1 class="lg:text-xl lg:pt-5 lg:text-center">{{ title }}</h1>
          <p v-if="days" class="lg:text-xl flex items-center pt-2">
            <ion-icon name="time-outline" class="mr-2"></ion-icon
            >{{ days }} jour<span v-if="days > 1">s</span
            ><span v-if="nights >= 1">
              / {{ nights }} nuit<span v-if="nights > 1">s</span></span
            >
          </p>
          
        </div>
        <div class="flex lg:flex-col lg:gap-0 gap-2 items-center">
          <div class="flex-col items-center hidden lg:block">
            <h1 class="font-bold text-xl mb-1">Prix Unitaire</h1>
            <div class="w-20 border mb-2"></div>
          </div>
          <p class=" opacity-80 text-sm">Prix unitaire</p>
          <h1 class="lg:text-xl lg:pt-9">{{ price }}€</h1>
        </div>
        <div class="flex-col lg:items-center hidden lg:block">
          <div>
            <h1 class="font-bold text-xl w-fit mb-1">Quantité</h1>
            <div class="border mb-2"></div>
          </div>
          <p class=" opacity-80 text-sm">Quantité</p>
          <h1 class="text-2xl lg:pt-8">1</h1>
        </div>
        <div class="flex lg:flex-col lg:gap-0 gap-2 items-center">
          <h1 class="font-bold text-xl hidden lg:block w-fit mb-1">Total</h1>
          <div class="w-10 hidden lg:block border mb-2"></div>
          <p class=" opacity-80 text-sm">Prix total</p>
          <h1 class="lg:text-2xl lg:pt-8">{{ calculTotal().toFixed(2) }}€</h1>
        </div>
        <div class="flex flex-col lg:items-center absolute lg:static bottom-1 right-1">
          <h1 class="font-bold hidden lg:block text-xl w-fit mb-1">Supprimer</h1>
          <div class="w-20 border mb-2 hidden lg:block"></div>
          <ion-icon
            @click="disabled ? null : remove()"
            class="text-4xl lg:pt-8"
            :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
            name="trash-bin-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
    <div class="flex 2xl:flex-row flex-col gap-5 justify-evenly">
      <div class="flex flex-1 shadow-sm shadow-rose rounded-xl p-5 flex-col flex-wrap items-center justify-center">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-xl w-fit mb-1">Période du séjour</h1>
          <div class="w-32 border mb-2"></div>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="mb-1">Début</h1>
          <div class="w-12 border mb-2"></div>
          <input :disabled="disabled" v-model="form.date" id="dateDebut" type="date" class="rounded border-2 p-1 text-rouge border-rose focus:border-rouge outline-none" max="12-02-1992" placeholder="Date">
        </div>
      </div>
      <div class="flex flex-1 shadow-sm shadow-rose rounded-xl p-5 flex-wrap flex-col items-center">
          <div class="flex flex-col items-center">
            <h1 class="font-bold text-xl w-fit mb-1">Informations</h1>
            <div class="w-24 border mb-2"></div>
          </div>
          <div class="flex items-center flex-wrap gap-2 w-full justify-evenly">
            <div class="flex flex-col items-center">
              <h1 class="mb-1">Adultes</h1>
              <div class="w-12 border mb-2"></div>
              <p v-if="disabled">
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">-</button>
                {{ form.adults }}
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">+</button>
              </p>
              <p v-else>
                <button @click="form.adults != 1 ? form.adults-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.adults }}
                <button @click="form.adults++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class=" mb-1">Enfants</h1>
              <div class="w-12 border mb-2"></div>
              <p v-if="disabled">
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">-</button>
                {{ form.children }}
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">+</button>
              </p>
              <p v-else>
                <button @click="form.children != 0 ? form.children-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.children }}
                <button @click="form.children++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class=" mb-1">Chambres</h1>
              <div class="w-12 border mb-2"></div>
              <p v-if="disabled">
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">-</button>
                {{ form.rooms }}
                <button id="button" class="font-bold cursor-not-allowed py-1 px-2 rounded">+</button>
              </p>
              <p v-else>
                <button @click="form.rooms != 1 ? form.rooms-- : null" id="button" class="font-bold py-1 px-2 rounded">-</button>
                {{ form.rooms }}
                <button @click="form.rooms++" id="button" class="font-bold py-1 px-2 rounded">+</button>
              </p>
            </div>
            <div class="flex flex-col items-center">
              <h1 class="mb-1 cursor-pointer" :class="disabled ? 'opacity-70 cursor-not-allowed' : ''" @click="disabled ? null : reset()">Mettre à zéro</h1>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { usePanierStore } from "../stores/panier";
import config from "../utils/config";

const panierStore = usePanierStore();
const exampleDate = new Date();
const prixTotal = ref(0);

// majoration (en %)
const majEnfant = config.majEnfant;
const majChambre = config.majChambre;
const majAdulte = config.majAdulte;

//total
const emit = defineEmits(['total']);

onMounted(() => {
  const datePickerId = document.getElementById("dateDebut") as HTMLInputElement;
  datePickerId.min = new Date().toISOString().split("T")[0];
  // calculTotal();
});

const props =
  defineProps<{
    title: string;
    nights: any;
    days: any;
    image: string;
    price: number;
    id: number;
    disabled: boolean;
  }>();

const getCurrentCartSejour = () => {
  const cart = panierStore.sejours;
  const sejour = cart.find((item) =>
    item.idsejour ? item.idsejour === props.id : false
  );
  return sejour;
};

const form = ref({
  adults: getCurrentCartSejour()?.nbAdultes || 0,
  children: getCurrentCartSejour()?.nbEnfants || 0,
  rooms: getCurrentCartSejour()?.nbChambres || 0,
  date: getCurrentCartSejour()?.date || "",
})

const remove = () => {
  if (confirm("Voulez-vous vraiment supprimer ce séjour ?")) {
    panierStore.removeSejour(props.id);
    window.location.reload();
  }
};

const updateStore = () => {
  panierStore.addRemAdultes(props.id, form.value.adults);    
  panierStore.addRemEnfants(props.id, form.value.children);
  panierStore.addRemChambres(props.id, form.value.rooms);
  panierStore.addRemDate(props.id, form.value.date);
};

onBeforeRouteLeave(async (to, from) => {
  updateStore();
});

onBeforeUnmount(() => {
  updateStore();
});

// watch works directly on a ref
watch(form, async () => {
  calculTotal();
})

const reset = () => {
  form.value.adults = 1;
  form.value.children = 0;
  form.value.rooms = 1;
  form.value.date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
}

const calculTotal = () => {
  const total = props.price;
  let totalAdultes = 0;
  let totalChambres = 0;

  if(form.value.adults > 1) {
    totalAdultes = (props.price * majAdulte) / 100;
  }

  if(form.value.rooms > 1) {
    totalChambres = (props.price * majChambre) / 100;
  }

  const totalEnfants = (props.price * majEnfant) / 100;
  const totalFinal =
    total +
    totalEnfants * form.value.children +
    totalChambres * (form.value.rooms - 1) +
    totalAdultes * (form.value.adults - 1);
  
  
  emit('total', totalFinal - prixTotal.value);
  prixTotal.value = totalFinal;

  updateStore();

  return totalFinal;
};
</script>
<style scoped>
#button {
  background-color: #cb7169;
  justify-content: center;
  margin: 2px;
}

.top {
  margin-top: 65px;
} 
</style>
