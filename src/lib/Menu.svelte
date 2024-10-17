<script>
    let isMenuOpen = false;

    // Pour les animations d'apparition
    window.addEventListener("DOMContentLoaded", () => {
        const elementsToAnimate = document.querySelectorAll('.animate-on-load');
        elementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 150); // Diffère l'animation de 150ms pour chaque élément
        });
    });
</script>

<header class="fixed flex items-center justify-between p-4 w-11/12 left-1/2 transform -translate-x-1/2 z-50 text-white bg-black rounded-xl mt-2">
    <nav class="flex ml-4 items-center">
        <!-- Logo -->
        <div class="logo mr-4 animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out">
            <p class="font-bold text-lg sm:text-xl">IActu</p>
        </div>
        
        <ul class="hidden md:flex space-x-4 lg:space-x-10 ml-4 lg:ml-12 text-sm sm:text-base">
            <li class="animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"><a href="#home" class="text-gray-400 hover:text-white transition-colors duration-300">Le jeu</a></li>
            <li class="animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"><a href="#about" class="text-gray-400 hover:text-white transition-colors duration-300">Nos valeurs</a></li>
            <li class="animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"><a href="#services" class="text-gray-400 hover:text-white transition-colors duration-300">Mise à niveau</a></li>
            <li class="animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"><a href="#contact" class="text-gray-400 hover:text-white transition-colors duration-300">Démo</a></li>
            <li class="animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"><a href="#features" class="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
        </ul>
        
        <ul class={`flex-col absolute top-16 left-0 w-full bg-black text-white p-6 space-y-4 ${isMenuOpen ? '' : 'hidden'} md:hidden`}>
            <li><a href="#home">Le jeu</a></li>
            <li><a href="#about">Démo</a></li>
            <li><a href="#services">Features</a></li>
            <li><a href="#contact">Nouveauté</a></li>
            <li><a href="#features">Avis</a></li>
        </ul>
    </nav>

    <!-- Bouton avec animation -->
    <button 
    class="py-2 sm:py-3 px-3 sm:px-4 border-2 border-white text-white bg-transparent mr-2 sm:mr-4 rounded-lg animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out"
    onclick="window.open('https://inspecteuractuiim.netlify.app/', '_blank')">
    Découvrir le jeu
</button>


    <div class="md:hidden mr-4 animate-on-load opacity-0 translate-y-5 transition-all duration-1000 ease-out">
        <button on:click={() => isMenuOpen = !isMenuOpen} class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>
    </div>
</header>

<style>
    /* Initialement, les éléments sont invisibles et déplacés vers le bas */
    .translate-y-5 {
        transform: translateY(20px);
    }
    
    .translate-y-0 {
        transform: translateY(0);
    }

    .opacity-0 {
        opacity: 0;
    }

    .opacity-100 {
        opacity: 1;
    }
</style>
