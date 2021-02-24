window.onscroll = function () {
  progress_div();
};

function progress_div(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    document.getElementById("gotop").style.visibility='visible' ; 
  } else {
    document.getElementById("gotop").style.visibility="hidden";
  }
});

function scroll_top(){
    window.scrollTo(0, 0);
}

const myScroll = (item) => {
    // function scroll(item){
      var element = document.getElementById(item);
      element.scrollIntoView(false);
      // alert(item);
      // scrollWin();
    }

    const myFunction = () => {
        
        let navbar = document.getElementById("nav-bar");
        let sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky") ; 
        } else {
            navbar.classList.remove("sticky");
        }
    }

