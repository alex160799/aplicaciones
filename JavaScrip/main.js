
$(function()
{
	'use strict';
	
	var map = L.map('mapa').setView([12.172672, -86.094478], 30);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([12.179762, 273.904181]).addTo(map)
		.bindPopup('Servicios Electrónicos Profesionales.')
		.openPopup();
	

});


$(function()
{
		'use strict';
	
	var windoHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();
	
	$(window).scroll(function()
	{
		var scroll = $(window).scrollTop();
		
		if(scroll > windoHeight)
		{
			$('.barra').addClass('fixed');
			$('body').css({'margin-top' : barraAltura+'px'});
		}else
		{
			$('.barra').removeClass('fixed');
			
			$('body').css({'margin-top' : '0px'});
		}
		
	});
	
});