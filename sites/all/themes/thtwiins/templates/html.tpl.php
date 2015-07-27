<?php 
if (isset ($_GET['language'])){
   $_SESSION['language']=$_GET['language'];
}
else{
    if (!isset($_SESSION['language'])) $_SESSION['language']=language_default("language");
}
?>
<?php print $doctype; ?>
<!--[if lt IE 7]> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?> class="ie6"> <![endif]-->
<!--[if IE 7]> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?> class="ie7"> <![endif]-->
<!--[if lt IE 7]> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?> class="ie6"> <![endif]-->
<!--[if IE 7]> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?> class="ie7"> <![endif]--><!--[if gt IE 8]><!-->
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?><![endif]-->
<head<?php print $rdf->profile; ?>>
<!--        
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
-->

  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body<?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>