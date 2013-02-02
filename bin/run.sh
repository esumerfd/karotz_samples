#!/bin/bash

if [[ $# -lt 1 || $1 == -h ]]; then
  echo "usage: `basename $0` <app dir>"
  exit 1
fi

app_dir=$1

java -jar lib/karotz-vm-1.0-SNAPSHOT-jar-with-dependencies.jar $app_dir

