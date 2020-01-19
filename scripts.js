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

function sendMail() {
  $('#mail-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/send-mail',
      type: 'POST',
      data: JSON.stringify({
        name: $('#mail-name').val(),
        message: $('#mail-mess').val(),
        mail: $('#mail-mail').val()
      }),
      contentType: "application/json; charset=utf-8",
      error: function(xhr, desc, err) {
          console.log(err);
          // console.log("Details0: " + desc + "\nError:" + err);
      },
    }).always(function(msg) {
      if (msg === 'ok') {
        $('#mail-form').trigger("reset");
      }
    });
  });
}

function sendOrder() {
  $('#order-form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/send-order',
      type: 'POST',
      data: JSON.stringify({
        masterName: $('#order-master').text(),
        service: $('.form-check-input:checked').siblings('.form-check-label').text(),
        date: $('#datetimepicker').val()
      }),
      contentType: "application/json; charset=utf-8",
      error: function(xhr, desc, err) {
          console.log(err);
          // console.log("Details0: " + desc + "\nError:" + err);
      },
    }).always(function(msg) {
      if (msg === 'ok') {
        $('#order-form').trigger("reset");
      }
    });
  });
}

$(document).ready(function() {
  sendOrder();
  sendMail();
  var links = $('.nav-link');
  links.each(function(i, link) {
    var anchor = $(link).attr('href');
    $(link).on('click', function(evt) {
      evt.preventDefault();
      $('html, body').animate({ scrollTop: $(anchor).offset().top - 65}, 1000);
      $('.navbar-toggler').removeClass('collapsed');
      $('.navbar-collapse').removeClass('show');
    });
  });
  const dp = $('#datetimepicker');
  if(dp.length) {
    dp.datetimepicker();
  }
});
