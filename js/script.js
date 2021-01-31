window.onscroll = function(){
    scrollFunction();
};

const navBar = document.getElementById("main-nav");

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
}


function newFunction(){
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - $(window).height() / 12
                },
                900
            );
        }
    });
}

newFunction();



const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
    
        burger.classList.toggle('toggle');
    });
    }
    
    navSlide();



    

    const selected = document.querySelector(".selected-lang");
    const optionsContainer = document.querySelector(".ul-elements");

    const optionsList = document.querySelectorAll(".option");


    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
      });

      optionsList.forEach(o => {
        o.addEventListener("click", () => {
          selected.innerHTML = o.querySelector("a").innerHTML;
          optionsContainer.classList.remove("active");
        });
      });