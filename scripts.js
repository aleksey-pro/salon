ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [60.066971, 30.333996],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });
}

$(document).ready(function() {
  var links = $('.footer-menu__link');
  links.each(function(i, link) {
    var anchor = $(link).attr('href');
    console.log(anchor);
    $(link).on('click', function(evt) {
      evt.preventDefault();
      console.log('anchor');

      $('html, body').animate({ scrollTop: $(anchor).offset().top }, 1000);
    });
  });
});
