import * as bootstrap from 'bootstrap';

var myCollapse = document.querySelector('.navbar-collapse');
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false,
});

document.addEventListener('click', () => {
  bsCollapse.hide();
});
