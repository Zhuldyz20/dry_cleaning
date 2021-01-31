AOS.init({
    offset:200,
    duration:800,
    easing: "ease"
});

var arrLang = {
    "ru-gb": {
      "HOME": "Главная",
      "ABOUT": "О нас",
      "Gallery": "Галерея",
      "CONTACT": "Наши контакты",
      "Feature": "Свойства",
      "FeatureText":"Какой нибудь текст",
      "Slogan":"Химчистка",
      "Meaning": "Химчистка - это процесс стирки одежды без использования воды.",
      "FeatureText": "В своём стремлении повысить качество жизни, они забывают, что укрепление и развитие внутренней структуры в значительной степени обусловливает важность благоприятных перспектив. Есть над чем задуматься: многие известные личности, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ограничены исключительно образом мышления.",
      "ContactUs": "Позвоните нам"
    
    },
    "kz-gb": {
      "HOME": "Уй",
      "ABOUT": "Биздер жайлы",
      "Gallery": "Галереясы",
      "CONTACT": "Контактер",
      "Feature": "Кырылсып",
      "FeatureText":"Бул не деген сумдык",
      "Slogan":"Химиялык тазарту",
      "Meaning": "Химиялық тазалау - бұл суды пайдаланбай киімді тазарту.",
      "FeatureText":"Өмір сапасын жақсартуға ұмтылу барысында олар ішкі құрылымның нығаюы мен дамуы көбіне қолайлы келешектің маңыздылығын анықтайтынын ұмытады. Ойланатын нәрсе бар: континентальды-еуропалық саяси мәдениеттің жарқын үлгісін ұсынатын көптеген танымал тұлғалар тек ойлау тәсілімен шектеледі.",
      "ContactUs": "Бізге хабарласыңыз"
    }
  };
  
  // The default language is Kazakh
  var lang = "kz-gb";
  // Check for localStorage support
  if('localStorage' in window){
     
     var usrLang = localStorage.getItem('uiLang');
     if(usrLang) {
         lang = usrLang
     }
  
  }
  
  
  console.log(lang);
  
          $(document).ready(function() {
  
            $(".lang").each(function(index, element) {
              $(this).text(arrLang[lang][$(this).attr("key")]);
            });
          });
  
          // get/set the selected language
          $(".translate").click(function() {
            var lang = $(this).attr("id");
  
            // update localStorage key
            if('localStorage' in window){
                 localStorage.setItem('uiLang', lang);
                 console.log( localStorage.getItem('uiLang') );
            }
  
            $(".lang").each(function(index, element) {
              $(this).text(arrLang[lang][$(this).attr("key")]);
            });
          });

      

     