<section class="text-white w-full text-center mt-8 px-4">
    <h2 class="text-4xl md:text-5xl opacity-0 transform translate-y-10 transition-all duration-1000" id="title">Et bien plus encore ...</h2>
    <p class="text-lg md:text-xl mt-4 opacity-0 transform translate-y-10 transition-all duration-1000 delay-200" id="subtitle">A l’avenir vous retrouverez plusieurs feature</p>
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-10">
        
        <!-- Première fonctionnalité -->
        <div class="flex flex-col border-l-4 p-4 opacity-0 transform translate-y-10 transition-all duration-1000 delay-300" style="border-color: #00B8FF;" id="feature1">
            <h3 class="text-xl font-semibold mb-2" style="color: #00B8FF;">Section dédier au compte prenium</h3>
            <p>Une page dédié au compte prenium qui vous permettra a la fois de créer des histoires mais aussi d'avoir des exclus.</p>
        </div>
        
        <!-- Deuxième fonctionnalité -->
        <div class="flex flex-col border-r-4 md:border-r-0 md:border-l-4 p-4 opacity-0 transform translate-y-10 transition-all duration-1000 delay-400" style="border-color: #F9686C;" id="feature2">
            <h3 class="text-xl font-semibold mb-2" style="color: #F9686C;">Systeme d'amitier</h3>
            <p>Echanger,Partager et Jouer avec vos amis afin de profiter encore + de Inspecteur-Actu </p>
        </div>

        <!-- Troisième fonctionnalité -->
        <div class="flex flex-col border-l-4 p-4 opacity-0 transform translate-y-10 transition-all duration-1000 delay-500" style="border-color: #21CE88;" id="feature3">
            <h3 class="text-xl font-semibold mb-2" style="color: #21CE88;">Des tournois !</h3>
            <p>Un système de classement sera mis en place pour les plus déterminées</p>
        </div>

        <!-- Quatrième fonctionnalité -->
        <div class="flex flex-col border-r-4 md:border-r-0 md:border-l-4 p-4 opacity-0 transform translate-y-10 transition-all duration-1000 delay-600" style="border-color: #B289E5;" id="feature4">
            <h3 class="text-xl font-semibold mb-2" style="color: #B289E5;">Liker les actualités</h3>
            <p>Vous pourrez bientôt like vos actualités et histoires préférés pour les mettres en valeur !</p>
        </div>
    </div>
</section>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('#title, #subtitle, #feature1, #feature2, #feature3, #feature4');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
</script>
