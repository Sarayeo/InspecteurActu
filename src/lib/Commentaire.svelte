<section class="w-[80%] flex flex-col mx-auto px-6 py-12 text-white mt-32">
    <h2 class="text-4xl font-bold mb-4 text-center opacity-0 transform translate-y-10 transition-all duration-1000" id="mainTitle">Toujours pas convaincu ?</h2>
    <p class="text-lg mb-8 text-center opacity-0 transform translate-y-10 transition-all duration-1000 delay-200" id="mainText">Voici ce que nos utilisateurs pensent de nous :</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        <div class="bg-[#1F1F1F] bg-opacity-80 backdrop-blur-lg text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:rotate-1 opacity-0 translate-y-10" id="card1">
            <div class="flex items-center mb-2">
                <i class="fas fa-user-circle mr-2 text-2xl"></i> 
                <h3 class="text-xl font-semibold">Alice opéïdémerveyes</h3>
            </div>
            <p>J'ai joué avec ma fille, et elle a vraiment adoré. La combinaison de plaisir et d'apprentissage ludique est tout simplement parfaite.</p>
        </div>

        <div class="bg-[#1F1F1F] bg-opacity-80 backdrop-blur-lg text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:rotate-1 opacity-0 translate-y-10" id="card2">
            <div class="flex items-center mb-2">
                <i class="fas fa-user-circle mr-2 text-2xl"></i> 
                <h3 class="text-xl font-semibold">Toxique Sardoche</h3>
            </div>
            <p>C'est nul mais j'ai pas d'argument.</p>
        </div>

        <div class="bg-[#1F1F1F] bg-opacity-80 backdrop-blur-lg text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:rotate-1 opacity-0 translate-y-10" id="card3">
            <div class="flex items-center mb-2">
                <i class="fas fa-user-circle mr-2 text-2xl"></i> 
                <h3 class="text-xl font-semibold">Inconnu mépatro</h3>
            </div>
            <p> J'ai bien aimé la dernière rubrique</p>
        </div>
    </div>
</section>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('#mainTitle, #mainText, #card1, #card2, #card3');
    
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
