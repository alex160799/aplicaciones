$(function()
{
	'use strict';

	/*carga*/
	loadPage();
	/*Mapa*/
	
	var map= L.map('mapa').setView([12.172672, -86.094478], 30);

		
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
	
	var windoHeight = $('.header').height();
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
	
	icon();
	
});


function icon()
{
	/*Facebook*/
	$(".face").hover(function(){
		
		$(".face").animate(
			{
			 color:'#3b5998'
			},500);
	}, function(){
		$(".face").animate(
			{
			 color:'#000'
			},500);
	});
	
	/*twitter*/
 	$(".twit").hover(function(){
		
		$(".twit").animate(
			{
			 color:'#00acee'
			},500);
	}, function(){
		$(".twit").animate(
			{
			 color:'#000'
			},500);
	});
	
	/*Instegram*/
	 	$(".inst").hover(function(){
		
		$(".inst").animate(
			{
			 color:'#E1306C'
			},500);
	}, function(){
		$(".inst").animate(
			{
			 color:'#000'
			},500);
	});
	
}

function loadPage(){
  
	$.blockUI({
	message:'<img src="Recursos/img/carga.gif" width="150" height="150"> <h3>Cargando ...</h3>', 
	 css: { 
        border: 'none', 
		color:'white',
        padding: '15px', 
        backgroundColor: 'transparent;', 
        '-webkit-border-radius': '0px', 
        '-moz-border-radius': '0px', 
         opacity: 0.5, 
         color: '#fff' 
        } }); 
 
        setTimeout($.unblockUI, 3000);
}



function efectoBrinco()
{
	$(".animacion").click(function(){
		$(".animacion").effect( "bounce", "slow" );
	});
	
}




