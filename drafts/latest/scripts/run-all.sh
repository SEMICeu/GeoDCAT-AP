#!/bin/bash

echo "== Build class tables =="

php build-class-tables.php

echo "== Build summary tables =="

php build-summary-tables.php

echo "== Build example index =="

php build-example-index.php

echo "== Serialise RDF vocabulary =="

bash serialise-vocabulary.sh

echo "== Serialise RDF examples =="

bash serialise-examples.sh

