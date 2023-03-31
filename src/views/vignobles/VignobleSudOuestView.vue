<template>
    <div>
        <h1 class=" text-center text-2xl">Vignoble Sud-Ouest</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#vignoble">Découvrir le vignoble du Sud-Ouest</a></li>
                <li><a href="#villages">Villes et villages du Sud-Ouest</a></li>
                <li><a href="#vins">Routes des vins du Sud-Ouest de la France</a></li>
                <li><a href="#weekend">3 raisons de venir en week-end dans le Sud-Ouest</a></li>
                <li><a href="#tourisme">Tourisme et activités</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir le vignoble du Sud-Ouest</h2>
            <p>
                Bien que cette région ait vécu dans l’ombre de Bordeaux jusqu’à la fin du 18ème siècle, la richesse de ses terroirs et son climat doux et ensoleillé en font une terre de choix pour la culture du vin. Les amateurs d’œnologie apprécient cette région viticole pour l’étendue de sa géographie, la variété des vins et des terroirs qu’elle abrite.
            </p>
            <p class="mt-3">
                D’un relief relativement plat le long de la Garonne entre Bergerac et Toulouse, on prend de la hauteur au nord-est en direction de l’Aveyron et du Massif Central, plus encore à l’extrême sud-Ouest vers le Pays Basque et les Pyrénées.
            </p>

            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/3872040516_5c92dc0140_b_1.jpg" alt="vignoble sud ouest">
            </div>

            <p class="mt-3">
                La viticulture dans le Sud-Ouest est marquée par des influences climatiques spécifiques. Le climat est bercé entre douceur atlantique et chaleur méditerranéenne, et donne des étés globalement chauds et secs qui se prolongent jusqu’à l’automne grâce notamment au vent d’autan. A l’inverse, les vignobles Aveyronnais se teintent de continentalité avec des hivers souvent rudes, et les vignobles du piémont pyrénéen peuvent recevoir jusqu’à 1000 mm de précipitation par an.
            </p>
            <p class="mt-3">
                Le Sud-Ouest est une terre viticole, mais les vignobles de la région sont rarement en monoculture et côtoient traditionnellement maïs, cultures maraîchères, vergers et plantations de tabac. La diversité des paysages, la richesse gastronomique et la large palette des vins produits se comprend aisément. Entre les liquoreux de Jurançon et Monbazillac, les puissants vins de garde rouge de Cahors et Madiran, ou encore la diversité des vins de Gaillac, qui produit également des vins effervescents, votre séjour œnologique dans le Sud-Ouest ne vous laissera pas indifférent !
            </p>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages du Sud-Ouest</h2>
            <p>
                Le Sud-Ouest viticole est une mosaïque de petits vignobles très anciens. On y trouve plus de 70.000 hectares de vignes, répartis sur quatre régions principales : la Guyenne, la Gascogne, le Haut-Pays qui regroupe les productions de la Garonne, du Lot et du Tarn et enfin les Pyrénées. Parmi les terroirs renommés, on retrouve des appellations comme Madiran, Cahors, Buzet, Fronton ou Gaillac. Un terroir aux mille saveurs !
            </p>
            <p class="mt-3">
                <a href="https://www.vinotrip.com/fr/blog/madiran-route-des-vins-sud-ouest/">Madiran</a> est une commune de la région des Hautes-Pyrénées. Cette petite bourgade de quelques centaines d’habitants donna rapidement son nom au célèbre vin éponyme du Sud-Ouest, dès sa création au 11ème siècle et sous l’influence des prieurés bénédictins : une étape historique et incontournable sur la <RouterLink to="/route-sud">route des vins du Sud-Ouest</RouterLink> !
            </p>
            <p class="mt-3">
                La vallée du Lot, sur laquelle s'étend le vignoble de Cahors, est divisée en trois terrasses composées d’alluvions venues du Massif Central. Plus l’on s’élève, plus les sols sont drainants. Les premières terrasses, proches de la rivière, sont celles des vins souples et fruités. Les deuxièmes donnent des vins plus charnus. Ce sont les troisièmes terrasses ainsi que les grèzes, sols composés d’éboulis calcaires du causse qui produisent les vins de Cahors les plus riches et les plus aptes à la garde.
            </p>
            <p class="mt-3">
                La routes des vins du Sud-Ouest nous emmène à Agen et Montauban, aussi bien réputée pour ses pruneaux pour cette première et pour son fort historique pour la deuxième.
            </p>
            <p class="mt-3">
                Toulouse, nommée la “ville rose” est la capitale des Vins du Sud-Ouest.
            </p>
            <p class="mt-3">
                Située dans le Nord du département du Tarn, l'aire d'Appellation Gaillac couvre 2 500 hectares répartis sur 73 communes pour une production AOC de plus de 165 000 hl.
            </p>
        </div>

        <div id="vins" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Routes des vins du Sud-Ouest de la France</h2>
            <p>
                La <RouterLink to="/route-sud">route des vins du Sud-Ouest de la France</RouterLink> n’est pas la plus connue ni la plus plébiscitée, mais ceux qui connaissent ses vignobles savent qu’il n’a rien à envier à ses célèbres voisins. La région du Sud Ouest regroupe des vignobles qui font partie des plus anciens de France. Ces derniers ont longtemps vécu sous l'autorité bordelaise, freinés par la puissance du négoce maritime favorable à celle-ci, privilégiée pour l'approvisionnement de l'Europe du Nord.
            </p>
            <p class="mt-3">
                L'essor des réseaux routiers et ferroviaires a permis une reconnaissance tardive, des vins haut de gamme du Sud-Ouest. La région est un véritable musée ampélographique des cépages d'autrefois à découvrir à travers 4 itinéraires :
            </p>

            <ul class="mt-2 list list-disc list-inside">
                <li>Les routes du Cahors, l'une des plus anciennes </li>
                <li>Sur la route du Jurançon, au départ de Pau sur 55 kilomètres</li>
                <li>Les routes de Gascogne</li>
                <li>Le pays de la rivière basse, sur la route du Madiran</li>
            </ul>

            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/vigne_1.jpg" alt="raisins vignoble sud ouest">
            </div>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de venir en week-end dans le Sud-Ouest</h2>
            <p>
                Prendre la route des vins dans le Sud-Ouest est une expérience unique, qui permet de profiter d’un séjour authentique et convivial entre gastronomie, patrimoine et œnologie.
            </p>

            <div>
                <h2 class="font-bold mt-5">Un week-end oenologique dans le Sud-Ouest</h2>
                <p class="mt-2">
                    Venir en week-end oenologique dans le Sud-Ouest est le meilleur moyen de constater que l’histoire du vin et celle de l’homme se croisent depuis des siècles avec 29 “plus beaux village de France” et 33 monuments classés au patrimoine mondial.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Partir à la découverte de la gastronomie locale et de sublimes accords mets-vins !</h2>
                <p class="mt-2">
                    Allez à la rencontre des vignerons passionnés qui vous feront partager leur savoir-faire et visiter les vignobles, déguster une savoureuse volaille fermière ou s’initier aux saveurs de la truffe, le « diamant noir du Périgord ». Nous vous conseillons notre week-end gourmand dans le Madiran et le Jurançon pour faire saliver vos papilles.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Pour un week-end détente, zen et plein air</h2>
                <p class="mt-2">
                    Découvrir un patrimoine et une histoire d’une richesse insoupçonnée au cœur de paysages grandioses sur la route de Saint-Jacques-de-Compostelle seront autant d’expériences inoubliables qui vous permettront d’aborder la vraie nature de cette région chaleureuse et accueillante propice aux promenades à cheval, à découvrir lors d'un week-end dans le Gers.
                </p>
            </div>

        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activités</h2>
            <ul class="list list-disc list-inside">
                <li>Un vignoble au confluent de deux pays</li>
                <li>Un cadre entre terre et océan</li>
                <li>3 sites régionales à l’Unesco</li>
                <li>1 sommet de haute montagne accessible de tous</li>
                <li>8 cols mythiques</li>
                <li>2 parcs nationaux</li>
                <li>2 parc naturels</li>
                <li>1 réserve naturelles</li>
                <li>13 lacs</li>
                <li>8 centres de balnéo</li>
                <li>Une terre de pèlerinage : Lourdes et les Chemins de Saint Jacques de Compostelle</li>
            </ul>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez être intéressés par</h2>
            <div class="flex justify-center">
                <div class=" grid grid-cols-2 mt-2">
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rhône">Vignoble de la Vallée de Rhône</RouterLink>
                    <RouterLink to="/vignoble/languedoc-roussillon" title="Languedoc Roussillon">Vignoble du Languedoc Roussillon</RouterLink>
                    <RouterLink to="/vignoble/alsace" title="Alsace">Vignoble d'Alsace</RouterLink>
                    <RouterLink to="/vignoble/val-de-loire" title="Val de Loire">Vignoble du Val de Loire</RouterLink>
                    <RouterLink to="/vignoble/champagne" title="Champagne">Vignoble de Champagne</RouterLink>
                    <RouterLink to="/vignoble/bordeaux" title="Bordeaux">Vignoble de Bordeaux</RouterLink>
                    <RouterLink to="/vignoble/bourgogne" title="Bourgogne">Vignoble de Bourgogne</RouterLink>
                    <RouterLink to="/vignoble/beaujolais" title="Beaujolais">Vignoble du Beaujolais</RouterLink>
                    <RouterLink to="/vignoble/provence" title="Provence">Vignoble de Provence</RouterLink>
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
