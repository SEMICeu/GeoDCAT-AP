#!/bin/bash

echo "== Build class tables =="

echo ""

php build-class-tables.php

echo ""

echo "Done."

echo ""

echo "== Build summary tables =="

php build-summary-tables.php

echo ""

echo "Done."

echo ""

echo "== Build example index =="

echo ""

php build-example-index.php

echo ""

echo "Done."

