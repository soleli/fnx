
	
function cargar(id) {
$("#cargando2").css("display","inlineblock");	
	$("#noticia").html (" "); 
	$("#iconos").html (" "); 
	archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/noticia.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {id:id})
	.done(function(data) 
	{
		$("#noticia").append(
								"<div data-theme='b'>"+
								"<strong style='font-size: 20px; text-align: center;'>"+data.titulo+"</strong> <br>"+
								"<img width=100%; src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
								"<p>"+data.cuerpo+"</p>"+
								"</div>"
							);
		$("#cargando2").css("display","none");	
		$("#iconos").append(
		"<ul><li class='imgred'> <button  onclick='redsocial("+1+","+id+")'><img src='img/whatsaap.png'</button></li>"+
		"<li class='imgred'><button onclick='redsocial("+2+","+id+")'><img src='img/facebook.png'</button></li>"+
		"<li class='imgred'><button onclick='redsocial("+3+","+id+")'><img src='img/twitter.png'</button></li></ul>"
		);
		
	});

	
 }
 
 function redsocial(expr,id){ 
    switch (expr) {
      case 3:
        window.plugins.socialsharing.shareViaTwitter('Mira esta noticia de Fenix', null /* img */, 'http://www.fenix951.com.ar/nuevo_2013/noticia.php?id='+id);
            
        break;
      case 2:
        window.plugins.socialsharing.shareViaFacebook('Mira esta noticia de Fenix', null /* img */, 'http://www.fenix951.com.ar/nuevo_2013/noticia.php?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      case 1:
            window.plugins.socialsharing.shareViaWhatsApp('Mira esta noticia de Fenix', null /* img */, 'http://www.fenix951.com.ar/nuevo_2013/noticia.php?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      default:
        console.log(id);
    }
}
 function noticias(id) {

 $("#noticias").html (" "); 
	archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/todas.php?jsoncallback=?"
		$.getJSON( archivoValidacion, {id:id})
	.done(function(data) {
	if(id==3){ var seccion="Locales"; }
	if(id==4){ var seccion="Nacionales"; }
	if(id==5){ var seccion="Internacionales"; }
	if(id==6){ var seccion="Deporte"; }
	if(id==7){ var seccion="Sociedad"; }
	if(id==8){ var seccion="Farandula"; }
	$("#noticias").append("<p class='tituseccion'>"+seccion+"</p>");
		$(data).each(function (index, data) {   
							$("#noticias").append(
							
									"<li class='ui-li-has-thumb ui-first-child'><a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									
									"</a></li><div style='clear:both;'></div><hr> <br>"
									);
							});	
	
					
                 
		
		
  
	})
	$("#cargando1").css("display","none");
 }
		
function init() 
{

	archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/principal.php?jsoncallback=?"

/* primera*/
	$.getJSON( archivoValidacion, {id:1})
	
	.done(function(data2) {
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
		
			$("#primera").append(
			"<div style='float: right;   position: absolute;'> <a  onclick='redsocial("+1+","+data2.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
		"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
		"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>  <div data-theme='b'> <img width=100%; src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data2.url+"'>"+
									"<div class='copeteprimera'>"+data2.titulo+"</div> "+
									"</div></a>"
									
								);
		});
		$("#cargando").css("display","none");
	})
	
	.error( function(data2) { 
	$("#cargando").css("display","block");
	$("#primera").append("Compruebe su conexion a internet"); } )

	
/* seGUNDA*/
		
	$.getJSON( archivoValidacion, {id:2})	
	.done(function(data2) {
		$(data2).each(function (index, data2) {
                        $("#secundarias").append(
						"<div class='notisegunda'><div style='float: right;   position: absolute;'> <a  onclick='redsocial("+1+","+data2.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
						"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
						"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<a href='#noticia1'  data-transition='flip' onclick='cargar("+data2.id_Noticia+");'> <img width=100%; src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data2.url+"_t.jpg''>"+
									"<div class='copetep'>"+data2.titulo+"</div> "+
									"</a></div>"
						);
        });
	})

/* locales*/
			
	$.getJSON( archivoValidacion, {id:3})
	.done(function(data) {
		$("#ListaL").append("<p class='titucategoria'>Locales</p>");
		$(data).each(function (index, data) {   
							$("#ListaL").append(
									"<a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
		"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
		"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
							);
		});	
	})
/* Videos*/
	$.getJSON( archivoValidacion, {id:10})
	.done(function(data) {
		
		$(data).each(function (index, data) {   
							$("#videos").append(
							"<div >"+
							"<p class='text1'>"+data.nombre+"</p>"+
							"<iframe width='100%' height='auto' src='https://www.youtube.com/embed/"+data.link+"'>"+
							"frameborder='0' allowfullscreen></iframe></div> <hr>"
							);
		});	
	})
/* Locales 2*/
	$.getJSON( archivoValidacion, {id:9})
	.done(function(data) {
		
		$(data).each(function (index, data) {   
							$("#ListaL2").append(
									"<br><a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
							);
		});	
	})
	
	/* Audios*/
	$.getJSON( archivoValidacion, {id:11})
	.done(function(data) {
		
		$(data).each(function (index, data) {   
							$("#audios").append(
							"<div >"+
							"<p class='text1'>"+data.descripcion+"</p>"+
							"<audio controls> <source src='http://fenix951.com.ar/nuevo_2013/audios/"+data.Url_mp3+"' type='audio/mpeg'> </audio> "+
							"</div> <hr>"
							);
		});	
	})
	
/*Nacionales*/
	
			
			$.getJSON( archivoValidacion, {id:4})
	.done(function(data) {
	$("#ListaN").append("<p class='titucategoria'>Nacionales</p>");
		$(data).each(function (index, data) {   
							$("#ListaN").append(
							
									"<a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
									);
							});	
	
					
                 
		
		
  
	})
	/*Internacionales*/
	
			
			$.getJSON( archivoValidacion, {id:5})
	.done(function(data) {
	$("#ListaInternacionales").append("<p class='titucategoria'>Internacionales</p>");
		$(data).each(function (index, data) {   
							$("#ListaInternacionales").append(
							
									"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
									);
							});	
	
		  
	})
	
	/* DEporte*/
					
			$.getJSON( archivoValidacion, {id:6})
	.done(function(data) {
	$("#ListaDeporte").append("<p class='titucategoria'>Deporte</p>");
		$(data).each(function (index, data) {   
							$("#ListaDeporte").append(
							
									"<a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
									);
							});	
	
		  
	})
	/* Sociedad*/
					
			$.getJSON( archivoValidacion, {id:7})
	.done(function(data) {
	$("#ListaSociedad").append("<p class='titucategoria'>Sociedad</p>");
		$(data).each(function (index, data) {   
							$("#ListaSociedad").append(
							
									"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
									);
							});	
	
		  
	})
	/* Farandula*/
			$.getJSON( archivoValidacion, {id:8})
	.done(function(data) {
	$("#ListaFarandula").append("<p class='titucategoria'>Farandula</p>");
		$(data).each(function (index, data) {   
							$("#ListaFarandula").append(
							
									"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/"+data.url+"_t.jpg'>"+
									data.titulo+
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><img width='20%' src='img/whatsaap.png'</a>"+
									"<a onclick='redsocial("+2+","+data.id_Noticia+")'><img width='20%' src='img/facebook.png'</a>"+
									"<a onclick='redsocial("+3+","+data.id_Noticia+")'><img width='20%' src='img/twitter.png'</a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
									);
							});	
	
		  
	})
	
	
	}
	 //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            // Create Media object from src
            my_media = new Media(src, onSuccess, onError);

            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        //
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        //
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
	
	function radio(){
	
	 if ($("#radio").hasClass('ui-icon-volume-off')){
	 $("#radio").removeClass();
	 $("#radio").addClass(" ui-btn-right ui-btn ui-icon-volume-up ui-btn-icon-notext ui-corner-all");
       playAudio('http://184.107.187.146:8032/fenix951');
    }else{
	 $("#radio").removeClass();
	 $("#radio").addClass(" ui-btn-right ui-btn ui-icon-volume-off ui-btn-icon-notext ui-corner-all");
        stopAudio();
    }

    }
	
	
	
	 function enviarcorreo(){
             
             	var number = $("#nombre").val();
             	var message = $("#mensaje").val();
				archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message})
	            .done(function(data) 
	{
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      }
		 
	function clasificados(id){
		 $("#clasi").html (" "); 
		 archivoValidacion = "http://fenix951.com.ar/nuevo_2013/Ajdh/clasificados.php?jsoncallback=?"
		$.getJSON( archivoValidacion, {id:id})
	.done(function(data) {
	if(id==1){ var seccion="Autos"; }
	if(id==2){ var seccion="Motos"; }
	if(id==3){ var seccion="Inmuebles"; }
	if(id==4){ var seccion="Servicios y Empleos"; }
	if(id==5){ var seccion="Tecnolog&iacutea"; }
	if(id==6){ var seccion="Varios"; }
	$("#clasi").append("<p class='tituseccion'>"+seccion+"</p>");
		$(data).each(function (index, data) {   
							$("#clasi").append(
							
									"<li class='ui-li-has-thumb ui-first-child'>"+
									"<img class='imgcate' src='http://fenix951.com.ar/nuevo_2013/imagenes/clasificados/"+data.url+"_t.jpg'>"+
									data.aviso+
									
									"</li><div style='clear:both;'></div><hr> <br>"
									);
							});	
	
					
                 
		
		
  
	})
		 }
		 
		
		
	
			
		
	