
$(document).ready(function() {
	
	//-----Crea otra lista con los primeros 5 elementos de la lista original

	//Creamos una nueva lista a la que le añadimos un id para identificarla
	var lista_nueva = $("<ul id='lista_nueva'></ul>");
	//Obtenemos la lista original y la almacenamos en una variable
	var lista_original = $("#lista_original");
	//Creamos un bucle que se repetirá 5 veces
	for ( var i = 0; i < 5; i++ ) {
		//Obtenemos los primeros elementos de la lista original y los añadimos a la lista nueva
		//Si no se pone la función clone al final, los moverá, no los copiará
		lista_nueva.append($("#lista_original li:eq(" + i + ")").clone());
	}
	//Añadimos la lista nueva a continuación de la original
	lista_nueva.insertAfter(lista_original);

	//-----Elimina los primeros 5 elementos de la lista original

	//Declaramos una matriz en la que almacenaremos los elementos que vamos a borrar
	var eliminados = [];
	//Creamos un bucle que se repetirá 5 vevces
	for ( var i = 0; i < 5; i++ ) {
		//Declaramos una variable que almacenará el elemento que vamos a tratar
		var elemento = $("ul#lista_original li:eq(0)")
		//Almacenamos el elemento que vamos a borrar en la matriz
		eliminados.push(elemento);
		//Eliminamos el elemento
		elemento.detach();
	}

	//-----Recupera "El quinto elemento" 

	//Como hemos almacenado los elementos en la matriz, lo podemos recuperar y añadir antes del primer elemento de la lista original
	eliminados[4].insertBefore("ul#lista_original li:first");

	//-----Creamos un nuevo elemento en la lista nueva

	//Declaramos una variable que almacenará el código que queremos incluir
	var nuevo_li = $( "<li id='perejil' class='odd'><span>Isla de Perejil</span></li>");
	//Añadimos el elemento nuevo al final de la nueva lista
	nuevo_li.appendTo( "ul#lista_nueva li:last" );
});