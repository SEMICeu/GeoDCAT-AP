<?php

  $folder = "../examples/";
  $target = $folder . "README.md";

  $ext = array(".ttl",".rdf",".jsonld");
  $label[".ttl"] = "Turtle";
  $label[".rdf"] = "RDF/XML";
  $label[".jsonld"] = "JSON-LD";
  $file = array();

  foreach ($ext as $e) {
    foreach (glob($folder . "*" . $e) as $f) {
      $file[basename($f, $e)][$e] = basename($f);
    }
  }

  $thead = "";

  foreach ($ext as $e) {
    $thead .= '<th>' . $label[$e] . '</th>' . "\n";
  }

  $tbody = "";

  foreach ($file as $fk => $fv) {
    $tbody .= '<tr>' . "\n";
    foreach ($ext as $e) {
      $tbody .= '<td><a href="./' . $file[$fk][$e] . '"><code>' . $file[$fk][$e] . '</code></a></td>' . "\n";
    }
    $tbody .= '</tr>' . "\n";
  }

  $table = '';
  $table .= '<table>' . "\n";
  $table .= '<thead>' . "\n";
  $table .= '<tr>' . "\n";
  $table .= $thead;
  $table .= '</tr>' . "\n";
  $table .= '</thead>' . "\n";
  $table .= '<tbody>' . "\n";
  $table .= $tbody;
  $table .= '</tbody>' . "\n";
  $table .= '</table>' . "\n";

  $md = '';
  $md .= '<h1>Examples</h1>' . "\n";
  $md .= $table;

/*
  $rdf = "";
  foreach (glob($folder . "*.rdf") as $file) {
    $rdf .= "- [`" . basename($file) . "`](./" . basename($file) . ")\n";
  }
  
  $ttl = "";
  foreach (glob($folder . "*.ttl") as $file) {
    $ttl .= "- [`" . basename($file) . "`](./" . basename($file) . ")\n";
  }

  $jsonld = "";
  foreach (glob($folder . "*.jsonld") as $file) {
    $jsonld .= "- [`" . basename($file) . "`](./" . basename($file) . ")\n";
  }

  $md  = "# Examples\n";
  $md .= "\n## In Turtle\n\n";
  $md .= $ttl;
  $md .= "\n## In RDF/XML\n\n";
  $md .= $rdf;
  $md .= "\n## In JSON-LD\n\n";
  $md .= $jsonld;
*/

//  echo $md;
  file_put_contents($target,$md);

?>
