<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble d'Alsace</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <p class="text-justify">
            Arpenter l’étroite bande de coteaux entre Strasbourg et Mulhouse en passant par Colmar est une expérience touristique vinicole à ne pas manquer ! Le vignoble alsacien est en perpétuelle évolution grâce à la qualité de ses vins et se singularise par sa jeunesse, ses influences transfrontalières et son histoire.
        </p>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class=" list list-disc list-inside">
                <li><a href="#vignoble">Le vignoble d'Alsace, un vignoble jeune malmené par l'histoire</a></li>
                <li><a href="#villages">Villes et villages du vignoble alsacien</a></li>
                <li><a href="#route">Découvrez l'Alsace sur la route des vins</a></li>
                <li><a href="#weekend">3 raisons de venir en week-end en Alsace</a></li>
                <li><a href="#tourisme">Tourisme et activités en Alsace</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Le vignoble d'Alsace, un vignoble jeune malmené par l'histoire</h2>
            <p>
                Les domaines et vignes d’Alsace ont d’abord été malmenés par les guerres de conquête des rois de France, puis par les conflits franco-allemands. La reconstruction du vignoble s’est opérée à partir des années 60, avec la reconnaissance de l’AOC Alsace, obtenue en 1962, et qui couvrait la totalité de l’aire viticole de l’époque. Le vignoble des années 60 et celui que nous connaissons aujourd’hui sont cependant bien différents : l’apparition du Crémant, la création de l’AOC Grand Cru et l’émergence des vins moelleux et liquoreux ont remodelés le vignoble alsacien tel qu’on le connaît aujourd’hui.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Alsace_1.jpg" alt="carte vignoble alsace">
            </div>

            <h2 class="font-bold mt-5">Géographie du vignoble d’Alsace</h2>
            <p class="mt-2">
                Le vignoble alsacien s’étend du Nord au Sud de l’Alsace, de Strasbourg à Mulhouse, sur une surface totale de production de 15 600 hectares répartie sur 119 communes. Le vignoble peut produire 637 vins AOC-AOP différentes, majoritairement en blanc, mais également en mousseux et aussi le millésime vin rouge. Pour que la liste soit complète, il ne faut pas oublier l’eau-de-vie régionale : le marc d’Alsace !
            </p>
            <p class="mt-2">
                C’est donc au cœur de la plaine du Rhin que se situe la zone de production des vins d’Alsace. Les vignes se développent, d’une part, sur les contreforts orientaux des Vosges, entre environ 170 et 500 mètres d’altitude, et d’autre part dans les petites vallées qui les entaillent. L’ensemble du vignoble est parcourue, sur une longueur de 170 kilomètres, par la <RouterLink to="/route-alsace" title="Route Alsace">fameuse Route des vins d’Alsace</RouterLink> dont le tracé a été défini officiellement en mai 1953 et qui passe par une grande partie des communes du vignoble (67 sur 119) et <a href="https://www.vinotrip.com/fr/blog/sur-la-route-des-vins-dalsace-histoire-appellations">appellations</a> Grands Crus (48 sur 51).
            </p>

            <h2 class="font-bold mt-5">Les appellations des vins d’Alsace</h2>
            <p class="mt-2">
                Cas particulier en France, la totalité du vignoble alsacien est classée AOC Alsace (ou vins d’Alsace).
            </p>
            <p class="mt-2">
                Déguster les vins d’Alsace, c’est se confronter à plus de 600 AOC-AOP différentes, 7 cépages (Muscat, Sylvaner, Pinot Blanc, Pinot Gris, Pinot Noir, Riesling et Gewurztraminer) et 2 assemblages (Edelzwicker, Gentil). Des chiffres vertigineux qui ne doivent pas faire oublier le plaisir des découvertes gustatives et le simple moment de partage de la dégustation. Vous ne trouverez pas un domaine viticole en Alsace qui soit digne de ce nom tant la culture de la vigne est forte. Les ateliers œnologiques et les séances de dégustations dirigés par des professionnels auxquels nous vous proposons de participer durant votre séjour œnologique en Alsace vous guideront parmi cette incroyable mosaïque de saveurs !
            </p>

            <h2 class="mt-3">Superficie</h2>
            <p class="mt-2">plus de 15 000 hectares de vignes</p>

            <h2 class="font-bold mt-3">Production</h2>
            <p class="mt-2">1,5 millions de bouteilles par an, dont :</p>
            <ul class=" list list-disc list-inside">
                <li>80% de vins d’Alsace AOC</li>
                <li>4 % AOC Grands Cru</li>
                <li>16% AOC Crémant</li>
            </ul>

            <h2 class="font-bold mt-3">Cépages</h2>
            <p class="mt-2">7 reconnus - Muscat, Sylvaner, Pinot Blanc, Pinot Gris, Pinot Noir, Riesling et Gewurztraminer</p>

            <h2 class="font-bold mt-3">Encépagement majeurs</h2>
            <p class="mt-2">Riesling (22%), Pinot Blanc (21%) et Crémant, Gewurztraminer (18%)</p>

            <h2 class="font-bold mt-3">Appellations remarquables</h2>
            <ul class=" list list-disc list-inside">
                <li>Alsace Grands Crus : plantés uniquement en cépages nobles (Muscat, Riesling, Pinot Gris et Gewurztraminer)</li>
                <li>Vendanges Tardives et Sélection de Grains Nobles : élaborés à partir de raisins riches en sucre naturel, ils possèdent un potentiel de vieillissement important, et fait unique en France, la chaptalisation est interdite en Alsace !</li>
            </ul>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages du vignoble alsacien</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/strasbourg-90012_640.jpg" alt="villages alsace">
            </div>
            <p class="mt-3">
                Entre ses arômes fruités et ses couleurs riches et aériennes, le vin alsacien est un véritable voyage sensoriel. L'oenotourisme en Alsace vous entraîne à la découverte d'une incroyable diversité de terroirs et cépages bénéficiant d’un climat qui donne des vins parmi les plus généreux et les plus fruités des vins blancs produits dans l’hexagone.
            </p>
            <p class="mt-3">
                Du Nord à Marlenheim - à l’Ouest de Strasbourg au Sud à Thann, le périple viticole de l’Alsace s'étend sur plus de 170 Km. Le vignoble d’Alsace, bordé par la Suisse et l’Allemagne offre un paysage riche de traditions au pied des Vosges, à l’orée intime de la Forêt Noire et de la tranquillité du Rhin. Laissez-vous conter l’Alsace le temps de quelques suggestions de villes touristiques dans la région.
            </p>
            <p class="mt-3">
                Commencez votre voyage à Strasbourg, autrefois cité riche et puissante grâce au commerce du vin, son quartier médiéval de la petite France sur la Grande Île est classé au Patrimoine mondial de l’UNESCO. Notre Dame de Strasbourg a toujours de sa superbe, selon les mots de Victor Hugo un “ Prodige du gigantesque et du délicat”.
            </p>
            <p class="mt-3">
                En s’éloignant de la cité strasbourgeoise, à l’entrée de la vallée de la Bruche, nichée aux pieds des côtés, la ville médiévale de Molsheim est l’excellent point de départ d’un itinéraire viticole. Elle est réputée pour sa gastronomie, son Bruderthal et comme fief des Usines Bugatti.
            </p>
            <p class="mt-3">
                En s’éloignant de la cité strasbourgeoise, à l’entrée de la vallée de la Bruche, nichée aux pieds des côtés, la ville médiévale de Molsheim est l’excellent point de départ d’un itinéraire viticole. Elle est réputée pour sa gastronomie, son Bruderthal et comme fief des Usines Bugatti.
            </p>
            <p class="mt-3">
                En continuant plus au Sud, le voyageur appréciera tomber sur des villes médiévales typiques comme Ribeauvillée, Riquewick ou encore KayserBerg labellisées “Terre & Vin du pays de Colmar” où se mêlent paysages de plaines, massifs vosgiens et vignobles. Un panorama médiéval hors du temps s'offre à vous : une vue de maisons à colombages et des églises romanes où les ruelles s’entrelacent à l’abri des remparts.
            </p>
            <p class="mt-3">
                L'Alsace est la région avec le plus d’édifices d’art roman et forteresses médiévales. Plus au Sud de la route des vins, Colmar et Thann marquent la fin du périple Alsacien.
            </p>
            <p class="mt-3">
                Colmar, Ville d’art et d’histoire est une destination unique pour les amoureux du vins avec 37 communes viticoles et son quartier de la “Petite Venise”. Thann, ville de 8000 habitants, s’est faite une réputation depuis le XIII siècle grâce au vin et son célèbre vignoble du <a href="https://www.vinotrip.com/fr/blog/rangen-grand-cru-alsace-meconnu/">Rangen</a>.
            </p>
        </div>

        <div id="route" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrez l'Alsace sur la route des vins</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/Niedermorschwihr.jpg" alt="route vignoble alsace">
            </div>
            <p class="mt-3">
                La zone de production de ses vins se situe au cœur de la plaine du Rhin, entre les contreforts orientaux des Vosges et les vallées qui les entaillent, et dont le microclimat sec crée les conditions parfaites à la culture des raisins blancs notamment.
            </p>
            <p class="mt-3">
                L'ensemble du vignoble est parcouru par la légendaire  <RouterLink to="/route-alsace" title="Route Alsace">Route des vins d’Alsace</RouterLink>, qui passe par une grande partie des communes du vignoble et appellations Grands Crus. Gourmandise, oenologie et patrimoine… une itinérance inédite qui permet de s’initier à la dégustation des vins d’Alsace, de musarder dans les ruelles des splendides cités viticoles comme Ribeauvillé et de savourer les spécialités locales comme les choucroutes, les baeckcoffes ...
            </p>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">3 raisons de venir en week-end en Alsace</h2>
            <p>
                L’Alsace est un vignoble chaleureux et festif.
            </p>

            <h2 class="font-bold mt-3">Faites de l’oenotourisme entre amis ou en couple pour s’évader</h2>
            <p class="mt-2">Profitez d’une escapade citadine à Strasbourg, Colmar ou Mulhouse pour sillonner les alentours sur les célèbres 170 km de route des vins. En couple ou entre amis, vivez une expérience unique dans les vignobles le temps d’un <a href="https://www.vinotrip.com/fr/sejours-oenologiques-alsace">week-end œnologique en Alsace</a> à la croisée du goût et du patrimoine.</p>

            <h2 class="font-bold mt-3">Mieux qu’un cours de dégustation de vin, séjournez chez le vigneron !</h2>
            <p class="mt-2">Envie de partir à la rencontre des hommes et des femmes qui élaborent le vin ? Quoi de mieux que des <a href="https://www.vinotrip.com/fr/blog/partez-en-week-end-en-alsace/">voyages œnologiques</a> en immersion totale dans une propriété viticole pour affiner ses connaissances en vin, notamment si vous êtes attirés par le vin aromatique. Le voyageur retrouve lors de cette initiation toute la chaleur de l’Alsace.</p>

            <h2 class="font-bold mt-3">Passez un moment détente et cocooning en Alsace</h2>
            <p class="mt-2">L’hôtel de la Cour du Bailli, situé dans le vignoble de Bergheim, propose un moment de détente inédit dans son Vitispa tout en pavage traditionnel alsacien dans une authentique cave à vin du XVIe siècle. Une <a href="https://www.vinotrip.com/fr/blog/se-relaxer-dans-vignobles/">relaxation qui allie spa et vin</a> : la vinothérapie. Les prestations sont très surprenantes : vous pourrez apprécier des gommages à la poudre d’argile de bentonite mélangée à des pépins finement broyés avec du jus de raisin…Pourquoi ne pas offrir un week-end romantique à votre dulciné(e) ?</p>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Tourisme et activités en Alsace</h2>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/castle-1680453_640.jpg" alt="chateaux alsace">
                <img class="mt-5 ml-2 rounded-lg" src="https://www.vinotrip.com/img/cms/alsace-972572_640.jpg" alt="villages alsace">
            </div>

            <div>
                <h2 class="font-bold mt-5">Le tourisme alsacien en quelques chiffres</h2>
                <ul class=" list list-disc list-inside">
                    <li>7 sentiers de grandes randonnées</li>
                    <li>11 000 km de sentiers balisés pour se promener à pieds</li>
                    <li>1 vignoble, 1 routes des vins de 170 km et 7 cépages</li>
                    <li>13 domaines skiables</li>
                    <li>plus de 420 km de voies navigables pour des promenades et sorties au fil de l’eau</li>
                    <li>2 500 km de chemin à faire à vélo, avec le passage du Velotour à travers les vignes</li>
                    <li>262 lieux de visites payants</li>
                    <li>23 lieux incontournables au tourisme de mémoire</li>
                    <li>12 parcours de golfs</li>
                    <li>29 restaurants étoilés au guide Michelins</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Que faire ? Que voir en Alsace ?</h2>
                <ul class=" list list-disc list-inside">
                    <li>Bateaux-promenades de Strasbourg</li>
                    <li><a href="https://www.vinotrip.com/fr/blog/deguster-verre-de-vin-chateau-du-haut-koenigsbourg/">Château du Haut-Koenigsbourg</a> à Orschwiller</li>
                    <li>Parc Zoologique et Botanique à Mulhouse</li>
                    <li>Montagne des Singes à Kintzheim</li>
                    <li>Musée Unterlinden à Colmar</li>
                    <li>Montée à la plate-forme de la Cathédrale Strasbourg</li>
                    <li>Ecomusée d’Alsace à Ungersheim</li>
                    <li>Le Vaisseau à Strasbourg</li>
                    <li>Cité de l’Automobile à Mulhouse</li>
                    <li>Centre Européen du Résistant Déporté à Natzwiller</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Evènements et fêtes incontournables en Alsace</h2>
                <ul class=" list list-disc list-inside">
                    <li>Les marchés de Noël d’Alsace</li>
                    <li>La fête du Gewurztraminer à Bergheim à la fin juillet</li>
                    <li>La foire aux Vins de Colmar</li>
                    <li>Fête du Crémant</li>
                    <li>Le tour des vignerons à Eguisheim</li>
                    <li>Fêtes des Vendanges en Octobre</li>
                </ul>
            </div>

            <div>
                <h2 class="font-bold mt-5">Visites de caves et dégustations des vins d’Alsace</h2>
                <ul class=" list list-disc list-inside">
                    <li>Domaine Jean-Jacques Dietrich à Kaysersberg</li>
                    <li>Domaine Marcel Freyburger, au coeur du vignoble d’Ammerschwihr pour une association insolite chocolat et Grands Crus</li>
                    <li>Au Domaine Kuehn, pour une dégustation à la lueur d’une flamme</li>
                    <li>Les propriétaires du Domaine Schoenheitz vous accueillent pour des visites du domaine et vous faire découvrir des dégustations gastronomiques (accords vins et Munster).</li>
                </ul>
            </div>
        </div>

        <div>
            <h2 class=" flex text-3xl mt-10 mb-5 justify-center" id="title">Vous pourriez être intéressés par</h2>
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
                    <RouterLink to="/vignoble/vallee-du-rhone" title="Rhône">Vignoble de la Vallée de Rhône</RouterLink>
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