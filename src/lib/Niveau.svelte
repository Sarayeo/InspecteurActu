<section class="text-white w-full text-center px-4 bg-no-repeat bg-left">
  <p class="text-lg md:text-xl mt-6 opacity-0 transform translate-y-8 transition-all duration-1000 delay-200" id="subtitle">
      Notre portefeuille comprend plus de 300 actualités, dont 8 en plus par jour.
  </p>
  
  <div class="flex flex-col md:flex-row justify-around items-stretch mt-16 w-full md:w-4/5 lg:w-3/5 mx-auto">
      <!-- Première div avec bordure gauche -->
      <div class="flex flex-col items-start border-l-4 border-white pl-4 py-4 h-full opacity-0 transform translate-y-8 transition-all duration-1000 delay-300" id="feature1">
          <p class="flex items-center justify-start text-xl md:text-2xl">
              <span class="text-6xl mr-4" style="line-height: 1;">+300</span> Actualités
          </p>
      </div>

      <!-- Deuxième div avec bordure droite sur mobile et gauche sur grand écran -->
      <div class="flex flex-col items-end border-r-4 border-white md:border-r-0 md:border-l-4 pr-4 py-4 h-full opacity-0 transform translate-y-8 transition-all duration-1000 delay-400" id="feature2">
          <p class="flex items-center justify-end text-xl md:text-2xl ml-6">
              <span class="text-6xl mr-4" style="line-height: 1;">8</span> Ajout d’actualités par jour
          </p>
      </div>
  </div>

  <!-- Trait horizontal blanc -->
  <hr class="border-t-2 border-white mt-32 w-3/5 mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 delay-500 " id="feature3"> 
</section>


<script>
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('#title, #subtitle, #feature1, #feature2, #feature3');
    
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
