<template>
    <div>
        <h1 class=" text-center text-2xl">Le vignoble de Provence</h1>
        <div class=" flex justify-center mt-3">
            <div class=" w-20 border"></div>
        </div>

        <div>
            <h2 class="flex text-3xl mt-10 mb-5" id="title">Sommaire</h2>
            <ul class="list list-disc list-inside">
                <li><a href="#vignoble">Découvrir le vignoble de Provence</a></li>
                <li><a href="#villages">Villes et villages viticoles en Provence</a></li>
                <li><a href="#vins">Routes des vins en Provence</a></li>
                <li><a href="#weekend">Week-end viticole en Provence</a></li>
                <li><a href="#tourisme">Tourisme et activités en Provence</a></li>
            </ul>
        </div>

        <div id="vignoble" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Découvrir le vignoble de Provence</h2>
            <p>
                Le vignoble de Provence rime avec villégiature estivale et ses stations balnéaires célèbres telles que Antibes, Saint-Tropez ou Sainte-Maxime. Mais l’histoire du vignoble de Provence est bien plus riche et remonte à la création de la ville de Marseille par les Phocéens, peuple Grec, en 600 avant JC. Ils furent les premiers à établir des plants de vigne et à produire du vin en France.
            </p>
            <p class="mt-3">
                La viticulture en Provence est bien entendu marquée par le climat méditerranéen, mais aussi par le terroir, calcaire et sec dans les Alpilles, où garrigues, pins et oliviers côtoient les vignes. L’ensemble du vignoble est frappé par le soleil et par les vents, notamment le Mistral.
            </p>
            <p class="mt-3">
                Ces conditions climatiques font des vins de Provence des breuvages généralement vifs et frais, souvent fruités et à boire jeunes, bien qu’il existe de très bons vins de garde du côté de Bandol ou de Bellet.
            </p>
        </div>

        <div id="villages" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Villes et villages viticoles en Provence</h2>
            <p>
                Le vignoble de Provence s’étend sur les départements du Var, des Bouches-du-Rhône et des Alpes-de-Haute-Provence.
            </p>
            <p class="mt-2">
                Unique au monde, ce vignoble bénéficie d’un paysage particulièrement varié. Balayé par le mistral, la Provence jouit d'un climat ensoleillé, chaud et sec. Tant de variantes qui confèrent à la Provence son caractère si particulier.
            </p>
            <p class="mt-2">
                Pour connaître ses vins, sillonnez les petits villages de la Provence. De Marseille à Baux de Provence en passant par Aix-en Provence.
            </p>
            <div class="flex justify-center">
                <img class="mt-5 rounded-lg" src="https://www.vinotrip.com/img/cms/gordes-1460318_640.jpg" alt="village alsace">
            </div>

            <p class="mt-2">Parmi les plus réputés, découvrez :</p>
            <h2 class="font-bold mt-3">Bandol</h2>
            <p class="mt-2">Appellation la plus vaste, Bandol est la plus connue des appellations de Provence. La vigne s’étend du massif de la Sainte-Baume, jusqu’au rivage de la Méditerranée.</p>

            <h2 class="font-bold mt-3">Le vin de Cassis</h2>
            <p class="mt-2">Il est l’un des premiers à avoir reçu l'appellation d’origine contrôlée dès 1936. L’AOC Cassis est produite par 12 domaines dont les 196 hectares de vignes sont exclusivement situées sur la commune de Cassis.</p>

            <p class="mt-2">
                L'appellation Côtes de Provence couvre plus de 20.000 hectares sur 3 départements : le Var, les Bouches-du-Rhône et une enclave dans les Alpes
            </p>
            <h2 class="font-bold mt-3">Coteaux varois</h2>
            <p class="mt-2">Situé à une moyenne de 350 m d'altitude, le vignoble des Coteaux Varois en Provence couvre 2500 hectares de vignes, délimités au sein de 28 communes du Var.</p>
        </div>

        <div id="vins" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Routes des vins en Provence</h2>
            <p>
                Imaginez-vous sous le soleil radieux du sud de la France, face de la mer méditerranée, aux pieds des vignes, un verre de vin rosé ou de vin rouge à la main, bienvenue sur la <RouterLink to="/route-provence">route des vins de Provence</RouterLink> !
            </p>
            <p class="mt-3">Voici 3 itinéraires pour sillonner le vignoble provençal de long en large :</p>
            <ul class="mt-2 list list-disc list-inside">
                <li><span class="font-bold">La route des vins de Coteaux d'Aix en Provence</span> : pour partir à la rencontre des vignerons qui vous feront partager leur savoir-faire</li>
                <li><span class="font-bold">Initiez-vous aux vins des Côtes de Provence</span> : longez la côte méditerranéenne pour une dégustation des plus célèbres vins de Bandol et de Cassis.</li>
                <li><span class="font-bold">La route des vins du Var</span> : pour découvrir les 1 700 hectares de vignes aux reliefs marqués de la région varoise.</li>
            </ul>
        </div>

        <div id="weekend" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Week-end viticole en Provence</h2>
            <p>
                Nos <a href="https://www.vinotrip.com/fr/sejours-oenologiques-provence">week-ends “dégustation” en Provence</a> vous emmèneront au cœur des vignobles et des domaines, au contact de vignerons passionnés et à la rencontre d’hôtes chaleureux qui vous accueilleront avec convivialité dans leurs demeures.
            </p>
        </div>

        <div id="tourisme" class="text-justify">
            <h2 class=" flex text-3xl mt-10 mb-5" id="title">Tourisme et activités en Provence</h2>
            <p>
                La Provence, c’est le Sud, le vin rosé, les vacances ! Le vignoble provençal, situé entre mer et montagne, évoque des paysages pittoresques le long du littoral méditerranéen, le soleil, des après-midis en famille ou entre amis à l’ombre de la tonnelle, bref : des vacances réussies.
            </p>
            <ul class="mt-2 list list-disc list-inside">
                <li>Initiez-vous à la dégustation des vins de Provence</li>
                <li>Séjours oenologiques en Provence : à la rencontre de nos domaines et châteaux partenaires</li>
                <li>Insolites : Partez à la découverte des <a href="https://www.vinotrip.com/fr/blog/domaines-viticoles-des-stars/">domaines viticoles des stars</a> en Provence</li>
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