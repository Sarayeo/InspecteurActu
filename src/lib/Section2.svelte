<script>
    import image1 from '../assets/i1.png';

    document.addEventListener("DOMContentLoaded", function() {
        // Sélection des éléments à animer
        const elementsToAnimate = document.querySelectorAll('#animatedImage, #animatedText');

        // Création de l'observateur
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target); // Arrêter d'observer cet élément une fois qu'il est visible
                }
            });
        }, { threshold: 0.1 }); // 10% de l'élément visible pour déclencher l'animation

        // Observer chaque élément
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    });
</script>

<section class="w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white mt-12 md:mt-24 lg:mt-36">
    <!-- Colonne gauche : Texte et bouton -->
    <div id="animatedText" class="text-center md:text-left md:w-1/2 space-y-6 md:pr-16 opacity-0 translate-y-4 transition duration-700">
        <h2 class="text-4xl font-bold">Notre jeu</h2>
        <p class="text-lg">
            Inspecteur - Actu vous plonge au cœur des événements les plus marquants et récents de notre époque. Vous aurez l’opportunité d’explorerez des affaires et des situations d’actualité inspirées de faits réels, qu'il s'agisse de scandales politiques, de percées scientifiques ou de phénomènes sociaux. Chaque session de jeu est une opportunité d'aiguiser votre esprit critique, de tester vos connaissances sur les sujets et de découvrir les nuances cachées derrière les gros titres à la une.
        </p>
        <button class="px-6 py-3 text-white rounded-lg border border-white hover:bg-white hover:text-black transition duration-300">
            Découvrir le jeu
        </button>
    </div>

    <!-- Colonne droite : Image -->
    <div id="animatedImage" class="md:w-1/2 mt-8 md:mt-0 flex justify-center opacity-0 translate-y-4 transition duration-700">
        <img src={image1} alt="Image de présentation" class="rounded-lg shadow-lg max-w-full h-auto">
    </div>
</section>

