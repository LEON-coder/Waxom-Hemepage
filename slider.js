// после готовности DOM
document.addEventListener('DOMContentLoaded', function() {
    var elms = document.querySelectorAll('.slider');
    for (var i = 0, len = elms.length; i < len; i++) {
      // инициализация elms[i] в качестве слайдера
      new ChiefSlider(elms[i]);
    }
  });



  // выполняем инициализацию слайдера с настройками по умолчанию
new ChiefSlider('.slider');