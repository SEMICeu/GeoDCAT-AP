<?php

  $folder = "../tables/";

  $classes[] = 'mandatory-classes.html';
  $classes[] = 'recommended-classes.html';
  $classes[] = 'optional-classes.html';
  $classes[] = 'deprecated-classes.html';
  $props[]   = 'mandatory-properties-for-';
  $props[]   = 'recommended-properties-for-';
  $props[]   = 'optional-properties-for-';
  $props[]   = 'deprecated-properties-for-';

  $cextnr = 0;
  $pextnr = 0;

  foreach ($classes as $k => $v) {
    if (file_exists($folder . $v)) {
      $doc = new DOMDocument();
      $doc->loadHTMLFile($folder . $v);
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
	$curi = trim($nodes[$ck]->getElementsByTagName('td')->item(2)->nodeValue);

	$c[$cid]['id'] = $cid;
	$c[$cid]['types'] = $ctypes;
	$c[$cid]['name'] = $cname;
	$c[$cid]['href'] = $chref;
	$c[$cid]['uri'] = $curi;
	$c[$cid]['prop'] = array();

	if (in_array('ap-ext', $ctypes) && !in_array('deprecated', $ctypes)) {
          $cextnr++;
	}
	if (in_array('deprecated', $ctypes)) {
	  $c[$cid]['replaced-by-uri'] = ltrim(trim($nodes[$ck]->getElementsByTagName('td')->item(3)->nodeValue),'+');
	  $c[$cid]['replaced-by-href'] = '';
          if ($nodes[$ck]->getElementsByTagName('td')->item(3)->getElementsByTagName('a')->length > 0) {
            $c[$cid]['replaced-by-href'] = $nodes[$ck]->getElementsByTagName('td')->item(3)->getElementsByTagName('a')->item(0)->getAttribute('href');
          }	
	  $c[$cid]['deprecated-in'] = trim($nodes[$ck]->getElementsByTagName('td')->item(4)->nodeValue);

	  $deprecated[$cid] = $c[$cid];
	  $deprecated[$cid]['domain-name'] = '';
	  $deprecated[$cid]['domain-uri'] = '';
	  $deprecated[$cid]['domain-id'] = '';
	}

	foreach ($props as $pk => $pv) {
          if (file_exists($folder . $pv . $cid . '.html')) {
            $doc = new DOMDocument();
            $doc->loadHTMLFile($folder . $pv . $cid . '.html');
            $xpath = new DomXPath($doc);
	    $pnodes = $xpath->query("//tbody/tr");
            foreach ($pnodes as $pk => $pv) {
              $pid = $pnodes[$pk]->getAttribute('id');
              $ptypes = explode(' ', $pnodes[$pk]->getAttribute('class'));
              $pname = ltrim(trim($pnodes[$pk]->getElementsByTagName('td')->item(0)->nodeValue),'+');
              $phref = '';
              if ($pnodes[$pk]->getElementsByTagName('td')->item(0)->getElementsByTagName('a')->length > 0) {
                $phref = $pnodes[$pk]->getElementsByTagName('td')->item(0)->getElementsByTagName('a')->item(0)->getAttribute('href');
              }	
              $puri = trim($pnodes[$pk]->getElementsByTagName('td')->item(1)->nodeValue);

              $p[$pid]['id'] = $pid;
              $p[$pid]['types'] = $ptypes;
              $p[$pid]['name'] = $pname;
              $p[$pid]['href'] = $phref;
	      $p[$pid]['uri'] = $puri;

	      if (in_array('deprecated', $ptypes)) {
	        $p[$pid]['replaced-by-uri'] = ltrim(trim($pnodes[$pk]->getElementsByTagName('td')->item(2)->nodeValue),'+');
	        $p[$pid]['replaced-by-href'] = '';
                if ($pnodes[$pk]->getElementsByTagName('td')->item(2)->getElementsByTagName('a')->length > 0) {
                  $p[$pid]['replaced-by-href'] = $pnodes[$pk]->getElementsByTagName('td')->item(2)->getElementsByTagName('a')->item(0)->getAttribute('href');
                }	
	        $p[$pid]['deprecated-in'] = trim($pnodes[$pk]->getElementsByTagName('td')->item(3)->nodeValue);
	      }

              $c[$cid]['prop'][] = $p[$pid];
              if (in_array('mandatory', $p[$pid]['types'])) {
                $c[$cid]['prop-mandatory'][] = $p[$pid];
              }
              if (in_array('recommended', $p[$pid]['types'])) {
                $c[$cid]['prop-recommended'][] = $p[$pid];
              }
              if (in_array('optional', $p[$pid]['types'])) {
                $c[$cid]['prop-optional'][] = $p[$pid];
              }
              if (in_array('ap-ext', $p[$pid]['types'])) {
                $c[$cid]['prop-ap-ext'][] = $p[$pid];
              }
              if (in_array('deprecated', $p[$pid]['types'])) {
                $c[$cid]['prop-deprecated'][] = $p[$pid];
	        $deprecated[$pid] = $p[$pid];
	        $deprecated[$pid]['domain-name'] = $c[$cid]['name'];
	        $deprecated[$pid]['domain-uri'] = $c[$cid]['uri'];
	        $deprecated[$pid]['domain-id'] = $cid;
              }
              if (in_array('ap-ext', $p[$pid]['types']) && !in_array('deprecated', $p[$pid]['types'])) {
                $pextnr++;
              }
	    }
	  }
	}

      }
    }
  }

  array_multisort(array_column($c, 'name'), $c);
  foreach ($c as $k => $v) {
    if (isset($c[$k]['prop-mandatory'])) {
      array_multisort(array_column($c[$k]['prop-mandatory'], 'uri'), $c[$k]['prop-mandatory']);
    } 
    if (isset($c[$k]['prop-recommended'])) {
      array_multisort(array_column($c[$k]['prop-recommended'], 'uri'), $c[$k]['prop-recommended']);
    } 
    if (isset($c[$k]['prop-optional'])) {
      array_multisort(array_column($c[$k]['prop-optional'], 'uri'), $c[$k]['prop-optional']);
    } 
    if (isset($c[$k]['prop-ap-ext'])) {
      array_multisort(array_column($c[$k]['prop-ap-ext'], 'uri'), $c[$k]['prop-ap-ext']);
    } 
    if (isset($c[$k]['prop-deprecated'])) {
      array_multisort(array_column($c[$k]['prop-deprecated'], 'name'), $c[$k]['prop-deprecated']);
    } 
    if (isset($deprecated)) {
      array_multisort(array_column($deprecated, 'name'), $deprecated);
    } 
  }

//  foreach ($c as $k => $v) {
//    echo $v['name'] . "\n";
//  }
//  exit;
//print_r($c);
//exit; 
//print_r($deprecated);
//exit; 

  $tables[0]['id'] = 'quick-reference-of-classes-and-properties';
  $tables[0]['classes'] = ['mandatory', 'recommended', 'optional'];
  $tables[0]['groups'] = ['prop-mandatory', 'prop-recommended', 'prop-optional'];
  $tables[0]['type'] = '';
  $tables[0]['min-prop'] = 0;

  $tables[1]['id'] = 'geodcat-ap-classes-and-properties';
  $tables[1]['classes'] = ['mandatory', 'recommended', 'optional'];
  $tables[1]['groups'] = ['prop-mandatory', 'prop-recommended', 'prop-optional'];
  $tables[1]['type'] = 'ap-ext';
  $tables[1]['min-prop'] = 1;

  $tables[2]['id'] = 'deprecated-classes-and-properties';
  $tables[2]['classes'] = ['mandatory', 'recommended', 'optional', 'deprecated'];
  $tables[2]['groups'] = ['prop-deprecated'];
  $tables[2]['type'] = 'deprecated';
  $tables[2]['min-prop'] = 0;

  foreach ($tables as $tk => $tv) {

  $html  = '';
  if ($tv['type'] == 'ap-ext') {
    $html .= '<p>This version of GeoDCAT-AP extends [[DCAT-AP-20191120]] with ' . $cextnr . ' additional classes and ' . $pextnr . ' additional properties, listed in the following table.</p>' . "\n\n";
  }
  $html .= '<table class="simple" id="table-' . $tv['id'] . '">' . "\n";
  $html .= '<thead>' . "\n";
  $html .= '<tr>' . "\n";
  if ($tv['type'] == 'deprecated') {
    $html .= '<th>Class / Property </th>' . "\n";
    $html .= '<th>URI</th>' . "\n";
    $html .= '<th>Domain</th>' . "\n";
    $html .= '<th>Replaced by</th>' . "\n";
    $html .= '<th>Deprecated in</th>' . "\n";
  }
  else {
    $html .= '<th>Class</th>' . "\n";
    $html .= '<th>Class URI</th>' . "\n";
    $html .= '<th>Mandatory prop.</th>' . "\n";
    $html .= '<th>Recommended prop.</th>' . "\n";
    $html .= '<th>Optional prop.</th>' . "\n";
  }
  $html .= '</tr>' . "\n";
  $html .= '</thead>' . "\n";
  $html .= '<tbody>' . "\n";
  foreach ($c as $k => $v) {
//  print_r($tv['classes']);
//  print_r($c[$k]['types']);
//  print_r(array_intersect($tv['classes'], $c[$k]['types']));
//  exit;
  if (count(array_intersect($tv['classes'], $c[$k]['types'])) > 0) {
  if (count($c[$k]['prop']) >= $tv['min-prop'] && (in_array($tv['type'], $c[$k]['types']) || $tv['type'] == '' || isset($c[$k]['prop-' . $tv['type']]) && count($c[$k]['prop-' . $tv['type']]) > 0)) {
//echo $c[$k]['name'] . "\n";	  

    $cprefix = '';
    if (in_array('ap-ext',$c[$k]['types'])) {
      $cprefix = '+';
    }
    if ($tv['type'] == 'deprecated') {
      if (in_array('deprecated', $c[$k]['types'])) {
//echo '<td>' . $cprefix . '<a href="#' . $k . '">' . $c[$k]['name'] . '</a></td>' . "\n";
        $html .= '<tr>' . "\n";
        $html .= '<td>' . $cprefix . '<a href="#' . $k . '">' . $c[$k]['name'] . '</a></td>' . "\n";
        $html .= '<td><code>' . $c[$k]['uri'] . '</code></td>' . "\n";
        $html .= '<td></td>' . "\n";
        $html .= '<td><a href="' . $c[$k]['replaced-by-href']  . '"><code>' . $c[$k]['replaced-by-uri'] . '</code></a></td>' . "\n";
        $html .= '<td>' . $c[$k]['deprecated-in'] . '</td>' . "\n";
        $html .= '</tr>' . "\n";
      }
    }
    else {
//echo '<td>' . $cprefix . '<a href="#' . $k . '">' . $c[$k]['name'] . '</a></td>' . "\n";
      $html .= '<tr>' . "\n";
      $html .= '<td>' . $cprefix . '<a href="#' . $k . '">' . $c[$k]['name'] . '</a></td>' . "\n";
      $html .= '<td><code>' . $c[$k]['uri'] . '</code></td>' . "\n";
    }
    foreach ($tv['groups'] as $gk => $gv) {
      if ($tv['type'] == 'deprecated') {
//        $html .= '<tr>' . "\n";
      }
      else {
        $html .= '<td>' . "\n";
      }
      if (isset($c[$k][$gv])) {
        foreach ($c[$k][$gv] as $pk => $pv) {
          if ($tv['type'] == '' || in_array($tv['type'], $pv['types'])) {
            $pprefix = '';
            if (in_array('ap-ext',$pv['types'])) {
              $pprefix = '+';
            }
            if ($tv['type'] == 'deprecated') {
              $html .= '<tr>' . "\n";
              $html .= '<td>' . $pprefix . '<a href="#' . $pv['id'] . '">' . $pv['name'] . '</a></td>' . "\n";
              $html .= '<td><code>' . $pv['uri'] . '</code></td>' . "\n";
              $html .= '<td>' . $cprefix . '<a title="' . $c[$k]['name'] . '" href="#' . $k . '"><code>' . $c[$k]['uri'] . '</code></a></td>' . "\n";
              $html .= '<td><a href="' . $pv['replaced-by-href']  . '"><code>' . $pv['replaced-by-uri'] . '</code></a></td>' . "\n";
              $html .= '<td>' . $pv['deprecated-in'] . '</td>' . "\n";
              $html .= '</tr>' . "\n";
            }
            else {
              $html .= '<p>' . $pprefix . '<a title="' . $pv['name'] . '" href="#' . $pv['id'] . '"><code>' . $pv['uri'] . '</code></a></p>' . "\n";
            }
          }  
        }  
      }
      if ($tv['type'] == 'deprecated') {
//        $html .= '</tr>' . "\n";
      }
      else {
        $html .= '</td>' . "\n";
      }
    }
    if ($tv['type'] != 'deprecated') {
      $html .= '</tr>' . "\n";
    }
  }
  }
  }
  $html .= '</tbody>' . "\n";
  $html .= '</table>' . "\n";

  file_put_contents($folder . $tv['id'] . '.html', $html);
//  echo $html;
//  echo $folder . $tv['id'] . '.html' . "\n";

  }

?>

