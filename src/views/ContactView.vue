<template>
    <div>
        <h1 class=" text-center text-2xl "> Contactez-nous </h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <h2 class=" flex text-2xl justify-center mt-10 mb-10 text-rose " id="title">Une question ? Besoin d'un renseignement ? Notre service client est à votre écoute !</h2>
        <div class="flex flex-col formContact justify-center px-5 text-">
            <div>
                <div class="mt-4">
                    <h3 class="oui">Objet</h3>
                    <select v-model="form.object" class="rounded-full p-2 w-full champContact mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none" name="object" id="object" required>
                        <option value="" disabled selected>Selectionnez un destinataire</option>
                        <option value="service">Contacter le Service Client</option>
                        <option value="dpo">Contacter le DPO</option>
                        <option value="webmaster">Contacter le webmaster</option>
                        <option value="devis">Demander un devis</option>
                    </select >
                </div>
                <div class="mt-4">
                    <h3>Nom</h3>
                    <input v-model="form.lastname" class="rounded-full p-2 w-full champContact mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none" placeholder="Entrez votre nom" type="text" id="lastname" name="lastname" required >
                </div>
                <div class="mt-4">
                    <h3>Prénom</h3>
                    <input v-model="form.firstname" class="rounded-full p-2 w-full champContact mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none" placeholder="Entrez votre prénom" type="text" id="firstname" name="firstname" required >
                </div>


                <div class="mt-4">
                    <h3>Adresse mail</h3>
                    <input v-model="form.mail" class="rounded-full p-2 w-full champContact mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none" placeholder="Entrez votre e-mail" type="text" id="mail" name="mail" required >
                </div>

                <div class="mt-4">
                    <h3>Référence commande</h3>
                    <input v-model="form.code" class="rounded-full p-2 w-full champContact mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none" placeholder="Entrez la référence (optionnel)" type="text" id="code" name="code" >
                </div>
            </div>
            <div class="flex-1">
                <div class="mt-4 w-full">
                    <h3>Message</h3>
                    <textarea required v-model="form.message" class="rounded-3xl messageBox p-2 mt-2 border-2 text-rouge border-rose focus:border-rouge outline-none w-full" placeholder="Entrez votre message" type="text" id="message" name="message" ></textarea>
                </div>
                <div class="mt-4">
                    <input type="file" id="file" class="rounded-full" mulitple>
                </div>
            </div>
        </div>
        <div class="mt-12 px-5">
            <div>
                <p class="text-gray-400">En soumettant ce formulaire, vous acceptez que VinoDrill mémorise et utilise vos données personnelles dans les conditions décrites dans la <span class="text-sky-500 underline "><RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></span>.</p>
            </div>            
            <div>
                <div class="mt-2">
                    <label class="inline-flex items-center ">
                    <input v-model="checked" true-value="true" false-value="false" type="checkbox" class="mt-4 w-6 h-6 check"  />
                    <span class="ml-2 mt-4">J’ai pris connaissance de la <span class="text-sky-500 underline "><RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink></span> et j'autorise VinoDrill à m'envoyer des informations.</span>{{form.check}}
                    </label>
                </div>
            </div>
            <div class="mt-4 justify-center flex">
                <button @click="toShow = true; form.lastname && form.firstname && form.object && form.mail && form.message && checked ? goodValidation() : badValidation();" class="bg-rose w-fit px-12 rounded-full text-white p-2">Envoyer</button>
            </div>
        </div>
        <Popup :title="isValid ? 'Message envoyé !' : 'Erreur !'" :show="toShow" @update:show="toShow = $event" @submit="() => toShow = false" texteBouton="OK" v-auto-animate>
                <div v-if="isValid">
                    <p>Votre message a été envoyé avec succès ! <br>
                    Nous vous contacterons dans les plus bref délais</p>
                </div>
                <div v-else>
                    <p>Votre message possède une erreur ! <br>
                    Veuillez remplir les champs obligatoires et/ou cocher la case d'acceptation de notre politique.</p>
                </div>
        </Popup>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Popup from '../components/Popup.vue';

var isValid = ref(false)
var toShow = ref(false)
var checked = ref(false)
var file = ref(null)

const form = ref({
    object: '',
    lastname: '',
    firstname: '',
    mail: '',
    code: '',
    message: '',
})

function goodValidation(){
    console.log(file);
    console.log(file.value);
    isValid.value = true;
    form.value.object = '';
    form.value.lastname = '';
    form.value.firstname = '';
    form.value.mail = '';
    form.value.code = '';
    form.value.message = '';
    file.value = null;
    checked.value = false;
}

function badValidation(){
    isValid.value = false;
}

</script>

<style>
.messageBox{
    height: 300px;
}

input[type=file] {
    width: 350px;
    margin-top:15px;
    border-radius: 15px;
    max-width: 100%;
    color: #350A06;
    padding: 5px;
    background: #CB7169;
}

input[type=file]::file-selector-button {
    border: none;
    background: #350A06;
    padding: 10px 20px;
    border-radius: 9999px;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

@media (min-width: 1050px) {
    .formContact {
        flex-direction: row !important;
        gap: 80px !important;
    }
    .champContact {
        width: 24rem !important;
    }
}

.check{
    clip-path: circle(46% at 50% 50%);
}

.popup{
    width: 900px;
}

</style>
