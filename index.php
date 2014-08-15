<?php
header('Content-Type: application/json');
  include_once('printOGTags.php'); // for printOGTags();

  @$url = urldecode ($_GET["url"]);
  if ($url) {
    @$html = file_get_contents($url);
  }

  printOGTags($url, $html);
?>