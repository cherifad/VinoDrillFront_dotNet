<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble de Provence</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#vignoble">D�couvrir le vignoble de Provence</a></li>
                <li><a href="#villages">Villes et villages viticoles en Provence</a></li>
                <li><a href="#vins">Routes des vins en Provence</a></li>
                <li><a href="#weekend">Week-end viticole en Provence</a></li>
                <li><a href="#tourisme">Tourisme et activit�s en Provence</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">D�couvrir le vignoble de Provence</h2>
            <p>
                Le vignoble de Provence rime avec vill�giature estivale et ses stations baln�aires c�l�bres telles que Antibes, Saint-Tropez ou Sainte-Maxime. Mais l�histoire du vignoble de Provence est bien plus riche et remonte � la cr�ation de la ville de Marseille par les Phoc�ens, peuple Grec, en 600 avant JC. Ils furent les premiers � �tablir des plants de vigne et � produire du vin en France.
            </p>
            <p class="mt-3">
                La viticulture en Provence est bien entendu marqu�e par le climat m�diterran�en, mais aussi par le terroir, calcaire et sec dans les Alpilles, o� garrigues, pins et oliviers c�toient les vignes. L�ensemble du vignoble est frapp� par le soleil et par les vents, notamment le Mistral.
            </p>
            <p class="mt-3">
                Ces conditions climatiques font des vins de Provence des breuvages g�n�ralement vifs et frais, souvent fruit�s et � boire jeunes, bien qu�il existe de tr�s bons vins de garde du c�t� de Bandol ou de Bellet.
            </p>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages viticoles en Provence</h2>
            <p>
                Le vignoble de Provence s��tend sur les d�partements du Var, des Bouches-du-Rh�ne et des Alpes-de-Haute-Provence.
            </p>
            <p class="mt-2">
                Unique au monde, ce vignoble b�n�ficie d�un paysage particuli�rement vari�. Balay� par le mistral, la Provence jouit d'un climat ensoleill�, chaud et sec. Tant de variantes qui conf�rent � la Provence son caract�re si particulier.
            </p>
            <p class="mt-2">
                Pour conna�tre ses vins, sillonnez les petits villages de la Provence. De Marseille � Baux de Provence en passant par Aix-en Provence.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/gordes-1460318_640.jpg" alt="village alsace">
            </div>

            <p class="mt-2">Parmi les plus r�put�s, d�couvrez :</p>
            <h2 class="font-bold mt-3">Bandol</h2>
            <p class="mt-2">Appellation la plus vaste, Bandol est la plus connue des appellations de Provence. La vigne s��tend du massif de la Sainte-Baume, jusqu�au rivage de la M�diterran�e.</p>

            <h2 class="font-bold mt-3">Le vin de Cassis</h2>
            <p class="mt-2">Il est l�un des premiers � avoir re�u l'appellation d�origine contr�l�e d�s 1936. L�AOC Cassis est produite par 12 domaines dont les 196 hectares de vignes sont exclusivement situ�es sur la commune de Cassis.</p>

            <p class="mt-2">
                L'appellation C�tes de Provence couvre plus de 20.000 hectares sur 3 d�partements : le Var, les Bouches-du-Rh�ne et une enclave dans les Alpes
            </p>
            <h2 class="font-bold mt-3">Coteaux varois</h2>
            <p class="mt-2">Situ� � une moyenne de 350 m d'altitude, le vignoble des Coteaux Varois en Provence couvre 2500 hectares de vignes, d�limit�s au sein de 28 communes du Var.</p>
        </div>

        <div id="vins" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Routes des vins en Provence</h2>
            <p>
                Imaginez-vous sous le soleil radieux du sud de la France, face de la mer m�diterran�e, aux pieds des vignes, un verre de vin ros� ou de vin rouge � la main, bienvenue sur la <RouterLink to="/route-provence">route des vins de Provence</RouterLink> !
            </p>
            <p class="mt-3">Voici 3 itin�raires pour sillonner le vignoble proven�al de long en large :</p>
            <ul class="mt-2 list list-disc list-inside">
                <li><span class="font-bold">La route des vins de Coteaux d'Aix en Provence</span> : pour partir � la rencontre des vignerons qui vous feront partager leur savoir-faire</li>
                <li><span class="font-bold">Initiez-vous aux vins des C�tes de Provence</span> : longez la c�te m�diterran�enne pour une d�gustation des plus c�l�bres vins de Bandol et de Cassis.</li>
                <li><span class="font-bold">La route des vins du Var</span> : pour d�couvrir les 1 700 hectares de vignes aux reliefs marqu�s de la r�gion varoise.</li>
            </ul>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-end viticole en Provence</h2>
            <p>
                Nos <a href="https://www.vinotrip.com/fr/sejours-oenologiques-provence">week-ends �d�gustation� en Provence</a> vous emm�neront au c�ur des vignobles et des domaines, au contact de vignerons passionn�s et � la rencontre d�h�tes chaleureux qui vous accueilleront avec convivialit� dans leurs demeures.
            </p>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activit�s en Provence</h2>
            <p>
                La Provence, c�est le Sud, le vin ros�, les vacances ! Le vignoble proven�al, situ� entre mer et montagne, �voque des paysages pittoresques le long du littoral m�diterran�en, le soleil, des apr�s-midis en famille ou entre amis � l�ombre de la tonnelle, bref : des vacances r�ussies.
            </p>
            <ul class="mt-2 list list-disc list-inside">
                <li>Initiez-vous � la d�gustation des vins de Provence</li>
                <li>S�jours oenologiques en Provence : � la rencontre de nos domaines et ch�teaux partenaires</li>
                <li>Insolites : Partez � la d�couverte des <a href="https://www.vinotrip.com/fr/blog/domaines-viticoles-des-stars/">domaines viticoles des stars</a> en Provence</li>
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