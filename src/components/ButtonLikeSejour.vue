<template>
  <div class="heart-btn" @click="ToggleLike()">
    <div class="content" :class="liked ? 'heart-active' : ''">
      <span class="heart" :class="liked ? 'heart-active' : ''"></span>
      <span class="text select-none" :class="liked ? 'heart-active' : ''">{{ liked ? '+1' : 'Ajouter aux favoris' }}</span>
      <span class="numb" :class="liked ? 'heart-active' : ''"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useLikesStore } from '../stores/likes';

const likesStore = useLikesStore();

const props = defineProps<{
  idsejour: any;
}>();

// parcourir l'objet sejour pour voir si l'id du sejour est dans le tableau
// si oui, alors on affiche le coeur plein
// si non, alors on affiche le coeur vide
const liked = ref(false);
if(likesStore.sejours) {
  likesStore.sejours.forEach(element => {
    if (element.idsejour == props.idsejour) {
      liked.value = true;
    }
  });
}

const ToggleLike = () => {
  if(liked.value) {
    likesStore.removeSejour(props.idsejour);
    liked.value = false;
  } else {
    likesStore.addSejour(props.idsejour);
    liked.value = true;
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

.content{
  padding: 13px 16px;
  display: flex;
  border: 2px solid #eae2e1;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
}
.content.heart-active{
  border-color: #f9b9c4;
  background: #fbd0d8;
}
.heart{
  position: absolute;
  background: url('../assets/img/like.png') no-repeat;
  background-position: left;
  background-size: 2900%;
  height: 90px;
  width: 90px;
  top: 50%;
  left: 25px;
  transform: translate(-50%,-50%);
}
.text{
  font-size: 21px;
  margin-left: 30px;
  color: white;
  font-family: 'Montserrat',sans-serif;
}
.numb:before{
  font-size: 21px;
  margin-left: 7px;
  font-weight: 600;
  color: #9C9496;
  font-family: sans-serif;
}
.numb.heart-active:before{
  color: #000;
}
.text.heart-active{
  color: #000;
}
.heart.heart-active{
  animation: animate .8s steps(28) 1;
  background-position: right;
}
@keyframes animate {
  0%{
    background-position: left;
  }
  100%{
    background-position: right;
  }
}
</style>