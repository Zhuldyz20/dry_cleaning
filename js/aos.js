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
    },
    "kz-gb": {
      "HOME": "Уй",
      "ABOUT": "Биздер жайлы",
      "Gallery": "Галереясы",
      "CONTACT": "Контактер",
      "Feature": "Кырылсып",
      "FeatureText":"Бул не деген сумдык",
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