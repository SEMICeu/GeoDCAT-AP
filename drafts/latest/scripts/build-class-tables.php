<?php

  $folder = "../tables/";

  $classes[] = 'mandatory-classes.html';
  $classes[] = 'recommended-classes.html';
  $classes[] = 'optional-classes.html';

  foreach ($classes as $k => $v) {
    if (file_exists($folder . $v)) {
      $string = file_get_contents($folder . $v);
      $string = mb_convert_encoding($string, 'utf-8', mb_detect_encoding($string));
      $string = mb_convert_encoding($string, 'html-entities', 'utf-8');       
      $doc = new DOMDocument();
//      $doc->loadHTMLFile($folder . $v);
      $doc->loadHTML($string);
      $xpath = new DomXPath($doc);
      $nodes = $xpath->query("//tbody/tr[@id]");
      foreach ($nodes as $ck => $cv) {
        $cid = $nodes[$ck]->getAttribute('id');
        $ctypes = explode(' ', $nodes[$ck]->getAttribute('class'));
        $cname = ltrim(trim($nodes[$ck]->getElementsByTagName('td')->item(0)->nodeValue),'+');
        $chref = '';
        if ($nodes[$ck]->getElementsByTagName('td')->item(0)->getElementsByTagName('a')->length > 0) {
          $chref = $nodes[$ck]->getElementsByTagName('td')->item(0)->getElementsByTagName('a')->item(0)->getAttribute('href');
        }	
//        $cnote = trim($nodes[$ck]->getElementsByTagName('td')->item(1)->nodeValue);
        $cnote = trim($doc->saveHTML($nodes[$ck]->getElementsByTagName('td')->item(1)));
        $curi  = trim($nodes[$ck]->getElementsByTagName('td')->item(2)->nodeValue);
        $curi = trim($doc->saveHTML($nodes[$ck]->getElementsByTagName('td')->item(2)));
//        $cref  = trim($nodes[$ck]->getElementsByTagName('td')->item(3)->nodeValue);
        $cref  = trim($doc->saveHTML($nodes[$ck]->getElementsByTagName('td')->item(3)));
        $cobl  = '';
        if (in_array('mandatory', $ctypes)) {
          $cobl = 'Mandatory';
        }
        if (in_array('recommended', $ctypes)) {
          $cobl = 'Recommended';
        }
        if (in_array('optional', $ctypes)) {
          $cobl = 'Optional';
        }

	$c[$cid]['id'] = $cid;
	$c[$cid]['types'] = $ctypes;
	$c[$cid]['name'] = $cname;
	$c[$cid]['href'] = $chref;
	$c[$cid]['note'] = $cnote;
	$c[$cid]['uri'] = $curi;
	$c[$cid]['ref'] = $cref;
	$c[$cid]['obl'] = $cobl;
      }
    }
  }

//  print_r($c);

  foreach ($c as $k => $v) {
    $html = '';
    if (isset($c[$k]['href']) && trim($c[$k]['href']) != '') {
      $html .= '<table class="simple definition" id="table-class-' . $k . '">' . "\n";
      $html .= '<tbody>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<th>Class name</th>' . "\n";
      $html .= '<td>';
      $html .= $c[$k]['name'];
      $html .= '</td>' . "\n";
      $html .= '</tr>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<th>Obligation</th>' . "\n";
      $html .= '<td>';
      $html .= $c[$k]['obl'];
      $html .= '</td>' . "\n";
      $html .= '</tr>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<th>URI</th>' . "\n";
//      $html .= '<td>';
      $html .= $c[$k]['uri'];
//      $html .= '</td>' . "\n";
      $html .= '</tr>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<th>Usage note</th>' . "\n";
//      $html .= '<td>';
      $html .= $c[$k]['note'];
//      $html .= '</td>' . "\n";
      $html .= '</tr>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<th>Reference</th>' . "\n";
//      $html .= '<td>';
      $html .= $c[$k]['ref'];
//      $html .= '</td>' . "\n";
      $html .= '</tr>' . "\n";
      $html .= '</tbody>' . "\n";
      $html .= '</table>' . "\n";

//      echo $html;
//      echo $folder . 'class-' . $k . '.html' . "\n";
      file_put_contents($folder . 'class-' . $k . '.html', $html);
    }
  }

?>
