<script>
    import demo from '../assets/demo.png';
  
    document.addEventListener("DOMContentLoaded", function() {
      const elementsToAnimate = document.querySelectorAll('#animatedImage, #animatedText');
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      elementsToAnimate.forEach(element => {
        observer.observe(element);
      });
    });
  </script>
  
  <section class="w-full flex flex-col md:flex-row items-center justify-between px-6 py-12 text-white mt-32" style="background-color: #0D2847;">
    <div class="w-[90%] md:w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white">
        
        <!-- Image avec animation -->
        <div id="animatedImage" class="flex justify-center md:justify-start mb-8 md:mb-0 md:w-7/12 opacity-0 translate-y-10 transition-all duration-1000"> <!-- 70% -->
            <img src={demo} alt="Image illustrative" class="rounded-lg shadow-lg max-w-full h-auto object-cover w-full"> 
        </div>

        <!-- Colonne droite : Titre et Texte avec animation -->
        <div id="animatedText" class="text-center md:text-left space-y-4 md:w-5/12 md:ml-20 opacity-0 translate-y-10 transition-all duration-1000 delay-200"> <!-- 30% -->
            <h2 class="text-xl md:text-4xl font-bold">Êtes-vous prêt à plonger dans un nouvel univers de jeu ?</h2>
            <p class="text-base md:text-lg">
                Nous sommes ravis de vous annoncer la sortie de la démo de notre jeu tant attendu ! Cette démo vous donnera un aperçu exclusif de ce qui vous attend et vous permettra de découvrir les mécaniques de jeu, et les actualités passionnantes qui vous attendent. <br>
                
                Explorez des histoires captivantes, testez vos compétences et familiarisez-vous avec les différentes fonctionnalités avant la sortie officielle. C'est l'occasion parfaite pour vous de faire partie de cette aventure dès le début ! <br>
                
            </p>
        </div>
    </div>
</section>

  
  