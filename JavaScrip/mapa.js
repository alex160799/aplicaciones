
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