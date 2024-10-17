<script>
    import plateforme from '../assets/image5.png'
    function getRandomDelay(min = 1000, max = 4000) {
        return Math.random() * (max - min) + min;
    }

    window.addEventListener("DOMContentLoaded", () => {
        const elementsToAnimateRandomly = document.querySelectorAll('.random-animate');

        elementsToAnimateRandomly.forEach((el) => {
            const delay = getRandomDelay(); // Détermine un délai aléatoire
            setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
            }, delay);
        });
    });
</script>

<section class="text-white flex flex-col h-screen bg-cover bg-center bg-journal text-base">
    <div class="flex-grow flex items-center justify-center">
        <div class="text-center">
            <!-- Titre -->
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mt-4 random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out">
                InspecteurActu
            </h1>

            <!-- Description -->
            <p class="mt-14 w-4/5 sm:w-3/4 md:w-2/3 mx-auto text-xl sm:text-2xl md:text-3xl text-white random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out">
                Inspecteur-Actu, le jeu où chaque choix compte ! Saurez-vous démêler le vrai du faux dans un monde d'actualités brûlantes et de scandales retentissants ?
            </p>

            <!-- Logos Mobile et Desktop -->
            <div class="ml-4 flex items-center align-center space-x-4 justify-center mt-14">
                <!-- Logo Mobile -->
                <div class="flex items-center random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out">
                    <i class="fas fa-mobile-alt text-3xl"></i>
                    <p class="ml-2 text-sm font-semibold">Mobile</p>
                </div>

                <!-- Logo Desktop -->
                <div class="hidden md:flex items-center random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out">
                    <i class="fas fa-desktop text-3xl"></i>
                    <p class="ml-2 text-sm font-semibold">Desktop</p>
                </div>
            </div>

            <!-- Bouton Jouer -->
            <div class="mt-16 random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out">
                <button 
    class="text-white px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-1000"
    onclick="window.open('https://inspecteuractuiim.netlify.app/', '_blank')">
    Jouer <i class="fas fa-chevron-down ml-2"></i>
</button>

            </div>
            <img src={plateforme} alt="" class='m-auto mt-8 random-animate opacity-0 translate-y-5 transition-all duration-1000 ease-out'>
        </div>
    </div>
</section>

