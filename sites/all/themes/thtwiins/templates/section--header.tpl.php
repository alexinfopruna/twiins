<?php
global $language;

$lancode=$language->language;
$lancode='en'; //ALEX TRAMPA

$img='/'.drupal_get_path('theme', 'thtwiins')."/pestana_$lancode.png";


?>
<header<?php print $attributes; ?>>
   
  <?php print $content; ?>

    
</header>
    <div id="pdf-btn-wrapper">
    <div id="pdf" style="display:none;">
        <a href="<?php print  url("/manuales-pdf"); ?>">
            <img src="<?php print $img;?>">
        </a>
</div>
</div>
