<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble d'Alsace</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <p class="text-justify">
            Arpenter l��troite bande de coteaux entre Strasbourg et Mulhouse en passant par Colmar est une exp�rience touristique vinicole � ne pas manquer ! Le vignoble alsacien est en perp�tuelle �volution gr�ce � la qualit� de ses vins et se singularise par sa jeunesse, ses influences transfrontali�res et son histoire.
        </p>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="#vignoble">Le vignoble d'Alsace, un vignoble jeune malmen� par l'histoire</a></li>
                <li><a href="#villages">Villes et villages du vignoble alsacien</a></li>
                <li><a href="#route">D�couvrez l'Alsace sur la route des vins</a></li>
                <li><a href="#weekend">3 raisons de venir en week-end en Alsace</a></li>
                <li><a href="#tourisme">Tourisme et activit�s en Alsace</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Le vignoble d'Alsace, un vignoble jeune malmen� par l'histoire</h2>
            <p>
                Les domaines et vignes d�Alsace ont d�abord �t� malmen�s par les guerres de conqu�te des rois de France, puis par les conflits franco-allemands. La reconstruction du vignoble s�est op�r�e � partir des ann�es 60, avec la reconnaissance de l�AOC Alsace, obtenue en 1962, et qui couvrait la totalit� de l�aire viticole de l��poque. Le vignoble des ann�es 60 et celui que nous connaissons aujourd�hui sont cependant bien diff�rents : l�apparition du Cr�mant, la cr�ation de l�AOC Grand Cru et l��mergence des vins moelleux et liquoreux ont remodel�s le vignoble alsacien tel qu�on le conna�t aujourd�hui.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Alsace_1.jpg" alt="carte vignoble alsace">
            </div>

            <h2 class="font-bold mt-5">G�ographie du vignoble d�Alsace</h2>
            <p class="mt-2">
                Le vignoble alsacien s��tend du Nord au Sud de l�Alsace, de Strasbourg � Mulhouse, sur une surface totale de production de 15 600 hectares r�partie sur 119 communes. Le vignoble peut produire 637 vins AOC-AOP diff�rentes, majoritairement en blanc, mais �galement en mousseux et aussi le mill�sime vin rouge. Pour que la liste soit compl�te, il ne faut pas oublier l�eau-de-vie r�gionale : le marc d�Alsace !
            </p>
            <p class="mt-2">
                C�est donc au c�ur de la plaine du Rhin que se situe la zone de production des vins d�Alsace. Les vignes se d�veloppent, d�une part, sur les contreforts orientaux des Vosges, entre environ 170 et 500 m�tres d�altitude, et d�autre part dans les petites vall�es qui les entaillent. L�ensemble du vignoble est parcourue, sur une longueur de 170 kilom�tres, par la <RouterLink to="/route-alsace" title="Route Alsace">fameuse Route des vins d�Alsace</RouterLink> dont le trac� a �t� d�fini officiellement en mai 1953 et qui passe par une grande partie des communes du vignoble (67 sur 119) et <a href="https://www.vinotrip.com/fr/blog/sur-la-route-des-vins-dalsace-histoire-appellations">appellations</a> Grands Crus (48 sur 51).
            </p>

            <h2 class="font-bold mt-5">Les appellations des vins d�Alsace</h2>
            <p class="mt-2">
                Cas particulier en France, la totalit� du vignoble alsacien est class�e AOC Alsace (ou vins d�Alsace).
            </p>
            <p class="mt-2">
                D�guster les vins d�Alsace, c�est se confronter � plus de 600 AOC-AOP diff�rentes, 7 c�pages (Muscat, Sylvaner, Pinot Blanc, Pinot Gris, Pinot Noir, Riesling et Gewurztraminer) et 2 assemblages (Edelzwicker, Gentil). Des chiffres vertigineux qui ne doivent pas faire oublier le plaisir des d�couvertes gustatives et le simple moment de partage de la d�gustation. Vous ne trouverez pas un domaine viticole en Alsace qui soit digne de ce nom tant la culture de la vigne est forte. Les ateliers �nologiques et les s�ances de d�gustations dirig�s par des professionnels auxquels nous vous proposons de participer durant votre s�jour �nologique en Alsace vous guideront parmi cette incroyable mosa�que de saveurs !
            </p>

            <h2 class="mt-3">Superficie</h2>
            <p class="mt-2">plus de 15 000 hectares de vignes</p>

            <h2 class="font-bold mt-3">Production</h2>
            <p class="mt-2">1,5 millions de bouteilles par an, dont :</p>
            <ul class=" list list-disc list-inside">
                <li>80% de vins d�Alsace AOC</li>
                <li>4 % AOC Grands Cru</li>
                <li>16% AOC Cr�mant</li>
            </ul>

            <h2 class="font-bold mt-3">C�pages</h2>
            <p class="mt-2">7 reconnus - Muscat, Sylvaner, Pinot Blanc, Pinot Gris, Pinot Noir, Riesling et Gewurztraminer</p>

            <h2 class="font-bold mt-3">Enc�pagement majeurs</h2>
            <p class="mt-2">Riesling (22%), Pinot Blanc (21%) et Cr�mant, Gewurztraminer (18%)</p>

            <h2 class="font-bold mt-3">Appellations remarquables</h2>
            <ul class=" list list-disc list-inside">
                <li>Alsace Grands Crus : plant�s uniquement en c�pages nobles (Muscat, Riesling, Pinot Gris et Gewurztraminer)</li>
                <li>Vendanges Tardives et S�lection de Grains Nobles : �labor�s � partir de raisins riches en sucre naturel, ils poss�dent un potentiel de vieillissement important, et fait unique en France, la chaptalisation est interdite en Alsace !</li>
            </ul>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages du vignoble alsacien</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/strasbourg-90012_640.jpg" alt="villages alsace">
            </div>
            <p class="mt-3">
                Entre ses ar�mes fruit�s et ses couleurs riches et a�riennes, le vin alsacien est un v�ritable voyage sensoriel. L'oenotourisme en Alsace vous entra�ne � la d�couverte d'une incroyable diversit� de terroirs et c�pages b�n�ficiant d�un climat qui donne des vins parmi les plus g�n�reux et les plus fruit�s des vins blancs produits dans l�hexagone.
            </p>
            <p class="mt-3">
                Du Nord � Marlenheim - � l�Ouest de Strasbourg au Sud � Thann, le p�riple viticole de l�Alsace s'�tend sur plus de 170 Km. Le vignoble d�Alsace, bord� par la Suisse et l�Allemagne offre un paysage riche de traditions au pied des Vosges, � l�or�e intime de la For�t Noire et de la tranquillit� du Rhin. Laissez-vous conter l�Alsace le temps de quelques suggestions de villes touristiques dans la r�gion.
            </p>
            <p class="mt-3">
                Commencez votre voyage � Strasbourg, autrefois cit� riche et puissante gr�ce au commerce du vin, son quartier m�di�val de la petite France sur la Grande �le est class� au Patrimoine mondial de l�UNESCO. Notre Dame de Strasbourg a toujours de sa superbe, selon les mots de Victor Hugo un � Prodige du gigantesque et du d�licat�.
            </p>
            <p class="mt-3">
                En s��loignant de la cit� strasbourgeoise, � l�entr�e de la vall�e de la Bruche, nich�e aux pieds des c�t�s, la ville m�di�vale de Molsheim est l�excellent point de d�part d�un itin�raire viticole. Elle est r�put�e pour sa gastronomie, son Bruderthal et comme fief des Usines Bugatti.
            </p>
            <p class="mt-3">
                En s��loignant de la cit� strasbourgeoise, � l�entr�e de la vall�e de la Bruche, nich�e aux pieds des c�t�s, la ville m�di�vale de Molsheim est l�excellent point de d�part d�un itin�raire viticole. Elle est r�put�e pour sa gastronomie, son Bruderthal et comme fief des Usines Bugatti.
            </p>
            <p class="mt-3">
                En continuant plus au Sud, le voyageur appr�ciera tomber sur des villes m�di�vales typiques comme Ribeauvill�e, Riquewick ou encore KayserBerg labellis�es �Terre & Vin du pays de Colmar� o� se m�lent paysages de plaines, massifs vosgiens et vignobles. Un panorama m�di�val hors du temps s'offre � vous : une vue de maisons � colombages et des �glises romanes o� les ruelles s�entrelacent � l�abri des remparts.
            </p>
            <p class="mt-3">
                L'Alsace est la r�gion avec le plus d��difices d�art roman et forteresses m�di�vales. Plus au Sud de la route des vins, Colmar et Thann marquent la fin du p�riple Alsacien.
            </p>
            <p class="mt-3">
                Colmar, Ville d�art et d�histoire est une destination unique pour les amoureux du vins avec 37 communes viticoles et son quartier de la �Petite Venise�. Thann, ville de 8000 habitants, s�est faite une r�putation depuis le XIII si�cle gr�ce au vin et son c�l�bre vignoble du <a href="https://www.vinotrip.com/fr/blog/rangen-grand-cru-alsace-meconnu/">Rangen</a>.
            </p>
        </div>

        <div id="route" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">D�couvrez l'Alsace sur la route des vins</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Niedermorschwihr.jpg" alt="route vignoble alsace">
            </div>
            <p class="mt-3">
                La zone de production de ses vins se situe au c�ur de la plaine du Rhin, entre les contreforts orientaux des Vosges et les vall�es qui les entaillent, et dont le microclimat sec cr�e les conditions parfaites � la culture des raisins blancs notamment.
            </p>
            <p class="mt-3">
                L'ensemble du vignoble est parcouru par la l�gendaire  <RouterLink to="/route-alsace" title="Route Alsace">Route des vins d�Alsace</RouterLink>, qui passe par une grande partie des communes du vignoble et appellations Grands Crus. Gourmandise, oenologie et patrimoine� une itin�rance in�dite qui permet de s�initier � la d�gustation des vins d�Alsace, de musarder dans les ruelles des splendides cit�s viticoles comme Ribeauvill� et de savourer les sp�cialit�s locales comme les choucroutes, les baeckcoffes ...
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de venir en week-end en Alsace</h2>
            <p>
                L�Alsace est un vignoble chaleureux et festif.
            </p>

            <h2 class="font-bold mt-3">Faites de l�oenotourisme entre amis ou en couple pour s��vader</h2>
            <p class="mt-2">Profitez d�une escapade citadine � Strasbourg, Colmar ou Mulhouse pour sillonner les alentours sur les c�l�bres 170 km de route des vins. En couple ou entre amis, vivez une exp�rience unique dans les vignobles le temps d�un <a href="https://www.vinotrip.com/fr/sejours-oenologiques-alsace">week-end �nologique en Alsace</a> � la crois�e du go�t et du patrimoine.</p>

            <h2 class="font-bold mt-3">Mieux qu�un cours de d�gustation de vin, s�journez chez le vigneron !</h2>
            <p class="mt-2">Envie de partir � la rencontre des hommes et des femmes qui �laborent le vin ? Quoi de mieux que des <a href="https://www.vinotrip.com/fr/blog/partez-en-week-end-en-alsace/">voyages �nologiques</a> en immersion totale dans une propri�t� viticole pour affiner ses connaissances en vin, notamment si vous �tes attir�s par le vin aromatique. Le voyageur retrouve lors de cette initiation toute la chaleur de l�Alsace.</p>

            <h2 class="font-bold mt-3">Passez un moment d�tente et cocooning en Alsace</h2>
            <p class="mt-2">L�h�tel de la Cour du Bailli, situ� dans le vignoble de Bergheim, propose un moment de d�tente in�dit dans son Vitispa tout en pavage traditionnel alsacien dans une authentique cave � vin du XVIe si�cle. Une <a href="https://www.vinotrip.com/fr/blog/se-relaxer-dans-vignobles/">relaxation qui allie spa et vin</a> : la vinoth�rapie. Les prestations sont tr�s surprenantes : vous pourrez appr�cier des gommages � la poudre d�argile de bentonite m�lang�e � des p�pins finement broy�s avec du jus de raisin�Pourquoi ne pas offrir un week-end romantique � votre dulcin�(e) ?</p>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Tourisme et activit�s en Alsace</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/castle-1680453_640.jpg" alt="chateaux alsace">
                <img class="mt-5 ml-2 rounded-lg" src="https://www.vinotrip.com/img/cms/alsace-972572_640.jpg" alt="villages alsace">
            </div>

            <div>
                <h2 class="font-bold mt-5">Le tourisme alsacien en quelques chiffres</h2>
                <ul class=" list list-disc list-inside">
                    <li>7 sentiers de grandes randonn�es</li>
                    <li>11 000 km de sentiers balis�s pour se promener � pieds</li>
                    <li>1 vignoble, 1 routes des vins de 170 km et 7 c�pages</li>
                    <li>13 domaines skiables</li>
                    <li>plus de 420 km de voies navigables pour des promenades et sorties au fil de l�eau</li>
                    <li>2 500 km de chemin � faire � v�lo, avec le passage du Velotour � travers les vignes</li>
                    <li>262 lieux de visites payants</li>
                    <li>23 lieux incontournables au tourisme de m�moire</li>
                    <li>12 parcours de golfs</li>
                    <li>29 restaurants �toil�s au guide Michelins</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Que faire ? Que voir en Alsace ?</h2>
                <ul class=" list list-disc list-inside">
                    <li>Bateaux-promenades de Strasbourg</li>
                    <li><a href="https://www.vinotrip.com/fr/blog/deguster-verre-de-vin-chateau-du-haut-koenigsbourg/">Ch�teau du Haut-Koenigsbourg</a> � Orschwiller</li>
                    <li>Parc Zoologique et Botanique � Mulhouse</li>
                    <li>Montagne des Singes � Kintzheim</li>
                    <li>Mus�e Unterlinden � Colmar</li>
                    <li>Mont�e � la plate-forme de la Cath�drale Strasbourg</li>
                    <li>Ecomus�e d�Alsace � Ungersheim</li>
                    <li>Le Vaisseau � Strasbourg</li>
                    <li>Cit� de l�Automobile � Mulhouse</li>
                    <li>Centre Europ�en du R�sistant D�port� � Natzwiller</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Ev�nements et f�tes incontournables en Alsace</h2>
                <ul class=" list list-disc list-inside">
                    <li>Les march�s de No�l d�Alsace</li>
                    <li>La f�te du Gewurztraminer � Bergheim � la fin juillet</li>
                    <li>La foire aux Vins de Colmar</li>
                    <li>F�te du Cr�mant</li>
                    <li>Le tour des vignerons � Eguisheim</li>
                    <li>F�tes des Vendanges en Octobre</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Visites de caves et d�gustations des vins d�Alsace</h2>
                <ul class=" list list-disc list-inside">
                    <li>Domaine Jean-Jacques Dietrich � Kaysersberg</li>
                    <li>Domaine Marcel Freyburger, au coeur du vignoble d�Ammerschwihr pour une association insolite chocolat et Grands Crus</li>
                    <li>Au Domaine Kuehn, pour une d�gustation � la lueur d�une flamme</li>
                    <li>Les propri�taires du Domaine Schoenheitz vous accueillent pour des visites du domaine et vous faire d�couvrir des d�gustations gastronomiques (accords vins et Munster).</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez �tre int�ress�s par</h2>
            <div class="flex justify-center">
                <div class=" grid grid-cols-2 mt-2">
                    <RouterLink to="/vignoble/val-de-loire" title="Val de Loire">Vignoble du Val de Loire</RouterLink>
                    <RouterLink to="/vignoble/champagne" title="Champagne">Vignoble de Champagne</RouterLink>
                    <RouterLink to="/vignoble/bordeaux" title="Bordeaux">Vignoble de Bordeaux</RouterLink>
                    <RouterLink to="/vignoble/bourgogne" title="Bourgogne">Vignoble de Bourgogne</RouterLink>
                    <RouterLink to="/vignoble/beaujolais" title="Beaujolais">Vignoble du Beaujolais</RouterLink>
                    <RouterLink to="/vignoble/provence" title="Provence">Vignoble de Provence</RouterLink>
                    <RouterLink to="/vignoble/sud-ouest" title="Sud Ouest">Vignoble du Sud Ouest</RouterLink>
                    <RouterLink to="/vignoble/languedoc-roussillon" title="Languedoc Roussillon">Vignoble du Languedoc Roussillon</RouterLink>
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rh�ne">Vignoble de la Vall�e de Rh�ne</RouterLink>
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