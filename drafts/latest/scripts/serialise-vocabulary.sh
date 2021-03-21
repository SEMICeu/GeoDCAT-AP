#!/bin/bash

for file in ../*.rdf; do
  rdfpipe -o text/turtle "$file" > "../$(basename "$file" .rdf).ttl"
  sed -i $'s/    /  /g' "../$(basename "$file" .rdf).ttl"
  rdfpipe -o application/ld+json "$file" > "../$(basename "$file" .rdf).jsonld"
  sed -i $'s/    /  /g' "../$(basename "$file" .rdf).jsonld"
done
