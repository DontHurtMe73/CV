{
  let arrowTop = document.querySelector('.back_to_top');

  arrowTop.onclick = function () {
    window.scrollTo(window.pageXOffset, 0);
  };

  window.addEventListener('scroll', function () {
    arrowTop.hidden = window.pageYOffset < document.documentElement.clientHeight;
  });
}
