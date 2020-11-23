#!/bin/bash

for file in *.rdf; do
  rdfpipe -o text/turtle "$file" > "$(basename "$file" .rdf).ttl"
#  rdfpipe -o application/ld+json "$file" > "$(basename "$file" .rdf).jsonld"
done
sed -i $'s/    /  /g' *.ttl
#sed -i $'s/    /  /g' *.jsonld
