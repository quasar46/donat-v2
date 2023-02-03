ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [51.735259, 36.192674],
        zoom: 16,
        control: false,
    }, {
        searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'donut bar',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.svg',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
});