<?
 function extractOGTags($url, $html) {
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

      $query = '//*/meta[contains(@name, \'\')]';
      $metas = $xpath->query($query);
      foreach ($metas as $meta) {
          $name = $meta->getAttribute('name');
          $content = $meta->getAttribute('content');
          $rmetas[$name] = $content;
      }

      $query = '//*/meta[contains(@itemprop, \'\')]';
      $metas = $xpath->query($query);
      foreach ($metas as $meta) {
          $itemprop = $meta->getAttribute('itemprop');
          $content = $meta->getAttribute('content');
          $rmetas[$itemprop] = $content;
      }

      // var_dump($rmetas);
      // append general info
      $rmetas['url'] = $url;
      $rmetas['success'] = true;
      $rmetas_json = json_encode($rmetas);
      
      return $rmetas_json;
    } else {
      $rmetas['url'] = $url;
      $rmetas['success'] = false;
      $rmetas_json = json_encode($rmetas);
      return $rmetas_json;
    }
  }

  function addWebProtocalIfNeeded($url) {
    if  ( $ret = parse_url($url) ) {
      if ( !isset($ret["scheme"]) ){
        $url = "http://{$url}";
      }
    }
    return $url;
  }

?>