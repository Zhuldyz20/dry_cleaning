var imgSlider = Array.from(document.querySelectorAll('.slider-container img')),
    sliderCounet = imgSlider.length,
    currentSlider = 1,
    sliderText = document.getElementById('slide-number'),
    nextBtn = document.getElementById('next'),
    prevBtn = document.getElementById('prev'),
    newUl = document.createElement('ul'),
    i;
newUl.setAttribute('id', 'my-ul')

for(i = 1; i <= sliderCounet; i = i + 1) {
    
    var newLi = document.createElement('li');
    newLi.setAttribute('li-data', i);
    newLi.appendChild(document.createTextNode(i));
    newUl.appendChild(newLi);
}
document.getElementById('numbers').appendChild(newUl);

var myUl = document.getElementById('my-ul'),
    ulSlider = Array.from(document.querySelectorAll('#my-ul li'));

function theChecker() {
    
    'use strict';
    
    sliderText.textContent = "#Slide " + currentSlider + " of " + sliderCounet;
    
    function removeAllClasses() {
        
        imgSlider.forEach(function(img) {
            
            img.classList.remove('active');
        })
        
        ulSlider.forEach(function(ul) {
            
            ul.classList.remove('active');
        })
        
    }
    removeAllClasses();
    
    imgSlider[currentSlider - 1].classList.add('active');
    ulSlider[currentSlider - 1].classList.add('active');
    
    if(currentSlider == 1) {
        
        prevBtn.classList.add('disabled');
    
    } else {
        
        prevBtn.classList.remove('disabled');
    }
    
    if(currentSlider == sliderCounet) {
        
        nextBtn.classList.add('disabled');
    
    } else {
        
        nextBtn.classList.remove('disabled');
    }
    
}
theChecker();

nextBtn.onclick = function () {
    
    'use strict';
    
    if(nextBtn.classList.contains('disabled')) {
        
        
    } else {
        
        currentSlider++;
        
        theChecker();
    }
}

prevBtn.onclick = function () {
    
    'use strict';
    
    if(prevBtn.classList.contains('disabled')) {
        
        
    } else {
        
        currentSlider--;
        
        theChecker();
    }
}
// for(i = 0; i < ulSlider.length; i = i + 1)
for(i = 0; i <= sliderCounet; i = i + 1) {
    
    ulSlider[i].onclick = function () {
        
        currentSlider = parseInt(this.getAttribute('li-data'));
        
        theChecker();
    }
}