<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble de Champagne</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="#vignoble"></a>D�couvrir le vignoble de Champagne</li>
                <li><a href="#villages">D�couvrir les villes et villages touristiques en Champagne</a></li>
                <li><a href="#touristique">Route touristique de Champagne</a></li>
                <li><a href="#weekend">3 raisons de visiter la Champagne sur un week-end</a></li>
                <li><a href="#tourisme">Tourisme et activit�s dans le vignoble de Champagne</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">D�couvrir le vignoble de Champagne</h2>
            <p>
                Au d�but de son histoire le champagne est un vin tranquille (sans bulle) : il acquiert ses lettres de noblesse gr�ce � son effervescence � partir du XVII�me si�cle, que l�on doit � un cell�rier de l�Abbaye de Hautvillers, Pierre P�rignon dit dom P�rignon ! Les champagnes, dor�navant p�tillants, font le tour des cours royales europ�ennes et c�est � partir du XVIII�me si�cle que les premi�res maisons de Champagne apparaissent, telles la maison Ruinart en 1729 et la maison Mo�t en 1743.
            </p>
            <p class="mt-3">
                Aujourd�hui, le vignoble de Champagne s��tend sur quatre zones de production (la Montagne de Reims, la vall�e de la Marne, la C�te des Blancs, la C�te des Bar), et ses 15 000 vignerons sont les dignes h�ritiers de cette histoire viticole champenoise. Pr�ts pour un voyage au c�ur d�un vignoble d�exception et une initiation � l'oenologie en champagne ?
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
                <li> Grands Crus : 17 parcelles repr�sentant les meilleurs terroirs en terme de sous-sol, de pente et d�exposition.</li>
            </ul>

            <h2 class="font-bold mt-5">C�pages en Champagne</h2>
            <p class="mt-2">
                La r�gion Champagne est situ�e � 150 km de la capitale et comprend 320 crus. Elle couvre plus de 34 000 hectares de production viticole. Trois c�pages majeurs sont � la base de l��laboration des champagnes : le pinot noir, le pinot meunier le et chardonnay. La d�limitation g�ographique, les c�pages, les rendements et l'ensemble de l'�laboration du champagne sont les principales sp�cificit�s de l'AOC Champagne, � d�couvrir le temps d'un <a href="https://www.vinotrip.com/fr/sejours-oenologiques-champagne">s�jour oenologique en Champagne</a>.
            </p>
        </div>


        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">D�couvrir les villes et villages touristiques en Champagne</h2>
            <p>
                De la Vall�e de la Marne � la Montagne de Reims, le royaume du pinot noir, c�page vigoureux et g�n�reux, la Champagne rec�le de villages et grandes villes r�put�es pour leurs vins effervescents. La route du Champagne s�offre � vous � moins de 15min de la ville Ch�lons-en-Champagne, point de d�part pour commencer votre voyage � travers les vignes.
            </p>
            <p class="mt-3">
                Capitale viticole de la champagne, Epernay est �galement une porte d�entr�e vers des p�riples touristiques autour du vignoble.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/3872040516_5c92dc0140_b.jpg" alt="villages champagne">
            </div>
            <p class="mt-3">
                Plongez au coeur du vignoble en d�couvrant la ville de Reims. Cette cit� champenoise est r�put�e pour ses nombreuses galeries souterraines reconverties en caves viticoles pour le vieillissement du champagne. Situ�s au coeur de la Champagne crayeuse, les sous-sols r�mois ont �t� exploit�s d�s l�Antiquit� pour leurs propri�t�s min�rales.
            </p>
            <p class="mt-3">
                Quant � la C�te des Blancs, elle tient sa richesse de son sol et de sa position g�ographique. Ces conditions sont favorables au c�page "Chardonnay", connu dans le monde entier.
            </p>
        </div>

        <div id="touristique" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Route touristique de Champagne</h2>
            <p>
                Balis�e sur environ 700 km, entre vignes et coteaux, la tr�s c�l�bre <RouterLink to="/route-champagne" title="Route Champagne">route du champagne</RouterLink> constitue un fil conducteur original pour d�couvrir les richesses viticoles et les paysages de la Champagne ! Partez � la d�couverte des vignerons champenois et partagez leur passion le temps d'une rencontre.
            </p>
            <p class="mt-3">
                Le premier itin�raire, incontournable en Champagne, vous m�nera de Reims � Cuis, via Epernay, 92 kilom�tres, 1 journ�e de voiture... avec un passage � Hautvillers o� v�cut Dom P�rignon !
            </p>
            <p class="mt-3">
                Un autre circuit que nous vous recommandons, part d'Epernay vers Mont Aim�, via Vertus, pour la d�couverte des C�tes de Blancs.
            </p>

            <h2 class="font-bold mt-5">Sillonner le vignoble champenois � pied</h2>
            <p class="mt-2">
                De Cramant � Vertus, 13 kilom�tres � pied, d'un niveau facile ; vous passerez par Avize, le Mesnil sur Oger qui abrite � le Clos du Mesnil �, terroir magique de 1,87 hectares de Chardonnay, ceint de murs d�s 1698.
            </p>

            <h2 class="font-bold mt-5">Vue imprenable sur les vignes</h2>
            <p class="mt-2">
                En montgolfi�re au d�part de Reims, Sault l�s Rethel ou Turqueux, pour d�couvrir du ciel ces vignobles magnifiques.
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de visiter la Champagne sur un week-end</h2>
            <p>
                Le temps d�un week-end, plongez au c�ur d�une nature pr�serv�e, d�couvrez la multitude d�activit�s en Champagne. Pour un week-end romantique, un week-end entre amis ou insolite, explorez les grandes maisons de champagne et initiez-vous � la d�gustation de ce vin effervescent en toute convivialit�.
            </p>

            <h2 class="font-bold mt-5">Initiez-vous � la d�gustation du Champagne</h2>
            <p class="mt-2">
                Visiter la Champagne c�est aussi d�couvrir les secrets de fabrication du Champagne, des vignobles � l�antre des caves champenoises centenaires dans lesquelles des milliers de bouteilles reposent en attendant d��tre sabr�es�
            </p>

            <h2 class="font-bold mt-5">D�couvrez le patrimoine culturel de la Champagne</h2>
            <p class="mt-2">
                Vous pourrez profiter de votre week-end d�couverte de la Champagne pour visiter la ville de Reims, la � cit� des rois � et ses 3 sites inscrits au patrimoine mondial de l�UNESCO : la cath�drale Notre-Dame, le Palais du Tau et la Basilique Saint-R�mi.
            </p>

            <h2 class="font-bold mt-5">Passez un week-end romantique en Champagne</h2>
            <p class="mt-2">
                Evadez-vous le temps d�un <a href="https://www.vinotrip.com/fr/sejours-oenologiques/146-week-end-romantique-champagne.html">week-end entre amoureux au coeur de la Champagne</a> en r�servant un week-end romantique dans un h�bergement de charme chez l�un de nos partenaires
            </p>

            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Grandes maisons et vignerons de Champagne</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="">Domaine Vranken Pommery</a></li>
                <li><a href="">Domaine J. Telmont</a></li>
                <li><a href="">Domaine Gimonnet et Fils</a></li>
                <li><a href="">Maison Mo�t & Chandon</a></li>
                <li><a href="">Domaine Desruets</a></li>
                <li><a href="">Domaine Philippe Martin</a></li>
                <li><a href="">Domaine de Castellane</a></li>
                <li><a href="">Domaine Selosse</a></li>
                <li><a href="">Domaine Jacquesson</a></li>
            </ul>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activit�s dans le vignoble de Champagne</h2>
            <p>
                <a href="https://www.vinotrip.com/fr/blog/oenotourisme-en-champagne-des-visites-petillantes/">L'oenotourisme en Champagne</a> c'est battre les chemins des vignobles de la Montagne de Reims et de la Vall�e de la Marne, une invitation permanente � un voyage gustatif ! Nos s�jours �nologiques dans la r�gion champenoise vous arr�terons le temps d�une d�gustation chez des vignerons passionn�s. Mais pas que� La Champagne est une r�gion aux multiples tourismes, autant d�id�es d�activit�s � ne pas manquer. D�couvrez quoi faire et que voir en Champagne.
            </p>

            <h2 class="font-bold mt-5">Domaines viticoles et ch�teaux partenaires</h2>
            <p class="mt-2">
                Nos partenaires vignerons, maisons et coop�ratives de Champagne, h�teliers et restaurateurs se sont engag�s � vous recevoir pour vous faire d�couvrir l�art de vivre et l'oenologie en Champagne. Faites un tour chez les fr�res Chiquet � la <a href="">maison Jacquesson</a>, � Dizy pr�s d�Epernay ou encore dans le <a href="">domaine Jacques Selosse</a> dans le petit village d�Avize en Champagne. Profitez-en pour d�guster et remplir vos caves de vos crus pr�f�r�s en achetant directement vos vins et champagnes dans les propri�t�s viticoles.
            </p>

            <h2 class="font-bold mt-5">Les plus belles propri�t�s viticoles de Champagne</h2>
            <p class="mt-2">
                Assur�ment, la magie du Champagne provient du talent et du savoir-faire des champenois que vous d�couvrirez lors de votre s�jour oenologique en Champagne en faisant un tour des <a href="https://www.vinotrip.com/fr/blog/plus-belles-proprietes-viticoles-champagne/">plus belles propri�t�s viticoles de Champagne</a>.
            </p>

            <h2 class="font-bold mt-5">Fl�ner � v�lo sur la route du vin effervescent</h2>
            <p class="mt-2">
                Avec des centaines de kilom�tres de canaux pourvus de chemins et ses nombreuses petites routes � faible circulation, la Champagne-Ardenne offre un terrain id�al pour fl�ner � v�lo sur plus de 450 kilom�tres de voies vertes � explorer.
            </p>

            <h2 class="font-bold mt-5">D�couvrir les lacs de Champagne-Ardenne</h2>
            <p class="mt-2">
                Au c�ur d�une nature pr�serv�e, d�couvrez la multitude d�activit�s en Champagne qui s�duisent depuis toujours les petits comme les grands : p�che, baignade, camping, voile, ski nautique, aviron. Pratiquez des activit�s nautiques sur le lac du Der ou partez � la d�couverte des grands lacs de Champagne.
            </p>

            <h2 class="font-bold mt-5">Zoom sur les sp�cialit�s gastronomiques champenoises</h2>
            <p class="mt-2">
                Le savoir vivre champenois se passe aussi dans l�assiette. Partez � la d�couverte des <a href="https://www.vinotrip.com/fr/blog/zoom-sur-les-specialites-gastronomiques-champenoises/">sp�cialit�s gastronomiques champenoises</a>.
            </p>

            <h2 class="font-bold mt-5">Le tourisme en Champagne en quelques chiffres</h2>
            <ul class="mt-2 list list-disc list-inside">
                <li>278 h�tels et 8 898 chambres  </li>
                <li>48% des chambres class�es 3 � 5 �toiles</li>
                <li>4 630 vignerons ind�pendants, 300 maisons de champagne</li>
                <li>450 km de v�loroutes Voies Vertes</li>
                <li>1�re place du classement des r�gions fleuries</li>
                <li>3 Parcs Naturels R�gionaux : Montagne de Reims, For�t d�Orient, Ardennes</li>
                <li>48 km2, c�est la superficie du Lac du Der</li>
            </ul>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez �tre int�ress�s par</h2>
            <div class="flex justify-center">
                <div class=" grid grid-cols-2 mt-2">
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rh�ne">Vignoble de la Vall�e de Rh�ne</RouterLink>
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