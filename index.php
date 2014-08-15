<?php
header('content-type: application/json; charset=utf-8');
  include_once('printOGTags.php'); // for printOGTags();

  @$url = urldecode ($_GET["url"]);
  if ($url) {
    $url = addWebProtocalIfNeeded($url);
    @$html = file_get_contents($url);
  }

  echo $_GET['callback'].'('.printOGTags($url, $html).')';
?>