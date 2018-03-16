#!/bin/bash
# need brew install graphviz
# need npm i -g svgexport
EXT=svg
TEMPSVG=tempsvg.svg
SRC=$1
DEST=$(echo $SRC | sed -e "s/\.dot$/.$EXT/") && \
PNG=$(echo $DEST | sed -e "s/\.$EXT/.png/") && \
echo $SRC '->' $DEST &&\
dot -T$EXT -Nshape=record -Nmargin=0.05 -Nfontsize=10pt -Nfontname=Consolas -Efontsize=10pt -Efontname=helvetica -Ecolor=maroon -Efontcolor=navy -Gnodesep=0.2 -o $DEST $SRC && \
svgexport $DEST $PNG
# echo 'Cleanup..' && \
#  rm $TEMPSVG && \
echo 'Done.'