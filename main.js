window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;



  if (scrollTop > 5) {
    document.getElementById("disappear").classList.add('hide');
    document.getElementById("disappear1").classList.add('hide');
    document.getElementsByTagName("header")[0].style.transitionDuration = '500ms';
    document.getElementsByTagName("header")[0].classList.add('transform');
    document.getElementById("imgBg").classList.add('shrink');
    document.getElementById("myName").innerText = 'Romanos Sarantidis';
    document.getElementById("myName").classList.add('shorten');
    document.getElementById("mainPage").classList.add('rearrange');
  } else {
    document.getElementById("disappear").classList.remove('hide');
    document.getElementById("disappear1").classList.remove('hide');
    document.getElementsByTagName("header")[0].style.transitionDuration = '500ms';
    document.getElementsByTagName("header")[0].classList.remove('transform');
    document.getElementById("imgBg").classList.remove('shrink');
    document.getElementById("myName").innerText = 'Romanos Sarantidis,';
    document.getElementById("myName").classList.remove('shorten');
    document.getElementById("mainPage").classList.remove('rearrange');
  }

});

var faults = 0;

document.onkeydown = (e) => {
  if (e.key == "F12") {
    e.preventDefault();
    faults++;
    //consequences(faults);
  }
  if (e.ctrlKey && (e.shiftKey && (e.code == 'KeyI' || e.code == 'KeyC' || e.code == 'KeyJ')) || (e.code == 'KeyU')) {
    e.preventDefault();
    faults++;
    //consequences(faults);
  }
};

function consequences(strikes) {
  switch(strikes) {
    case 1:
      alert("Εεεπ τι πας να κάνεις εκεί?");
      break;
    case 2:
      alert("Μην το ξανακάνεις, τελευταία ευκαιρία!");
      break;
    case 3:
      alert("Τέλος, το έχασες!");
      document.getElementsByTagName("header")[0].style.display = 'none';
      document.getElementById("mainPage").style.display = 'none';
      document.getElementsByTagName("footer")[0].style.display = 'none';
      document.getElementById("prefooter").style.display = 'block';
      break;
  }
}



window.addEventListener("resize", () => {
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;

  if (scrollTop > 5) {
    header.style.transitionDuration = '10ms';
  } else {
    header.style.transitionDuration = '10ms';
  }

  document.getElementsByClassName("box").style.transitionDuration = '0ms';
});
