<?
 function printOGTags($url, $html) {
    if ($url && $html) {
      libxml_use_internal_errors(true); // Yeah if you are so worried about using @ with warnings
      $doc = new DomDocument();
      $doc->loadHTML($html);
      $xpath = new DOMXPath($doc);
      $query = '//*/meta[starts-with(@property, \'og:\')]';
      $metas = $xpath->query($query);
      foreach ($metas as $meta) {
          $property = $meta->getAttribute('property');
          $content = $meta->getAttribute('content');
          $rmetas[$property] = $content;
      }
      // var_dump($rmetas);
      // append general info
      $rmetas['url'] = $url;
      $rmetas['success'] = true;

      echo json_encode($rmetas);
    } else {
      $rmetas['url'] = $url;
      $rmetas['success'] = false;
      echo json_encode($rmetas);
    }
  }

?>