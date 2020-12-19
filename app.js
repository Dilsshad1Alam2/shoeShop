const buttoonGoTop = document.querySelector('.sticky-go-top');
const burgerMenu = document.querySelector('.fa-bars');
const toHideInPhone = document.querySelector('.to-grab')


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      buttoonGoTop.style.display = "block";
    } else {
      buttoonGoTop.style.display = "none";
    }
  }
  
  window.onscroll = function(){
        scrollFunction()
    };

function toDisplayMenu(){
  toHideInPhone.classList.toggle('to-hide-phone');
}



burgerMenu.addEventListener('click', toDisplayMenu)