#!/bin/bash

for file in ../examples/*.rdf; do
  rdfpipe -o text/turtle "$file" > "../examples/$(basename "$file" .rdf).ttl"
#  rdfpipe -o application/ld+json "$file" > "../examples/$(basename "$file" .rdf).jsonld"
done
sed -i $'s/    /  /g' ../examples/*.ttl
#sed -i $'s/    /  /g' ../examples/*.jsonld
sed -i $'s/dcterms:/dct:/g' ../examples/*.ttl
