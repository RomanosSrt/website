

window.onscroll = function() {scrollFunction()};

var header = document.getElementById("intro");

var sticky = header.offsetTop;


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("myimg").style.width = "20%";
    document.getElementById("imgBg").style.width = "20%";
    header.classList.add("sticky");
    document.getElementById("disappear").style.display = 'none';
    document.getElementById("myName").style.fontSize = '2em';
  } else {
    // document.getElementById("myimg").style.width = "100%";
    document.getElementById("imgBg").style.width = "100%";
    header.classList.remove("sticky");

  }
}