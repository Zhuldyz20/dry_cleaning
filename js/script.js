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





      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);
        
    
        async function formSend(e) {
            e.preventDefault();
    
            let error = formValidate(form);
    
            const formData = new FormData(form);
          
    
            if (error === 0) {
                form.classList.add('_sending');
                let response = await fetch('sendmail.php', {
                   method: 'POST',
                   body: formData
                })
                if (response.ok) {
                    let result = await response.json()
                    alert(result.message);
                    formPreview.innerHTML = '';
                    form.reset();
                    form.classList.remove('_sending');
                } else {
                    alert('Ошибка!');
                    form.classList.remove('_sending');
                    
                }
            } else {
                alert('Заполните поля');
            }
        }
    
        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req')
            console.log(form);
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
    
                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                }  else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }
        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }
    
        //Тест email
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    })