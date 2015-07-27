<?php

if (isset($_GET['mail']))
{

	// El mensaje
	$mensaje = "Línea 1\r\nLínea 2\r\nLínea 3";
	
	// Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
	$mensaje = wordwrap($mensaje, 70, "\r\n");
	
	// Sanitizar user input
	$mail = filter_input(INPUT_GET, 'mail', FILTER_SANITIZE_EMAIL);

	// Enviarlo
	mail($mail, 'Test', $mensaje);

	echo "<p>Mail enviat a $mail.</p>";
}
else
	echo '<p>Error! Cal especificar destinatari a la URL!</p>';
?>
