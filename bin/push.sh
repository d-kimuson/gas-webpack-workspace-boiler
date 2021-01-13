#!/bin/bash

yarn build && cd projects/$1 && clasp push
