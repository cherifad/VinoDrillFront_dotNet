<template>
    <div>
        <h1 class=" text-center text-2xl">Vignoble Sud-Ouest</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#vignoble">D�couvrir le vignoble du Sud-Ouest</a></li>
                <li><a href="#villages">Villes et villages du Sud-Ouest</a></li>
                <li><a href="#vins">Routes des vins du Sud-Ouest de la France</a></li>
                <li><a href="#weekend">3 raisons de venir en week-end dans le Sud-Ouest</a></li>
                <li><a href="#tourisme">Tourisme et activit�s</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">D�couvrir le vignoble du Sud-Ouest</h2>
            <p>
                Bien que cette r�gion ait v�cu dans l�ombre de Bordeaux jusqu�� la fin du 18�me si�cle, la richesse de ses terroirs et son climat doux et ensoleill� en font une terre de choix pour la culture du vin. Les amateurs d��nologie appr�cient cette r�gion viticole pour l��tendue de sa g�ographie, la vari�t� des vins et des terroirs qu�elle abrite.
            </p>
            <p class="mt-3">
                D�un relief relativement plat le long de la Garonne entre Bergerac et Toulouse, on prend de la hauteur au nord-est en direction de l�Aveyron et du Massif Central, plus encore � l�extr�me sud-Ouest vers le Pays Basque et les Pyr�n�es.
            </p>

            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/3872040516_5c92dc0140_b_1.jpg" alt="vignoble sud ouest">
            </div>

            <p class="mt-3">
                La viticulture dans le Sud-Ouest est marqu�e par des influences climatiques sp�cifiques. Le climat est berc� entre douceur atlantique et chaleur m�diterran�enne, et donne des �t�s globalement chauds et secs qui se prolongent jusqu�� l�automne gr�ce notamment au vent d�autan. A l�inverse, les vignobles Aveyronnais se teintent de continentalit� avec des hivers souvent rudes, et les vignobles du pi�mont pyr�n�en peuvent recevoir jusqu�� 1000 mm de pr�cipitation par an.
            </p>
            <p class="mt-3">
                Le Sud-Ouest est une terre viticole, mais les vignobles de la r�gion sont rarement en monoculture et c�toient traditionnellement ma�s, cultures mara�ch�res, vergers et plantations de tabac. La diversit� des paysages, la richesse gastronomique et la large palette des vins produits se comprend ais�ment. Entre les liquoreux de Juran�on et Monbazillac, les puissants vins de garde rouge de Cahors et Madiran, ou encore la diversit� des vins de Gaillac, qui produit �galement des vins effervescents, votre s�jour �nologique dans le Sud-Ouest ne vous laissera pas indiff�rent !
            </p>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages du Sud-Ouest</h2>
            <p>
                Le Sud-Ouest viticole est une mosa�que de petits vignobles tr�s anciens. On y trouve plus de 70.000 hectares de vignes, r�partis sur quatre r�gions principales : la Guyenne, la Gascogne, le Haut-Pays qui regroupe les productions de la Garonne, du Lot et du Tarn et enfin les Pyr�n�es. Parmi les terroirs renomm�s, on retrouve des appellations comme Madiran, Cahors, Buzet, Fronton ou Gaillac. Un terroir aux mille saveurs !
            </p>
            <p class="mt-3">
                <a href="https://www.vinotrip.com/fr/blog/madiran-route-des-vins-sud-ouest/">Madiran</a> est une commune de la r�gion des Hautes-Pyr�n�es. Cette petite bourgade de quelques centaines d�habitants donna rapidement son nom au c�l�bre vin �ponyme du Sud-Ouest, d�s sa cr�ation au 11�me si�cle et sous l�influence des prieur�s b�n�dictins : une �tape historique et incontournable sur la <RouterLink to="/route-sud">route des vins du Sud-Ouest</RouterLink> !
            </p>
            <p class="mt-3">
                La vall�e du Lot, sur laquelle s'�tend le vignoble de Cahors, est divis�e en trois terrasses compos�es d�alluvions venues du Massif Central. Plus l�on s��l�ve, plus les sols sont drainants. Les premi�res terrasses, proches de la rivi�re, sont celles des vins souples et fruit�s. Les deuxi�mes donnent des vins plus charnus. Ce sont les troisi�mes terrasses ainsi que les gr�zes, sols compos�s d��boulis calcaires du causse qui produisent les vins de Cahors les plus riches et les plus aptes � la garde.
            </p>
            <p class="mt-3">
                La routes des vins du Sud-Ouest nous emm�ne � Agen et Montauban, aussi bien r�put�e pour ses pruneaux pour cette premi�re et pour son fort historique pour la deuxi�me.
            </p>
            <p class="mt-3">
                Toulouse, nomm�e la �ville rose� est la capitale des Vins du Sud-Ouest.
            </p>
            <p class="mt-3">
                Situ�e dans le Nord du d�partement du Tarn, l'aire d'Appellation Gaillac couvre 2 500 hectares r�partis sur 73 communes pour une production AOC de plus de 165 000 hl.
            </p>
        </div>

        <div id="vins" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Routes des vins du Sud-Ouest de la France</h2>
            <p>
                La <RouterLink to="/route-sud">route des vins du Sud-Ouest de la France</RouterLink> n�est pas la plus connue ni la plus pl�biscit�e, mais ceux qui connaissent ses vignobles savent qu�il n�a rien � envier � ses c�l�bres voisins. La r�gion du Sud Ouest regroupe des vignobles qui font partie des plus anciens de France. Ces derniers ont longtemps v�cu sous l'autorit� bordelaise, frein�s par la puissance du n�goce maritime favorable � celle-ci, privil�gi�e pour l'approvisionnement de l'Europe du Nord.
            </p>
            <p class="mt-3">
                L'essor des r�seaux routiers et ferroviaires a permis une reconnaissance tardive, des vins haut de gamme du Sud-Ouest. La r�gion est un v�ritable mus�e amp�lographique des c�pages d'autrefois � d�couvrir � travers 4 itin�raires :
            </p>

            <ul class="mt-2 list list-disc list-inside">
                <li>Les routes du Cahors, l'une des plus anciennes </li>
                <li>Sur la route du Juran�on, au d�part de Pau sur 55 kilom�tres</li>
                <li>Les routes de Gascogne</li>
                <li>Le pays de la rivi�re basse, sur la route du Madiran</li>
            </ul>

            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/vigne_1.jpg" alt="raisins vignoble sud ouest">
            </div>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de venir en week-end dans le Sud-Ouest</h2>
            <p>
                Prendre la route des vins dans le Sud-Ouest est une exp�rience unique, qui permet de profiter d�un s�jour authentique et convivial entre gastronomie, patrimoine et �nologie.
            </p>

            <div>
                <h2 class="font-bold mt-5">Un week-end oenologique dans le Sud-Ouest</h2>
                <p class="mt-2">
                    Venir en week-end oenologique dans le Sud-Ouest est le meilleur moyen de constater que l�histoire du vin et celle de l�homme se croisent depuis des si�cles avec 29 �plus beaux village de France� et 33 monuments class�s au patrimoine mondial.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Partir � la d�couverte de la gastronomie locale et de sublimes accords mets-vins !</h2>
                <p class="mt-2">
                    Allez � la rencontre des vignerons passionn�s qui vous feront partager leur savoir-faire et visiter les vignobles, d�guster une savoureuse volaille fermi�re ou s�initier aux saveurs de la truffe, le � diamant noir du P�rigord �. Nous vous conseillons notre week-end gourmand dans le Madiran et le Juran�on pour faire saliver vos papilles.
                </p>
            </div>

            <div>
                <h2 class="font-bold mt-5">Pour un week-end d�tente, zen et plein air</h2>
                <p class="mt-2">
                    D�couvrir un patrimoine et une histoire d�une richesse insoup�onn�e au c�ur de paysages grandioses sur la route de Saint-Jacques-de-Compostelle seront autant d�exp�riences inoubliables qui vous permettront d�aborder la vraie nature de cette r�gion chaleureuse et accueillante propice aux promenades � cheval, � d�couvrir lors d'un week-end dans le Gers.
                </p>
            </div>

        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activit�s</h2>
            <ul class="list list-disc list-inside">
                <li>Un vignoble au confluent de deux pays</li>
                <li>Un cadre entre terre et oc�an</li>
                <li>3 sites r�gionales � l�Unesco</li>
                <li>1 sommet de haute montagne accessible de tous</li>
                <li>8 cols mythiques</li>
                <li>2 parcs nationaux</li>
                <li>2 parc naturels</li>
                <li>1 r�serve naturelles</li>
                <li>13 lacs</li>
                <li>8 centres de baln�o</li>
                <li>Une terre de p�lerinage : Lourdes et les Chemins de Saint Jacques de Compostelle</li>
            </ul>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez �tre int�ress�s par</h2>
            <div class="flex justify-center">
                <div class=" grid grid-cols-2 mt-2">
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rh�ne">Vignoble de la Vall�e de Rh�ne</RouterLink>
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