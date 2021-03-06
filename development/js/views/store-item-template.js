$.templates({ 'store-item-template': ' \
<article id="store-item-id{{:XML_ID}}" class="store-item  js-modal-window" data-xml-id="{{:XML_ID}}" data-js-modal-active-modifier="store-item--active"  itemscope itemtype=" http://schema.org/JewelryStore"> \
	<div class="store-item__heading">\
		<h3 class="store-item__title">\
			<span itemprop="name">585GOLD</span>.<br>\
			<span itemprop="addressLocality">{{:CITY}}</span>, \
			<span itemprop="streetAddress">{{:ADDRESS["STREET"]}} {{:ADDRESS["HOUSE_FLAT"]}}</span>\
		</h3> \
		<div id="store-item-close" class="store-item__close  js-modal-close-button">X</div>\
	</div>\
	<div class="store-item__group">\
		<p class="store-item__group-text  store-item__group-text--schedule">\
			Режим работы: <br>\
			<time itemprop="openingHours" datetime="{{:SCHEDULE_PREPARE}}">{{:SCHEDULE_PREPARE}}</time>\
		</p>\
		<!-- Кнопка/ссылка на магазин -->\
		<a href="{{:DETAIL_URL}}" class="b-button  store-item__button  store-item__button--schedule" data-store-url="{{:DETAIL_URL}}">Страница магазина</a>\
		<!-- {{:DETAIL_URL}} -->\
	</div>\
	<div class="store-item__group">\
		<p class="store-item__group-text  store-item__group-text--gps">\
			<a href="http://maps.yandex.ru/?rtext=~{{:GPS_N}}%2C{{:GPS_S}}" target="_blank">ПОСТРОИТЬ МАРШРУТ НА ЯНДЕКС КАРТАХ</a>\
		</p>\
		<!-- ({{:GPS_N}}, {{:GPS_S}}) -->\
		<textarea class="store-item__gps-clipboard">{{:GPS_N}} {{:GPS_S}}</textarea>\
		<button id="copy-gpscoords-button" class="b-button  store-item__button  store-item__button--gps" data-coords-gps_n="{{:GPS_N}}" data-coords-gps_s="{{:GPS_S}}">Скопировать GPS координаты</button>\
	</div>\
</article> \
'});
