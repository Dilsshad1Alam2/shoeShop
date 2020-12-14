const buttoonGoTop = document.querySelector('.sticky-go-top');




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


