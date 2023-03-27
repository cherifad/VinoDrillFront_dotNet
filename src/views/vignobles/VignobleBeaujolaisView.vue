<template>
    <div>
        <h1 class=" text-center text-2xl">Découvrir la région du Beaujolais</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#vignoble">Découvrir le vignoble du Beaujolais </a></li>
                <li><a href="#villages">Villes et villages viticoles du Beaujolais</a></li>
                <li><a href="#vins">Partez sur les routes des vins du Beaujolais</a></li>
                <li><a href="#weekend">3 raisons de venir en week-end en Beaujolais</a></li>
                <li><a href="#tourisme">Tourisme et activités dans le vignoble du Beaujolais</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir le vignoble du Beaujolais</h2>
            <p>
                Le Beaujolais est mondialement connu pour son « Beaujolais Nouveau » dont la vente en primeur de novembre fait la une de la presse chaque année. Mais sa renommée ne doit pas faire oublier la diversité de la production du Beaujolais - vins de garde et appellations de grande qualité - et la beauté de ses paysages viticoles vallonnés, de ses châteaux et villages médiévaux aux pierres dorées. Autant de bonnes raisons de partir en séjour œnologique dans le Beaujolais, et sillonner le vignoble sur 55 kilomètres, entre Mâcon et Lyon, à la découverte de sa gastronomie, de ses vins et de ses vignerons.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Beaujolais.jpg" alt="carte vignoble beaujolais">
            </div>

            <div>
                <h2 class="font-bold mt-5">Dégustez les vins du Beaujolais</h2>
                <p class="mt-3">
                    Rattachés juridiquement à la Bourgogne viticole, les vins du Beaujolais ont en commun avec leurs voisins bourguignons une complexité, une souplesse et un fruité délicat. Le gamay, cépage emblématique du Beaujolais, couvre 99% du vignoble situé à cheval sur les départements du Rhône et de la Saône-et-Loire.
                </p>
                <p class="mt-3">
                    Seul le chardonnay planté à la frontière nord avec le Mâconnais vient concurrencer très marginalement la suprématie du cépage gamay. Les week-ends viticoles en Beaujolais vous permettront de vous familiariser avec ces fabuleux vins et vous emmèneront à la rencontre d’une des rares régions viticoles encore fidèle à la vendange manuelle.
                </p>
                <p class="mt-3">
                    L’œnologie en Beaujolais commence souvent par l’initiation au vin nouveau pour mieux découvrir, par la suite, une production plus diversifiée et complexe.
                </p>
                <p class="mt-3">
                    Types de vins à déguster : vins rouges majoritairement, mais également beaujolais blancs et rosés.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Chiffres clés du vignoble Beaujolais:</h2>
                <h2 class="font-bold mt-3">Superficie</h2>
                <p class="mt-2">plus de 18 000 hectares</p>
                <h2 class="font-bold mt-3">Production</h2>
                <p class="mt-2">1 million d’hectolitres produits chaque année</p>
                <h2 class="font-bold mt-3">Les aires d’appellation à découvrir</h2>
                <ul class="mt-2 list list-disc list-inside">
                    <li>Appellation régionale beaujolais</li>
                    <li>Appellation beaujolais-villages</li>
                    <li>Dix crus : Brouilly, Côte de Brouilly, Chénas, Chiroubles, Fleurie, Juliénas, Morgon, Moulin à vent, Régnié, Saint-Amour</li>
                </ul>
            </div>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages viticoles du Beaujolais</h2>
            <p>
                Le vignoble du Beaujolais couvre une surface de plus de 22 000 hectares. Il s’étend sur les derniers contreforts du Massif Central, à l’Ouest de la Saône, entre Mâcon et Lyon. Il bénéficie d’un climat unique : continental en hiver, océanique en automne et au printemps, et méditerranéen en été.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Ch%C3%A2teau_de_Varennes_(Quinci%C3%A9-en-Beaujolais)_1.jpg" alt="villages beaujolais">
            </div>

            <div>
                <h2 class="font-bold mt-5">Parmi les villages et les villes les plus connus :</h2>
                <ul class="mt-2 list list-disc list-inside">
                    <li>Villefranche-sur-saône, capitale du Beaujolais.</li>
                    <li>Le petit village de Villié-Morgon, niché au sein des coteaux du Beaujolais, qui s'est imposé comme une étape indispensable pour les amateurs de vin.</li>
                    <li>Brouilly, avec 20 % de la superficie du vignoble Beaujolais, est le vignoble le plus étendu de la région.</li>
                    <li>Saint-Amour, qui est le plus septentrional des crus du Beaujolais.</li>
                    <li>Chénas, qui est le plus petit des crus du Beaujolais s'étendant sur environ 260 hectares</li>
                </ul>
            </div>
        </div>

        <div id="vins" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Partez sur les routes des vins du Beaujolais</h2>
            <p>
                Partez à la découverte des crus du Beaujolais en parcourant le vignoble à la rencontre de ses vignerons et de leurs passions et savoirs-faire pour la vigne. Nos équipes vous conseille de découvrir 2 itinéraires de <RouterLink to="/route-beaujolais">routes des vins du Beaujolais</RouterLink>.
            </p>

            <div>
                <h2 class="font-bold mt-5">La route des crus villages du Beaujolais</h2>
                <p class="mt-2">
                    Sur 92 kilomètres, elle vous conduira de Villefranche-sur-Saône à Montmelas-Sorlin, Saint-Julien (ville de Claude Bernard et son musée), Vaux-en- Beaujolais, Arguy et son château et Beaujeu.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Circuit au départ de Villefranche-sur-Saône</h2>
                <p class="mt-2">
                    Sur 52 kilomètres, vous passerez par Marcy, Chaunay, puis par une série de petits villages : Chatillon, Chessy, Bagnols, tous dotés d'une belle église.
                </p>
            </div>

            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Beaujolais%20Brouilly.jpg" alt="vignoble beaujolais">
            </div>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de venir en week-end en Beaujolais</h2>
            <p>
                Envie de passer un week-end gastronomique, festif et gourmand ? Situé à quelques kilomètres seulement au nord de Lyon et à moins de 200 km à l’ouest de Genève en Suisse, le vignoble du Beaujolais jouit depuis toujours d’une situation favorable et stratégique. Que vous souhaitiez partir en famille, entre amis ou en amoureux, découvrez toutes nos idées de week-end pour profiter du Beaujolais.
            </p>

            <div>
                <h2 class="font-bold mt-5">Week-end romantique et détente</h2>
                <p class="mt-2">
                    Le temps d’une romance viticole, venez vous détendre dans un spa au coeur des vignes, suivi d’une dégustation de vin du Beaujolais chez l’un de nos domaines partenaire.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Découverte du Beaujolais à Saint-Amour</h2>
                <p class="mt-2">
                    Hébergés dans une maison d’hôte de charme à Saint Amour vous pourrez jouir de l’emplacement favorable de nos partenaires, situés au coeur du Beaujolais pour un week-end placé sous le signe de la dégustation de vins de différentes appellations.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Domaines à visiter et crus à déguster en Beaujolais</h2>
                <p class="mt-2">
                    Le Beaujolais est l’un des rares vignobles à rester fidèle à la vendange manuelle, venez découvrir cette <a href="https://www.vinotrip.com/fr/blog/visites-domaines-crus-deguster-beaujolais/">vinification traditionnelle des grands crus Beaujolais</a> le temps d’un week-end.
                </p>
            </div>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activités dans le vignoble du Beaujolais</h2>

            <div>
                <h2 class="font-bold">Culture et nature</h2>
                <p class="mt-3">
                    Cette région viticole combine à merveille initiation œnologique, découverte culturelle et détente.
                </p>

                <p class="mt-3">
                    <span class="font-bold">Côté culture</span>, la visite des châteaux du Beaujolais, ses villages médiévaux et villes historiques (Villefranche, Beaujeu) raviront plus d’un voyageur à la recherche de paysages bucoliques.
                </p>

                <p class="mt-3">
                    <span class="font-bold">Côté nature</span>, ses paysages vallonnés offrent des vues imprenables sur le vignoble et le Beaujolais vert. Une facette qui séduira les adeptes des randonnées qui sont aussi gourmands : un périple entrecoupé de visites de domaines viticoles et de dégustations des crus du Beaujolais !
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Visiter les plus beaux domaines viticoles</h2>
                <p class="mt-2">
                    Partez à la découverte des plus beaux domaines viticoles en sillonnant les routes du Beaujolais. Situé à Beaujeu, capitale historique du Beaujolais, nous vous recommandons de faire un tour à la Maison Pardon et Fils.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Gouter la gastronomie du Beaujolais</h2>
                <p class="mt-2">
                    Associé au vignoble lyonnais, le Beaujolais partage avec celui-ci le goût du bien-manger, des itinéraires gourmands qui compléteront à merveille votre voyage œnologique sur les terres du gamay. Les accords mets et vins restent une expérience unique, découvrez <a href="https://www.vinotrip.com/fr/blog/les-specialites-gastronomiques-du-beaujolais/">les spécialités culinaires du Beaujolais</a>.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Activités à faire en famille ou entre amis</h2>
                <ul class=" mt-2 list list-disc list-inside">
                    <li>Activités nautiques, randonnées et Forêt de l’Aventure au Lac des Sapins à Cublize, base nautique du Colombier à Anse : aviron, voile, kayak, …</li>
                    <li>=Randonnées pédestres, équestres ou VTT de vignes en villages et de villages en forêts : circuit des Industries d’Antan, circuit des crêtes, balades dans les Pierres Dorées, voie verte du Beaujolais, …</li>
                    <li>Parcs acrobatiques forestiers à Blacé et Avenas.</li>
                    <li>Golf Club du Beaujolais à Lucenay</li>
                </ul>
            </div>

            <div>
                <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez être intéressés par</h2>
                <div class="flex justify-center">
                    <div class=" grid grid-cols-2 mt-2">
                        <RouterLink to="/vignoble/val-de-loire" title="Val de Loire">Vignoble du Val de Loire</RouterLink>
                        <RouterLink to="/vignoble/champagne" title="Champagne">Vignoble de Champagne</RouterLink>
                        <RouterLink to="/vignoble/alsace" title="Alsace">Vignoble d'Alsace</RouterLink>
                        <RouterLink to="/vignoble/bordeaux" title="Bordeaux">Vignoble de Bordeaux</RouterLink>
                        <RouterLink to="/vignoble/bourgogne" title="Bourgogne">Vignoble de Bourgogne</RouterLink>
                        <RouterLink to="/vignoble/languedoc-roussillon" title="Languedoc Roussillon">Vignoble du Languedoc Roussillon</RouterLink>
                        <RouterLink to="/vignoble/provence" title="Provence">Vignoble de Provence</RouterLink>
                        <RouterLink to="/vignoble/sud-ouest" title="Sud Ouest">Vignoble du Sud Ouest</RouterLink>
                        <RouterLink to="/vignoble/vallee-du-rhone" title="Rhône">Vignoble de la Vallée de Rhône</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
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