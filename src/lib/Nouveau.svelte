<script>
    import coop from '../assets/coop.png'; // Chemin d'importation de l'image
    import raconte from '../assets/raconte.png'

    document.addEventListener("DOMContentLoaded", function() {
        // Sélection des éléments à animer
        const elementsToAnimate = document.querySelectorAll('#animatedSection1, #animatedSection2');

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

<div style="background-color: #0D2847;">
    <section id="animatedSection1" class="w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white mt-12 md:mt-24 lg:mt-36 opacity-0 translate-y-4 transition duration-700">
        <!-- Colonne gauche : Texte et bouton -->
        <div class="text-center md:text-left md:w-1/2 space-y-6 md:pr-16">
            <h2 class="text-4xl font-bold text-center border-b-4 border-white py-4 w-auto mx-auto">Le 2v2 arrive bientôt !</h2>
            <h3 class="text-lg">Avez-vous toujours rêvé de défier vos amis dans des combats palpitants ?</h3>
            <p class="text-lg">
                
Nous avons une grande nouvelle pour vous : le mode 2v2 arrive bientôt ! Préparez-vous à former des équipes et à vivre des affrontements épiques avec vos alliés. <br>

Avec cette nouvelle fonctionnalité, vous pourrez faire équipe avec un ami pour affronter d'autres duos, offrant ainsi une expérience de jeu plus stratégique et dynamique. Tous les joueurs auront accès à ce mode excitant ! <br>

Restez attentifs, car cette mise à jour tant attendue est à nos portes. Soyez prêts à relever le défi et à prouver que vous êtes les meilleurs dans ce nouveau mode 2v2 !


            </p>
            <button class="px-6 py-3 text-white rounded-lg border border-white hover:bg-white hover:text-black transition duration-300">
                Rester au courant
            </button>
        </div>

        <!-- Colonne droite : Image -->
        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src={coop} alt="Image de présentation" class="rounded-lg  max-w-full h-1/2">
        </div>
    </section>
</div>

<div>
    <section id="animatedSection2" class="w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white mt-12 md:mt-24 lg:mt-2 opacity-0 translate-y-4 transition duration-700">
        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src={raconte} alt="Image de présentation" class="rounded-lg max-w-full h-1/2">
        </div>
        <div class="text-center md:text-left md:w-1/2 space-y-6 md:pr-16">
            <h2 class="text-4xl font-bold text-center border-b-4 border-white py-4 w-auto mx-auto">Créer votre propre histoire !</h2>
            <h3 class="text-lg">Avez-vous toujours rêvé de raconter votre propre histoire ? <br></h3>
            <p class="text-lg">
                
Bientôt, ce rêve deviendra réalité grâce à notre abonnement premium ! Vous pourrez partager votre récit avec le monde entier et permettre à chacun de vivre votre aventure. <br>

Imaginez un système innovant où les histoires prennent vie, et où chaque joueur peut interagir et influencer le cours de votre récit. Tout le monde aura accès pour jouer à votre histoire ! <br>

Préparez-vous, car cette fonctionnalité arrive très bientôt. Soyez prêt à libérer votre créativité et à faire découvrir votre univers narratif au plus grand nombre. <br>

Restez à l’affût des prochaines annonces !
            </p>
            <button class="px-6 py-3 text-white rounded-lg border border-white hover:bg-white hover:text-black transition duration-300">
                Me tenir informer
            </button>
        </div>
    </section>
</div>
