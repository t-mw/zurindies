#!/bin/sh
# using tidy 5.6.0 from macports
hugo
tidy -im -w 160 --tidy-mark no public/*.html
