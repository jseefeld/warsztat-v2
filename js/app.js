document.addEventListener("DOMContentLoaded", function() {

    //slider
    var leftBtn = document.querySelector('div.sliderLeft');
    var rightBtn = document.querySelector('div.sliderRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    console.log(leftBtn);
    console.log(rightBtn);
    console.log(imgLi);

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });


    //po najechaniu na zdjecie znika nazwa produktu
    var product1 = document.querySelector('div.product1');
    var product2 = document.querySelector('div.product2');
    console.log(product1);
    console.log(product2);


    product1.addEventListener('mouseover', function() {
        product1.firstElementChild.classList.toggle('showTitle');
    });
    product2.addEventListener('mouseover', function() {
        product2.firstElementChild.classList.toggle('showTitle');
    });

});
