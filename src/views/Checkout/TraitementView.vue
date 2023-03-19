<template>
    <div class="w-full h-full flex flex-col gap-3 items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/nxaaasqe.json"
          trigger="loop"
          colors="primary:#ffffff,secondary:#cb7169"
          style="width: 250px; height: 250px"
        >
        </lord-icon>
        <h1 id="passenger" class="text-2xl">Traitement de votre paiement en cours...</h1>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

authStore.getUser();

onMounted(async () => {
    await axios
      .get(`/api/Payment/checkout/success/${route.params.stripeId}/${route.params.jwt}`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      })
      .then((response: any) => {
        router.push(
          `/paiement/merci?session_id=${response.data.session_id}&refcommande=${response.data.idCommande}`
        );
      });    
});

</script>
