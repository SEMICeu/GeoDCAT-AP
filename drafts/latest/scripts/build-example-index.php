<?php

  $folder = "../examples/";
  $target = $folder . "README.md";

  $rdf = "";
  foreach (glob($folder . "*.rdf") as $file) {
    $rdf .= "- [`" . basename($file) . "`](./" . basename($file) . ")\n";
  }
  
  $ttl = "";
  foreach (glob($folder . "*.ttl") as $file) {
    $ttl .= "- [`" . basename($file) . "`](./" . basename($file) . ")\n";
  }

  $md  = "# Examples\n";
  $md .= "\n## In Turtle\n\n";
  $md .= $ttl;
  $md .= "\n## In RDF/XML\n\n";
  $md .= $rdf;

//  echo $md;
  file_put_contents($target,$md);
