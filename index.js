            // Usado como base: https://www.w3schools.com/howto/howto_js_slideshow.asp
            
            var container = document.querySelector('#container');
            var carousel = document.querySelector('#carousel');
            var carouselItem = document.querySelectorAll('.carousel-item');
            var previous = document.querySelector('#previous');
            var next = document.querySelector('#next');
            var counter = document.querySelector('#counter');

            var slideIndex=0;

            function renderDots(){
                for(var i=0;i<carouselItem.length;i++){
                    var containerDots = document.querySelector('#containerDots');
                    var dot = document.createElement('span');
                    dot.className = 'dot';
                    dot.setAttribute('onclick','clickDot('+i+')');
                    containerDots.appendChild(dot);
                }
            }

            function clickDot(i){
                showSlides(i);
            }
            
            function showSlides(n){
                for(var i=0;i<=(carouselItem.length-1);i++){
                    carouselItem[i].style.display = 'none';
                }
                carouselItem[n].style.display = 'block';
                carouselItem[n].style.animation = 'fadeIn .5s'
            

                var dots = document.querySelectorAll('.dot');
                for(var i=0;i<=(dots.length-1);i++){
                    dots[i].classList.remove('active');
                }
                
                dots[n].classList.add('active');

            }


            function previousSlide(){
                if((slideIndex - 1) < 0) {
                    slideIndex = (carouselItem.length-1);
                    showSlides(slideIndex);
                }
                else {
                    slideIndex -= 1;
                    showSlides(slideIndex);
                }
            }

            function nextSlide(){
                if((slideIndex + 1) > (carouselItem.length-1)) {
                    slideIndex = 0;
                    showSlides(slideIndex);
                }
                else{
                    slideIndex += 1;
                    showSlides(slideIndex);
                }
            }
            
            renderDots();
            showSlides(slideIndex);
            