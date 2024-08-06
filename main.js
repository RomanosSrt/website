window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;


  if (scrollTop > 5) {
    document.getElementById("disappear").classList.add('hide');
    document.getElementById("disappear1").classList.add('hide');
    document.getElementsByTagName("header")[0].classList.add('transform');
    document.getElementById("imgBg").classList.add('shrink');
    document.getElementById("myName").innerText = 'Romanos Sarantidis';
    document.getElementById("myName").classList.add('shorten');
    document.getElementById("mainPage").classList.add('rearrange');
  } else {
    document.getElementById("disappear").classList.remove('hide');
    document.getElementById("disappear1").classList.remove('hide');
    document.getElementsByTagName("header")[0].classList.remove('transform');
    document.getElementById("imgBg").classList.remove('shrink');
    document.getElementById("myName").innerText = 'Romanos Sarantidis,';
    document.getElementById("myName").classList.remove('shorten');
    document.getElementById("mainPage").classList.remove('rearrange');
  }

});


