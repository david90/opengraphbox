<?php
header('Content-Type: application/json');
  include_once('printOGTags.php'); // for printOGTags();

  @$url = urldecode ($_GET["url"]);
  if ($url) {
    $url = addWebProtocalIfNeeded($url);
    @$html = file_get_contents($url);
  }

  printOGTags($url, $html);
?>