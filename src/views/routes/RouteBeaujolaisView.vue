<template>
    <div>
        <h1 class=" text-center text-2xl"> La route des vins Beaujolais</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <ul class=" list list-disc list-inside mt-5">
                <li><a href="#partir">Partir sur la route des vins du Beaujolais</a></li>
                <li><a href="#weekend">Week-ends sur la route des vins du Beaujolais</a></li>
                <li><a href="#itineraires">Les itinéraires dans le Beaujolais</a></li>
                <li><a href="#plus">En savoir plus</a></li>
                <li><a href="#sillonner">Sillonner les routes des vins de France</a></li>
            </ul>
        </div>

        <div id="partir" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Partir sur la route des vins du Beaujolais</h2>
            <p>
                Si l'on en croit le proverbe, trois fleuves arrosent Lyon : le Rhône, la Saône ... et le Beaujolais ! Vous partirez à la découverte de 10 crus : Brouilly, Chénas, Chiroubles, Côtes de Brouilly, Fleurie, Juliénas, Morgon, Moulin à vent, Régnié et Saint-Amour. Et deux appellations régionales, Beaujolais-villages et Beaujolais. Ce vignoble, qui se situe dans la continuité du Macônnais, s’étend sur 55 kilomètres du nord au sud et sur 25 kilomètres de large. Bénéficiant d’un climat continental, aux hivers rudes et secs atténués par la Saône, les vignes restent abritées par les monts du Beaujolais à l’origine de la variété aromatique des vins du Beaujolais.
            </p>
            <p class="mt-2">
                Ces vins accompagnent à merveille les spécialités gastronomiques de la région, proches de la cuisine lyonnaise : les rouges pour la charcuterie (andouillettes, sabodets, saucissons à cuire ou vriochés, … sans oublier les gratons) et les blancs pour les fromages de chèvre et fromages frais, tels que la cervelle de canut.
            </p>
            <p class="mt-2">
                Les années 50 ont amené la mode du "Beaujolais nouveau... sitôt prêt, sitôt vendu... mi-novembre". On assiste maintenant à une redécouverte des crus du Beaujolais, que vous pourrez mener à travers des itinéraires au coeur du vignoble. Et deux appellations régionales, Beaujolais-villages et Beaujolais.
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-ends sur la route des vins du Beaujolais</h2>

                <div class="grid grid-cols-3 mt-2">
                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        5
                    </div>
                    <img src="https://medias1.vinotrip.com/298-ProductThird/week-end-oenologie-saint-amour.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end vin à Saint-Amour</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">310€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl" title="Découvrir l'offre">
                            <RouterLink to="/sejour/46-week-end-vin-a-saint-amour">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <img src="https://medias1.vinotrip.com/234-ProductThird/visites-de-cave-beaujolais.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end viticole Brouilly</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">170€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl" title="Découvrir l'offre">
                            <RouterLink to="/sejour/48-week-end-viticole-brouilly">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>

                <div class="flex relative h-full justify-between flex-col gap-4 mb-5 hover:-translate-y-1 transition ease-in-out border-rose border-2 rounded-2xl p-5 ml-2">
                    <div class="absolute p-3 rounded-lg bg-rose text-xl font-bold z-50 top-3 right-3">
                        4
                    </div>
                    <img src="https://medias1.vinotrip.com/235-ProductThird/chambre-hote-beaujolais.jpg"  alt="" class="rounded-xl shadow-md">
                    <h1 class="text-2xl font-bold">Week-end découverte du Beaujolais</h1>
                    <p class="text-2xl flex items-center"><ion-icon name="time-outline" class="mr-2"></ion-icon>2 jours / 1 nuit</p>
                    <p class="text-2xl">134.5€ / <span class=" text-rose">Pers</span></p>
                    <div class=" flex justify-end mr-2">
                        <button type="button" class="button text-black bg-white select-none hover:bg-rose mr-1 p-2 rounded-xl" title="Découvrir l'offre">
                            <RouterLink to="/sejour/49-week-end-decouverte-du-beaujolais">Découvrir l'offre</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="itinéraires" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Les itinéraires dans le Beaujolais</h2>
            <p>
                Nous vous présentons deux circuits qui ont retenu notre attention mais n'hésitez pas à parcourir (à pied, à vélo, en voiture, ...) le vignoble à la découverte de ses vignerons et domaines viticoles, durant votre <a href="https://www.vinotrip.com/fr/sejours-oenologiques-beaujolais">week-end oenologique en Beaujolais</a>.
            </p>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">La route des crus villages du Beaujolais</p>
                <p>
                    La famille de Beaujeu, seigneurs du vignoble, a donné son nom au Beaujolais. Vous pourrez y visiter les "sources du Beaujolais", pôle œnologique agrémenté d'une muséographie originale et moderne, parcours historique consacré au monde viticole du Beaujolais. Vous terminerez par Mont Brouilly, Chiroubles (le plus floral des crus du beaujolais, délicats arômes de violette et pivoine), Fleurie, Romanèche-Thorins et son "Hameau Duboeuf" (parcours ludique autour du vin et son centre de vinification), Chénas, Juliénas et St Amour-Bellevue.
                </p>
            </div>

            <div class="mt-5">
                <p class="mb-2 font-bold" id="stitre">Circuit au départ de Villefranche-sur-Saône</p>
                <p>
                    En route pour le sud du beaujolais, pays des pierres dorées, des maisons de pierre calcaire prenant une belle teinte dorée au soleil couchant. Sur 52 kilomètres, vous passerez par Marcy (tour Chappe 1799 qui permit la 1ère transmission de message optique), Chaunay (domaine des pierres dorées) puis par une série de petits villages Chatillon, Chessy, Bagnols, tous dotés d'une belle église. A Theizé, vous découvrirez dans le château de Rochebrune un pôle œnologique "les fiancés de l'automne", centré sur la vinification du beaujolais. En route pour Oingt et sa forteresse, puis St-Laurent-d'Oingt et sa cave coopérative, et enfin Ternand et sa collection d'outils vignerons.
                </p>
            </div>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Route%20des%20vins%20du%20Beaujolais.jpg" alt="vignobles" class="mt-5 rounded-lg m-2">
            </div>

        </div>

        <div id="plus" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">En savoir plus</h2>

            <ul class=" list list-disc list-inside mt-2">
                <li>Office de tourisme de Villefranche, Beaujolais : <a href="http://www.villefranche-beaujolais.fr/">www.villefranche-beaujolais.fr</a></li>
                <li>Office de tourisme du Beaujolais des Pierres Dorées, à côté de Lyon : <a href="http://www.tourismepierresdorees.com/">www.tourismepierresdorees.com</a> </li>
                <li>Plus d'informations sur le vignoble et ses vins : <a href="https://fr.wikipedia.org/wiki/Vignoble_du_Beaujolais">Vignoble_du_Beaujolais</a></li>
            </ul>

            <div class="flex justify-center">
                <img src="https://www.vinotrip.com/img/cms/Circuit%20route%20des%20vins%20du%20Beaujolais.jpg" alt="vignobles" class="mt-5 rounded-lg m-2">
            </div>

        </div>

        <div id="sillonner" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sillonner les routes des vins de France</h2>
            <div class="grid grid-cols-3 mt-2">
                <RouterLink to="/route-alsace" title="Route Alsace">Alsace</RouterLink>
                <RouterLink to="/route-bourgogne" title="Route Bourgogne">Bourgogne</RouterLink>
                <RouterLink to="/route-bordeaux" title="Route Bordeaux">Bordeaux</RouterLink>
                <RouterLink to="/route-provence" title="Route Provence">Provence</RouterLink>
                <RouterLink to="/route-champagne" title="Route Champagne">Champagne</RouterLink>
                <RouterLink to="/route-val" title="Route Val de Loire">Val de Loire</RouterLink>
                <RouterLink to="/route-languedoc" title="Route Languedoc-Roussillon">Languedoc-Roussillon</RouterLink>
                <RouterLink to="/route-rhone" title="Route Vallée du Rhône">Vallée du Rhône</RouterLink>
                <RouterLink to="/route-corse" title="Route Corse">Corse</RouterLink>
                <RouterLink to="/route-sud" title="Route Sud-Ouest">Sud-Ouest</RouterLink>
                <RouterLink to="/route-jura" title="Route Jura">Jura</RouterLink>
                <RouterLink to="/route-savoie" title="Route Savoie">Savoie</RouterLink>
                <RouterLink to="/route-ile" title="Route Ile-de-France">Ile-de-France</RouterLink>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
 color: rgb(228, 21, 114);
}
#stitre {
    color: #943f0d;
}
#title {
    color: #CB7169;
}
button a {
    color: black;
}
</style>