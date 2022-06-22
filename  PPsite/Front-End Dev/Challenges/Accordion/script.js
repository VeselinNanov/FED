const panels = document.querySelectorAll('.panel');

panels[0].classList.remove('active');

panels.forEach(function (panel) {
  panel.addEventListener('click', function () {
    //removeActiveClass();
    panel.classList.toggle('active');
  });
});

removeActiveClass = function (panel) {
  panels.forEach(function (panel) {
    panel.classList.remove('active');
  });
};
