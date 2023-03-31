<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble de Champagne</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="#vignoble"></a>Découvrir le vignoble de Champagne</li>
                <li><a href="#villages">Découvrir les villes et villages touristiques en Champagne</a></li>
                <li><a href="#touristique">Route touristique de Champagne</a></li>
                <li><a href="#weekend">3 raisons de visiter la Champagne sur un week-end</a></li>
                <li><a href="#tourisme">Tourisme et activités dans le vignoble de Champagne</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir le vignoble de Champagne</h2>
            <p>
                Au début de son histoire le champagne est un vin tranquille (sans bulle) : il acquiert ses lettres de noblesse grâce à son effervescence à partir du XVIIème siècle, que l’on doit à un cellérier de l’Abbaye de Hautvillers, Pierre Pérignon dit dom Pérignon ! Les champagnes, dorénavant pétillants, font le tour des cours royales européennes et c’est à partir du XVIIIème siècle que les premières maisons de Champagne apparaissent, telles la maison Ruinart en 1729 et la maison Moët en 1743.
            </p>
            <p class="mt-3">
                Aujourd’hui, le vignoble de Champagne s’étend sur quatre zones de production (la Montagne de Reims, la vallée de la Marne, la Côte des Blancs, la Côte des Bar), et ses 15 000 vignerons sont les dignes héritiers de cette histoire viticole champenoise. Prêts pour un voyage au cœur d’un vignoble d’exception et une initiation à l'oenologie en champagne ?
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Champagne_1.jpg" alt="carte vignoble champagne">
            </div>

            <h2 class="font-bold mt-5">Superficie et production du vignoble champenois</h2>
            <h2 class="font-bold mt-3">Superficie</h2>
            <p class="mt-2">plus de 32 000 hectares de vignes</p>
            <h2 class="font-bold mt-3">Production</h2>
            <p class="mt-2">300 millions de bouteilles par an</p>

            <h2 class="font-bold mt-5">Appellations remarquables</h2>
            <ul class=" mt-2 list list-disc list-inside">
                <li>Premiers Crus : 44 parcelles</li>
                <li> Grands Crus : 17 parcelles représentant les meilleurs terroirs en terme de sous-sol, de pente et d’exposition.</li>
            </ul>

            <h2 class="font-bold mt-5">Cépages en Champagne</h2>
            <p class="mt-2">
                La région Champagne est située à 150 km de la capitale et comprend 320 crus. Elle couvre plus de 34 000 hectares de production viticole. Trois cépages majeurs sont à la base de l’élaboration des champagnes : le pinot noir, le pinot meunier le et chardonnay. La délimitation géographique, les cépages, les rendements et l'ensemble de l'élaboration du champagne sont les principales spécificités de l'AOC Champagne, à découvrir le temps d'un <a href="https://www.vinotrip.com/fr/sejours-oenologiques-champagne">séjour oenologique en Champagne</a>.
            </p>
        </div>


        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir les villes et villages touristiques en Champagne</h2>
            <p>
                De la Vallée de la Marne à la Montagne de Reims, le royaume du pinot noir, cépage vigoureux et généreux, la Champagne recèle de villages et grandes villes réputées pour leurs vins effervescents. La route du Champagne s’offre à vous à moins de 15min de la ville Châlons-en-Champagne, point de départ pour commencer votre voyage à travers les vignes.
            </p>
            <p class="mt-3">
                Capitale viticole de la champagne, Epernay est également une porte d’entrée vers des périples touristiques autour du vignoble.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/3872040516_5c92dc0140_b.jpg" alt="villages champagne">
            </div>
            <p class="mt-3">
                Plongez au coeur du vignoble en découvrant la ville de Reims. Cette cité champenoise est réputée pour ses nombreuses galeries souterraines reconverties en caves viticoles pour le vieillissement du champagne. Situés au coeur de la Champagne crayeuse, les sous-sols rémois ont été exploités dès l’Antiquité pour leurs propriétés minérales.
            </p>
            <p class="mt-3">
                Quant à la Côte des Blancs, elle tient sa richesse de son sol et de sa position géographique. Ces conditions sont favorables au cépage "Chardonnay", connu dans le monde entier.
            </p>
        </div>

        <div id="touristique" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Route touristique de Champagne</h2>
            <p>
                Balisée sur environ 700 km, entre vignes et coteaux, la très célèbre <RouterLink to="/route-champagne" title="Route Champagne">route du champagne</RouterLink> constitue un fil conducteur original pour découvrir les richesses viticoles et les paysages de la Champagne ! Partez à la découverte des vignerons champenois et partagez leur passion le temps d'une rencontre.
            </p>
            <p class="mt-3">
                Le premier itinéraire, incontournable en Champagne, vous mènera de Reims à Cuis, via Epernay, 92 kilomètres, 1 journée de voiture... avec un passage à Hautvillers où vécut Dom Pérignon !
            </p>
            <p class="mt-3">
                Un autre circuit que nous vous recommandons, part d'Epernay vers Mont Aimé, via Vertus, pour la découverte des Côtes de Blancs.
            </p>

            <h2 class="font-bold mt-5">Sillonner le vignoble champenois à pied</h2>
            <p class="mt-2">
                De Cramant à Vertus, 13 kilomètres à pied, d'un niveau facile ; vous passerez par Avize, le Mesnil sur Oger qui abrite « le Clos du Mesnil », terroir magique de 1,87 hectares de Chardonnay, ceint de murs dès 1698.
            </p>

            <h2 class="font-bold mt-5">Vue imprenable sur les vignes</h2>
            <p class="mt-2">
                En montgolfière au départ de Reims, Sault lès Rethel ou Turqueux, pour découvrir du ciel ces vignobles magnifiques.
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de visiter la Champagne sur un week-end</h2>
            <p>
                Le temps d’un week-end, plongez au cœur d’une nature préservée, découvrez la multitude d’activités en Champagne. Pour un week-end romantique, un week-end entre amis ou insolite, explorez les grandes maisons de champagne et initiez-vous à la dégustation de ce vin effervescent en toute convivialité.
            </p>

            <h2 class="font-bold mt-5">Initiez-vous à la dégustation du Champagne</h2>
            <p class="mt-2">
                Visiter la Champagne c’est aussi découvrir les secrets de fabrication du Champagne, des vignobles à l’antre des caves champenoises centenaires dans lesquelles des milliers de bouteilles reposent en attendant d’être sabrées…
            </p>

            <h2 class="font-bold mt-5">Découvrez le patrimoine culturel de la Champagne</h2>
            <p class="mt-2">
                Vous pourrez profiter de votre week-end découverte de la Champagne pour visiter la ville de Reims, la « cité des rois » et ses 3 sites inscrits au patrimoine mondial de l’UNESCO : la cathédrale Notre-Dame, le Palais du Tau et la Basilique Saint-Rémi.
            </p>

            <h2 class="font-bold mt-5">Passez un week-end romantique en Champagne</h2>
            <p class="mt-2">
                Evadez-vous le temps d’un <a href="https://www.vinotrip.com/fr/sejours-oenologiques/146-week-end-romantique-champagne.html">week-end entre amoureux au coeur de la Champagne</a> en réservant un week-end romantique dans un hébergement de charme chez l’un de nos partenaires
            </p>

            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Grandes maisons et vignerons de Champagne</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="">Domaine Vranken Pommery</a></li>
                <li><a href="">Domaine J. Telmont</a></li>
                <li><a href="">Domaine Gimonnet et Fils</a></li>
                <li><a href="">Maison Moët & Chandon</a></li>
                <li><a href="">Domaine Desruets</a></li>
                <li><a href="">Domaine Philippe Martin</a></li>
                <li><a href="">Domaine de Castellane</a></li>
                <li><a href="">Domaine Selosse</a></li>
                <li><a href="">Domaine Jacquesson</a></li>
            </ul>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activités dans le vignoble de Champagne</h2>
            <p>
                <a href="https://www.vinotrip.com/fr/blog/oenotourisme-en-champagne-des-visites-petillantes/">L'oenotourisme en Champagne</a> c'est battre les chemins des vignobles de la Montagne de Reims et de la Vallée de la Marne, une invitation permanente à un voyage gustatif ! Nos séjours œnologiques dans la région champenoise vous arrêterons le temps d’une dégustation chez des vignerons passionnés. Mais pas que… La Champagne est une région aux multiples tourismes, autant d’idées d’activités à ne pas manquer. Découvrez quoi faire et que voir en Champagne.
            </p>

            <h2 class="font-bold mt-5">Domaines viticoles et châteaux partenaires</h2>
            <p class="mt-2">
                Nos partenaires vignerons, maisons et coopératives de Champagne, hôteliers et restaurateurs se sont engagés à vous recevoir pour vous faire découvrir l’art de vivre et l'oenologie en Champagne. Faites un tour chez les frères Chiquet à la <a href="">maison Jacquesson</a>, à Dizy près d’Epernay ou encore dans le <a href="">domaine Jacques Selosse</a> dans le petit village d’Avize en Champagne. Profitez-en pour déguster et remplir vos caves de vos crus préférés en achetant directement vos vins et champagnes dans les propriétés viticoles.
            </p>

            <h2 class="font-bold mt-5">Les plus belles propriétés viticoles de Champagne</h2>
            <p class="mt-2">
                Assurément, la magie du Champagne provient du talent et du savoir-faire des champenois que vous découvrirez lors de votre séjour oenologique en Champagne en faisant un tour des <a href="https://www.vinotrip.com/fr/blog/plus-belles-proprietes-viticoles-champagne/">plus belles propriétés viticoles de Champagne</a>.
            </p>

            <h2 class="font-bold mt-5">Flâner à vélo sur la route du vin effervescent</h2>
            <p class="mt-2">
                Avec des centaines de kilomètres de canaux pourvus de chemins et ses nombreuses petites routes à faible circulation, la Champagne-Ardenne offre un terrain idéal pour flâner à vélo sur plus de 450 kilomètres de voies vertes à explorer.
            </p>

            <h2 class="font-bold mt-5">Découvrir les lacs de Champagne-Ardenne</h2>
            <p class="mt-2">
                Au cœur d’une nature préservée, découvrez la multitude d’activités en Champagne qui séduisent depuis toujours les petits comme les grands : pêche, baignade, camping, voile, ski nautique, aviron. Pratiquez des activités nautiques sur le lac du Der ou partez à la découverte des grands lacs de Champagne.
            </p>

            <h2 class="font-bold mt-5">Zoom sur les spécialités gastronomiques champenoises</h2>
            <p class="mt-2">
                Le savoir vivre champenois se passe aussi dans l’assiette. Partez à la découverte des <a href="https://www.vinotrip.com/fr/blog/zoom-sur-les-specialites-gastronomiques-champenoises/">spécialités gastronomiques champenoises</a>.
            </p>

            <h2 class="font-bold mt-5">Le tourisme en Champagne en quelques chiffres</h2>
            <ul class="mt-2 list list-disc list-inside">
                <li>278 hôtels et 8 898 chambres  </li>
                <li>48% des chambres classées 3 à 5 étoiles</li>
                <li>4 630 vignerons indépendants, 300 maisons de champagne</li>
                <li>450 km de véloroutes Voies Vertes</li>
                <li>1ère place du classement des régions fleuries</li>
                <li>3 Parcs Naturels Régionaux : Montagne de Reims, Forêt d’Orient, Ardennes</li>
                <li>48 km2, c’est la superficie du Lac du Der</li>
            </ul>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez être intéressés par</h2>
            <div class="flex justify-center">
                <div class=" grid grid-cols-2 mt-2">
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rhône">Vignoble de la Vallée de Rhône</RouterLink>
                    <RouterLink to="/vignoble/alsace" title="Alsace">Vignoble d'Alsace</RouterLink>
                    <RouterLink to="/vignoble/val-de-loire" title="Val de Loire">Vignoble du Val de Loire</RouterLink>
                    <RouterLink to="/vignoble/champagne" title="Champagne">Vignoble de Champagne</RouterLink>
                    <RouterLink to="/vignoble/bordeaux" title="Bordeaux">Vignoble de Bordeaux</RouterLink>
                    <RouterLink to="/vignoble/bourgogne" title="Bourgogne">Vignoble de Bourgogne</RouterLink>
                    <RouterLink to="/vignoble/beaujolais" title="Beaujolais">Vignoble du Beaujolais</RouterLink>
                    <RouterLink to="/vignoble/provence" title="Provence">Vignoble de Provence</RouterLink>
                    <RouterLink to="/vignoble/sud-ouest" title="Sud Ouest">Vignoble du Sud Ouest</RouterLink>
                </div>
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