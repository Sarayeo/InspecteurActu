<!-- <section class="w-full flex flex-col items-center justify-between px-4 sm:px-6 py-12 text-white opacity-0 transform translate-y-10 transition-all duration-1000">
    <div class='w-full sm:w-4/5 mx-auto py-10'>
        <h2 class="text-4xl font-bold mb-8 w-max mx-auto md:mx-0 md:text-left border-b-4 border-white py-4">Ce qu'on propose !</h2>
    </div>
    <div class="w-full sm:w-4/5 mx-auto flex flex-col md:flex-row">
        <div class="md:w-1/2 pr-8 mb-4 md:mb-0 text-center md:text-left"> 
            <h3 class="text-2xl font-semibold mb-4">Titre de l'Information</h3>
            <p class="text-lg mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, assumenda!
            </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
            <img src='' alt="Image illustrative" class="rounded-lg shadow-lg max-w-full h-auto">
        </div>
    </div>
</section>

<section class="w-full flex flex-col items-center justify-between px-4 sm:px-6 py-12 text-white mt-32 opacity-0 transform translate-y-10 transition-all duration-1000">
    <div class="w-full sm:w-4/5 mx-auto flex md:flex-row flex-col-reverse">
        <div class="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img src='' alt="Image illustrative" class="rounded-lg shadow-lg max-w-full h-auto">
        </div>
        <div class="md:w-1/2 pr-8 text-center md:text-left"> 
            <h3 class="text-2xl font-semibold mb-4">Titre de l'Information</h3>
            <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, assumenda!
            </p>
        </div>
    </div>
</section>

<section class="w-full flex flex-col items-center justify-between px-4 sm:px-6 py-12 text-white mt-32 opacity-0 transform translate-y-10 transition-all duration-1000">
    <div class="w-full sm:w-4/5 mx-auto flex flex-col md:flex-row">
        <div class="md:w-1/2 pr-8 mb-4 md:mb-0 text-center md:text-left"> 
            <h3 class="text-2xl font-semibold mb-4">Titre de l'Information</h3>
            <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, assumenda!
            </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
            <img src='' alt="Image illustrative" class="rounded-lg shadow-lg max-w-full h-auto">
        </div>
    </div>
</section>  -->

<div class="container mx-auto my-16 px-4 flex flex-col md:flex-row items-start justify-between text-white">
    <!-- Colonne gauche : Titre et texte -->
    <div class="md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos features</h2>
        <p class="text-lg ">
            Retrouvez différentes fonctionnalités passionnantes qui rendront votre expérience de jeu unique. Préparez-vous à plonger dans un univers riche et dynamique, où chaque joueur pourra explorer, créer et interagir de manière innovante. <br> <br>

Restez à l’écoute pour en savoir plus sur ce qui vous attend !
        </p>
        <div class="mt-16 translate-y-5 transition-all duration-1000 ease-out">
            <button 
                class="text-white px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-500"
                onclick="window.open('https://inspecteuractuiim.netlify.app/', '_blank')">
                Jouer
            </button>

        </div>
    </div>

    <!-- Section des cartes -->
    <div class="md:w-1/2 relative flex justify-center items-center flex-col md:flex-row text-black">
        <!-- Carte gauche -->
        <div class="card left-card w-48 h-64 bg-gray-300 rounded-lg shadow-lg relative transform -translate-x-12 md:translate-x-0 mb-4 md:mb-0 flex flex-col items-center justify-center">
            <!-- Contenu de la carte gauche -->
            <div class="p-4 text-center">
                <i class="fas fa-trophy fa-2x mb-2 text-yellow-500"></i>
                <h3 class="text-lg font-bold">Classement en fonction d’un système de points</h3>
            </div>
        </div>
    
        <!-- Carte du milieu -->
        <div class="card middle-card w-56 h-64 bg-white rounded-lg shadow-2xl relative z-10 translate-y-4 md:translate-y-0 flex flex-col items-center justify-center">
            <!-- Contenu de la carte du milieu -->
            <div class="p-6 text-center">
                <i class="fas fa-question-circle fa-2x mb-2 text-red-400"></i>
                <h3 class="text-xl font-bold mb-4">Système de quizz interactif</h3>
            </div>
        </div>
    
        <!-- Carte droite -->
        <div class="card right-card w-48 h-64 bg-gray-300 rounded-lg shadow-lg relative transform translate-x-12 md:translate-x-0 mb-4 md:mb-0 flex flex-col items-center justify-center">
            <!-- Contenu de la carte droite -->
            <div class="p-4 text-center">
                <i class="fas fa-newspaper fa-2x mb-2 text-purple-400"></i>
                <h3 class="text-lg font-bold">Jeu adaptable en fonction des actualités du moment</h3>
            </div>
        </div>
    </div>

    
</div>
<style>
 /* CSS personnalisé pour améliorer le responsive */
/* CSS personnalisé pour améliorer le responsive */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transition douce pour les cartes */
}

/* Pour les petits écrans */
@media (max-width: 767px) {
    .left-card, .right-card {
        width: 90%; /* Réduit la largeur des cartes pour qu'elles s'ajustent sur mobile */
        margin: 10px 0; /* Ajoute une marge autour des cartes */
        transform: none; /* Supprime toute transformation */
    }

    .middle-card {
        width: 90%; /* La carte centrale occupe également 90% de la largeur */
        margin: 10px 0; /* Ajoute une marge autour de la carte centrale */
        translate: 0 0; /* Supprime toute translation */
    }
    .middle-card {
        translate: 0 -15px; /* Ajuste la position de la carte centrale */
    }
}

/* Pour les écrans de taille moyenne et plus */
@media (min-width: 768px) {
    .left-card {
        transform: translateX(24px); /* Ajuste la position de la carte gauche */
    }

    .middle-card {
        translate: 0 20px; /* Ajuste la position de la carte centrale */
    }

    .right-card {
        transform: translateX(-24px); /* Ajuste la position de la carte droite */
    }
}

/* Amélioration des ombres lors du hover */
.card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Augmente l'ombre lors du survol */
    transform: scale(1.05); /* Légère augmentation de la taille */
}


</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });
  });
</script>
