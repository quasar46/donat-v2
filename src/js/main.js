const minViewPort = (min = 360) => {
  if (window.innerWidth <= min) {
    const viewport = document.querySelector('[name="viewport"]');
    if (viewport) viewport.setAttribute("content", `width=${min}, user-scalable=no`);
  }
};

minViewPort();


minViewPort();

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('.header-nav');
const openMobileMenu = function () {
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })
}

openMobileMenu();



const btnsAppl = document.querySelectorAll('.appl');
const modal = document.querySelector('.modal');
console.log(btnsAppl);
btnsAppl.forEach(item => {
  item.addEventListener('click', function () {
    modal.classList.add('active');
  })
})

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function (event) {
  if (event.target == overlay) {
    modal.classList.remove('active');
  }
});


const closeModalBtns = document.querySelectorAll('.modal__close');
closeModalBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    item.closest('.modal').classList.remove('active');
  });
});


const picture = document.querySelectorAll('.item-product figure');
function showOverlayMobile() {
  return window.innerWidth || document.body.clientWidth;
}
if (showOverlayMobile() < 768) {
  window.onload = function () {
    picture.forEach(item => {
      item.addEventListener('click', () => {
        item.querySelector('.int__overlay').classList.toggle('active');
      })
    })
  }
}

$(document).ready(function () {
  if (window.innerWidth >= 768) {
    $('.item-product__inf').hover(
      function () {
        $(this).parent('figure').children('.int__overlay').children('p').addClass('show');
      }, function () {
        $(this).parent('figure').children('.int__overlay').children('p').removeClass('show');
      }
    )
  }

  $(".phone-mask").mask("+7(999) 999-9999");
})